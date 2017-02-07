// Expose jwplayer on the global context
//
// The jwplayer.js file calls window.jwplayer = /* HOT JWPLAYER JS */;
require('../plugins/jwplayer');

import GoogleAnalytics from '../plugins/google-analytics';
import Comscore from '../plugins/comscore';
import { prepGaEventTracker, InViewMonitor } from 'bulbs-elements/util';

/* global jQuery, ga, AnalyticsManager, BULBS_ELEMENTS_ONIONSTUDIOS_GA_ID */

import React, { PropTypes } from 'react';
import invariant from 'invariant';

// FIXME: where should this be defined? Per-app?
//  Or in some better sort of settings file here?
global.BULBS_ELEMENTS_ONIONSTUDIOS_GA_ID = 'UA-223393-14';
global.BULBS_ELEMENTS_COMSCORE_ID = '6036328';

let jwPlayerIdCounter = 0;

export default class Revealed extends React.Component {
  constructor (props) {
    super(props);
    this.forwardJWEvent = this.forwardJWEvent.bind(this);
    this.setPlaysInline = this.setPlaysInline.bind(this);
    this.handlePauseEvent = this.handlePauseEvent.bind(this);
  }

  componentDidMount () {

    invariant(
      global.jQuery,
      '`<bulbs-video>` requires `jQuery` to be in global scope.'
    );
    invariant(
      global.ga,
      '`<bulbs-video>` requires `ga` to be in global scope.'
    );
    invariant(
      global.BULBS_ELEMENTS_ONIONSTUDIOS_GA_ID,
      '`<bulbs-video>` requires `BULBS_ELEMENTS_ONIONSTUDIOS_GA_ID` to be in global scope.'
    );
    invariant(
      global.jwplayer,
      '`<bulbs-video>` requires `jwplayer` to be in global scope.'
    );

    let targeting = this.props.video.targeting || {};
    let hostChannel = this.props.targetHostChannel || 'main';
    let specialCoverage = this.props.targetSpecialCoverage || 'None';
    let filteredTags = [];
    let autoplayInViewBool = typeof this.props.autoplayInView === 'string';

    let dimensions = {
      'dimension1': targeting.target_channel || 'None',
      'dimension2': targeting.target_series || 'None',
      'dimension3': targeting.target_season || 'None',
      'dimension4': targeting.target_video_id || 'None',
      'dimension5': hostChannel,
      'dimension6': specialCoverage,
      'dimension7': true, // 'has_player' from old embed
      'dimension8': this.props.autoplay || autoplayInViewBool || 'None',
      'dimension9': this.props.targetCampaignId || 'None', // Tunic Campaign
      'dimension10': 'None', // Platform
    };
    let gaTrackerAction = prepGaEventTracker(
      'videoplayer',
      BULBS_ELEMENTS_ONIONSTUDIOS_GA_ID,
      dimensions
    );

    // Making assignment copies here so we can mutate object structure.
    let videoMeta = Object.assign({}, this.props.video);
    videoMeta.hostChannel = hostChannel;
    videoMeta.gaTrackerAction = gaTrackerAction;
    videoMeta.player_options.shareUrl = this.props.shareUrl || `${window.location.href}/v/${videoMeta.id}`;
    videoMeta.targeting = targeting;

    filteredTags.push(hostChannel);

    if (specialCoverage !== 'None') {
      filteredTags.push(specialCoverage);
    }

    if (this.props.targetCampaignNumber) {
      filteredTags.push(this.props.targetCampaignNumber);
    }

    if (this.props.targetCampaignId) {
      filteredTags.push(`campaign-${this.props.targetCampaignId}`);
    }

    this.props.video.tags.forEach(function (tag) {
      // Temporary until videojs_options completely removed from Onion Studios
      if (tag !== 'main') {
        filteredTags.push(tag);
      }
    });

    videoMeta.tags = filteredTags;

    if (this.props.muted) {
      videoMeta.player_options.muted = true;
    }

    if (this.props.defaultCaptions) {
      videoMeta.player_options.defaultCaptions = true;
    }

    videoMeta.player_options.embedded = this.props.embedded;

    videoMeta.player_options.disable_ads = this.props.disableAds;

    this.makeVideoPlayer(this.refs.videoContainer, videoMeta);
  }

  componentWillUnmount () {
    this.player.remove();
    InViewMonitor.remove(this.refs.videoViewport);
  }

  extractSources (sources) {
    let sourceMap = {};
    let extractedSources = [];

    sources.forEach(function (source) {
      sourceMap[source.content_type] = source.url;
    });

    if (sourceMap['application/x-mpegURL']) {
      extractedSources.push({
        file: sourceMap['application/x-mpegURL'],
      });
    }

    if (sourceMap['video/mp4']) {
      extractedSources.push({
        file: sourceMap['video/mp4'],
      });
    }

    return extractedSources;
  }

  cacheBuster () {
    return Math.round(Math.random() * 1.0e+10);
  }

  parseParam (name, queryString) {
    // Properly escape array values in param
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    // Grab params from query string
    let results = regex.exec(queryString);
    if (results) {
      results = decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    return results;
  }

  vastTest (searchString) { // eslint-disable-line consistent-return
    if (searchString !== '') {
      let vastId = this.parseParam('xgid', searchString);

      if (vastId) {
        return vastId;
      }
    }

    return false;
  }

  vastUrl (videoMeta) {
    let baseUrl = 'https://pubads.g.doubleclick.net/gampad/ads';

    let vastTestId = this.vastTest(window.location.search);

    // See docs (https://support.google.com/dfp_premium/answer/1068325?hl=en) for param info
    baseUrl += '?sz=400x300';
    baseUrl += `&iu=/4246/${window.Bulbs.settings.DFP_SITE_CODE}`;
    baseUrl += '&impl=s';
    baseUrl += '&gdfp_req=1';
    baseUrl += '&env=vp';
    baseUrl += '&output=xml_vast2';
    baseUrl += '&unviewed_position_start=1';
    baseUrl += `&url=${window.document.referrer}`;
    baseUrl += '&description_url=';
    baseUrl += `&correlator=${new Date().getTime()}`;

    // dfp_pagetype=home&dfp_site=onion&kuid=qxw4bky4u

    let customParamValues = '';
    customParamValues += `video_site=${videoMeta.channel_slug}`;
    customParamValues += `&dfp_specialcoverage=${videoMeta.targeting.dfp_specialcoverage}`
    customParamValues += `&dfp_campaign_id=${videoMeta.targeting.dfp_campaign_id}`
    customParamValues += `&video_id=${videoMeta.targeting.target_video_id}`
    customParamValues += `&video_channel=${videoMeta.targeting.target_channel}`
    customParamValues += `&video_series=${videoMeta.targeting.target_series}`
    customParamValues += `&pos=${videoMeta.hostChannel}`
    if (videoMeta.targeting.dfp_specialcoverage) {
      customParamValues += `&type=special_coverage`
    }

    // dfp_specialcoverage
    // dfp_campaign_id
    // video_id
    // video_site
    // video_series
    baseUrl += '&cust_params=' + encodeURIComponent(customParamValues);

    // if (vastTestId) {
    // TODO: forcedAdZone
    //   baseUrl += '&xgid=' + vastTestId;
    // }

    return baseUrl;
  }

  extractTrackCaptions (sources, defaultCaptions) {
    let captions = [];

    sources.forEach(function (source) {
      if (source.content_type === 'text/vtt') {
        captions.push({
          file: source.url,
          label: 'English',
          kind: 'captions',
          default: defaultCaptions || false,
        });
      }
    });

    return captions;
  }

  makeVideoPlayer (element, videoMeta) {
    element.id = `jw-player-${jwPlayerIdCounter++}`;
    this.player = global.jwplayer(element);

    this.player.videoMeta = videoMeta;

    let playerOptions = {
      key: 'qh5iU62Pyc0P3L4gpOdmw+k4sTpmhl2AURmXpA==',
      skin: {
        name: 'onion',
      },
      sources: this.extractSources(videoMeta.sources),
      image: videoMeta.player_options.poster,
      flashplayer: '//ssl.p.jwpcdn.com/player/v/7.7.3/jwplayer.flash.swf',
      aspectratio: '16:9',
      autostart: this.props.controller.revealed,
      hlshtml: true,
      mute: videoMeta.player_options.muted || false,
      preload: 'none',
      primary: 'html5',
      width: '100%',
      controls: !this.props.hideControls,
    };

    if (!videoMeta.player_options.embedded && !videoMeta.player_options.disable_ads) {
      playerOptions.advertising = {
        client: 'vast',
        tag: this.vastUrl(videoMeta),
        skipoffset: 5,
        vpaidmode: 'insecure',
      };
    }

    let tracks = this.extractTrackCaptions(videoMeta.sources, videoMeta.player_options.defaultCaptions);
    if (tracks.length > 0) {
      playerOptions.tracks = tracks;
    }

    if (!this.props.disableSharing) {
      playerOptions.sharing = {
        link: videoMeta.player_options.shareUrl,
        code: videoMeta.player_options.embedCode,
      };
    }

    if (typeof this.props.autoplayInView === 'string') {
      this.handleAutoPlayInView();
      // turn off autostart if player is not in viewport
      playerOptions.autostart = this.playerInViewport(this.refs.videoViewport);
    }

    this.player.setup(playerOptions);

    GoogleAnalytics.init(this.player, videoMeta.gaTrackerAction);
    Comscore.init(this.player, global.BULBS_ELEMENTS_COMSCORE_ID, videoMeta.player_options.comscore.metadata);

    this.player.on('beforePlay', this.setPlaysInline);
    this.player.on('beforePlay', this.forwardJWEvent);
    this.player.on('complete', this.forwardJWEvent);
    this.player.on('pause', this.handlePauseEvent);
    this.player.on('adPause', this.handlePauseEvent);
  }

  handleAutoPlayInView () {
    let videoViewport = this.refs.videoViewport;
    InViewMonitor.add(videoViewport);
    this.enterviewportEvent = () => this.player.play(true);
    videoViewport.addEventListener('enterviewport', this.enterviewportEvent);
    videoViewport.addEventListener('exitviewport', () => this.player.pause(true));
  }

  playerInViewport (videoViewport) {
    let overrideAutoPlay;
    if(InViewMonitor.isElementInViewport(videoViewport)) {
      overrideAutoPlay = true;
    }
    else {
      overrideAutoPlay = false;
    }
    return overrideAutoPlay;
  }

  handleClick () {
    if (this.props.hideControls) {
      this.player.play();
    }
  }

  handlePauseEvent (reason) {
    if (reason.pauseReason === 'external') {
      return;
    }
    else if (reason.pauseReason === 'interaction') {
      this.refs.videoViewport.removeEventListener('enterviewport', this.enterviewportEvent);
      this.player.pause(true);
    }
  }

  forwardJWEvent (event) {
    this.refs.videoViewport.dispatchEvent(new CustomEvent(`jw-${event.type}`));
  }

  setPlaysInline () {
    let videoEl = this.player.getContainer().querySelector('video');
    if (videoEl && this.props.playsInline) {
      videoEl.setAttribute('webkit-playsinline', true);
      videoEl.setAttribute('playsinline', true);
    }
  }

  render () {
    return (
      <div
        className='bulbs-video-viewport'
        ref="videoViewport"
        onClick={event => this.handleClick(event)}
        onTouchTap={event => this.handleClick(event)}
      >
        <div className='bulbs-video-video video-container' ref='videoContainer'>
        </div>
      </div>
    );
  }
}

Revealed.propTypes = {
  autoplay: PropTypes.bool,
  autoplayInView: PropTypes.string,
  autoplayNext: PropTypes.bool,
  controller: PropTypes.object.isRequired,
  defaultCaptions: PropTypes.bool,
  disableAds: PropTypes.bool,
  disableSharing: PropTypes.bool,
  embedded: PropTypes.bool,
  hideControls: PropTypes.bool,
  muted: PropTypes.bool,
  noEndcard: PropTypes.bool,
  playsInline: PropTypes.bool,
  shareUrl: PropTypes.string,
  targetCampaignId: PropTypes.string,
  targetCampaignNumber: PropTypes.string,
  targetHostChannel: PropTypes.string,
  targetSpecialCoverage: PropTypes.string,
  twitterHandle: PropTypes.string,
  video: PropTypes.object.isRequired,
};
