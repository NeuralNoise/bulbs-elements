import { registerElement, BulbsHTMLElement } from 'bulbs-elements/register';
import { filterBadResponse } from 'bulbs-elements/util';
import invariant from 'invariant';
import firebase from 'firebase/app';
import 'firebase/database';
import scrollToElement from 'scroll-to-element';

function parseEntry (entry) {
  if ('published' in entry && entry.published !== false) {
    entry.published = new Date(Date.parse(entry.published));
  }

  return entry;
}

const LIVEBLOG_LATENCY = 5000;

export const Entries = {
  all: {},
};

const DEBUG = false;

class BulbsLiveblogEntry extends BulbsHTMLElement {
  debug (...message) {
    if (DEBUG) {
      console.log('<bulbs-liveblog-entry>', ...message);
    }
  }

  attachedCallback () {
    invariant(this.hasAttribute('entry-id'),
       '<bulbs-liveblog-entry> element MUST specify an `entry-id` attribute');

    invariant(this.hasAttribute('entry-published'),
       '<bulbs-liveblog-entry> element MUST specify an `entry-published` attribute');

    let thisEntry = {
      element: this,
      published: new Date(this.getAttribute('entry-published')),
    };

    Entries.all[this.getAttribute('entry-id')] = thisEntry;

    if (!Entries.oldestEntryDate || thisEntry.published < Entries.oldestEntryDate) {
      this.debug('new oldestEntryDate', thisEntry.published);
      Entries.oldestEntryDate = thisEntry.published;
    }

    this.debug('attachedCallback', this.getAttribute('entry-id'));
  }

  detachedCallback () {
    delete Entries.all[this.getAttribute('entry-id')];
    this.debug('detachedCallback', this.getAttribute('entry-id'));
  }
}

registerElement('bulbs-liveblog-entry', BulbsLiveblogEntry);

class BulbsLiveblog extends BulbsHTMLElement {
  debug (...message) {
    if (DEBUG) {
      console.log('<bulbs-liveblog>', ...message);
    }
  }

  makeNewEntriesButton () {
    let button = document.createElement('button');
    button.classList.add('liveblog-new-entries');
    button.innerHTML = `Show ${this.newEntries.length} New Articles`;
    return button;
  }

  attachedCallback () {
    invariant(this.hasAttribute('firebase-path'),
      '<bulbs-liveblog> element MUST specify a `firebase-path` attribute');

    invariant(this.hasAttribute('firebase-url'),
      '<bulbs-liveblog> element MUST specify a `firebase-url` attribute');

    invariant(this.hasAttribute('firebase-api-key'),
      '<bulbs-liveblog> element MUST specify a `firebase-api-key` attribute');

    invariant(this.hasAttribute('liveblog-new-entries-url'),
      '<bulbs-liveblog> element MUST specify a `liveblog-new-entries-url` attribute');

    this.bindHandlers();

    this.setupFirebase();
    this.setupInterval();
    this.setupEvents();

    this.newEntriesButtons = this.getElementsByClassName('liveblog-new-entries');
    this.entryStaging = document.createElement('div');
    this.entryStaging.style.display = 'none';
    this.newEntries = this.entryStaging.getElementsByTagName('bulbs-liveblog-entry');
    this.append(this.entryStaging);

    this.entriesContainer = this.getElementsByClassName('liveblog-entries');
    this.entriesElements = this.getElementsByTagName('liveblog-entry');
    this.entriesData = {};

  }

  bindHandlers () {
    this.handleInterval = this.handleInterval.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFirebaseValue = this.handleFirebaseValue.bind(this);
  }

  detachedCallback () {
    this.teardownFirebase();
    this.teardownInterval();
  }

  setupFirebase () {
    let firebaseAppConfig = {
      apiKey: this.getAttribute('firebase-api-key'),
      databaseURL: this.getAttribute('firebase-url'),
    };
    let firebaseAppName = `liveblog-${this.getAttribute('liveblog-id')}`;

    this.firebaseApp = firebase.initializeApp(firebaseAppConfig, firebaseAppName);
    this.firebaseDatabase = this.firebaseApp.database();
    this.firebaseRef = this.firebaseDatabase
                        .ref(this.getAttribute('firebase-path'))
                        .orderByChild('published')
                        .limitToLast(100);
  }

  setupInterval () {
    this.interval = setInterval(this.handleInterval, LIVEBLOG_LATENCY);
  }

  setupEvents () {
    this.addEventListener('click', this.handleClick);
    this.firebaseRef.on('value', this.handleFirebaseValue);
  }

  teardownFirebase () {
    this.firebaseRef.off();
  }

  teardownInterval () {
    clearInterval(this.interval);
  }

  handleFirebaseValue (snapshot) {
    this.entriesData = snapshot.val() || {};
    Object.keys(this.entriesData).forEach((entryId) => {
      parseEntry(this.entriesData[entryId]);
    });
    this.debug('handleFirebaseValue:', this.entriesData);
    this.handleInterval();
  }

  handleInterval () {
    this.debug('handleInterval');
    if (this.fetching) {
      this.debug('handleInterval: bailing out: already fetching data');
      return;
    }

    let entryIds = this.getEntryIdsToFetch();
    if (entryIds.length) {
      this.debug('handleInterval: entryIds', entryIds);
      this.handleBlogUpdate(entryIds);
    }
  }

  getEntryIdsToFetch () {
    let now = new Date();
    let entryIds = [];
    this.debug('getEntryIdsToFetch', Object.keys(this.entriesData), Object.keys(Entries.all));
    Object.keys(this.entriesData).forEach((entryId) => {
      let entry = this.entriesData[entryId];
      if (entry.published && entry.published < now && !Entries.all[entryId]) {
        this.debug('getEntryIdsToFetch', entryId, '>= oldestEntryDate', entry.published >= Entries.oldestEntryDate, 'entry.published', entry.published, 'oldestEntryDate', Entries.oldestEntryDate);
        if (Entries.oldestEntryDate) {
          if (entry.published >= Entries.oldestEntryDate) {
            entryIds.push(entryId);
          }
        }
        else {
          entryIds.push(entryId);
        }
      }
    });
    this.debug('getEntryIdsToFetch: return', entryIds);
    return entryIds;
  }

  handleClick (event) {
    if (event.target.matches('button.liveblog-new-entries')) {
      this.showNewEntries();
    }

    if (event.target.matches('button.liveblog-entry-reset')) {
      this.resetSelectedEntry();
    }
  }

  showNewEntries () {
    this.removeNewEntriesButton();
    while (this.entryStaging.firstElementChild) {
      this.entriesContainer[0].prepend(this.entryStaging.firstElementChild);
    }
    scrollToElement(this.entriesContainer[0].childNodes[0], {
      duration: 250,
    });
    window.picturefill();
  }

  resetSelectedEntry () {
    let sharedEntry = document.querySelector('.liveblog-entry-shared');
    sharedEntry.classList.remove('liveblog-entry-shared');
  }

  handleBlogUpdate (entryIds) {
    this.debug('handleBlogUpdate ', url);
    let url = `${this.getAttribute('liveblog-new-entries-url')}?entry_ids=${entryIds.join(',')}`;
    this.fetching = true;
    fetch(url, { credentials: 'include' })
      .then(filterBadResponse)
      .then((response) => response.text())
      .then(this.handleBlogFetchSuccess.bind(this))
      .catch(this.handleBlogFetchError.bind(this))
    ;
  }

  handleBlogFetchSuccess (htmlText) {
    this.fetching = false;
    let parser = document.createElement('div');
    parser.innerHTML = htmlText;
    while (parser.firstElementChild) {
      this.entryStaging.append(parser.firstElementChild);
    }
    this.removeNewEntriesButton();
    if (this.newEntries.length > 0) {
      let newEntriesButton = this.makeNewEntriesButton();
      this.entriesContainer[0].prepend(newEntriesButton);
    }
  }

  removeNewEntriesButton () {
    [].forEach.call(this.newEntriesButtons, (button) => button.remove());
  }

  handleBlogFetchError (error) {
    this.fetching = false;
    console.error(error);
  }
}

registerElement('bulbs-liveblog', BulbsLiveblog);