let prefixedSend = (gaPrefix) => {
  return `${gaPrefix}.send`;
};

class GoogleAnalytics {
  constructor(player, gaPrefix) {
    console.log(this, player);
    this.player = player;
    this.gaPrefix = gaPrefix;

    this.player.gaEvents = {};

    player.on('play', this.onPlay.bind(this));
    player.on('pause', this.onPause.bind(this));
    player.on('adBlock', this.onAdBlock.bind(this));
    player.on('complete', this.onComplete.bind(this));
    player.on('time', this.onTime.bind(this));
    // .on('adSkipped')
    // .on('adError')
    // .on('fullscreen') // fullscreen
    // .on('resize') // resize
    // .on('error')
    // .on('firstFrame') // Returns object with loadTime (in ms) of time between user hitting play and same user viewing their content
  }

  onPlay() {
    if (!this.player.playedOnce) {
      global.ga(
        prefixedSend(this.gaPrefix),
        'event', 'Video:' + this.player.videoMeta.channel_name,
        'start',
        this.player.videoMeta.player_options.shareUrl
      );
      this.player.playedOnce = true;
    }
    global.ga(
      prefixedSend(this.gaPrefix),
      'event', 'Video:' + this.player.videoMeta.channel_name,
      'play',
      this.player.videoMeta.player_options.shareUrl
    );
  }

  onPause() {
    global.ga(
      prefixedSend(this.gaPrefix), 'event',
      'Video:' + this.player.videoMeta.channel_name,
      'pause',
      this.player.videoMeta.player_options.shareUrl
    );
  }

  onComplete() {
    global.ga(
      prefixedSend(this.gaPrefix),
      'event', 'Video:' + this.player.videoMeta.channel_name,
      'end',
      this.player.videoMeta.player_options.shareUrl
    );
    this.player.playedOnce = false;
  }

  onAdBlock() {
    global.ga(
      prefixedSend(this.gaPrefix),
      'event',
      'Video:' + this.player.videoMeta.channel_name,
      'adblock',
      'true'
    );
  }

  onTime(event) {
    this.checkSecondsElapsed(3, event);
    this.checkSecondsElapsed(10, event);
    this.checkSecondsElapsed(30, event);
    this.checkPercentage(event, 25);
    this.checkPercentage(event, 50);
    this.checkPercentage(event, 75);
    this.checkPercentage(event, 95);
  }

  checkPercentage(event, percent) {
    let eventAction = percent + ' percent';

    if (this.player.gaEvents[eventAction]) {
      return;
    }

    let percentPlayed = Math.round(event.position / event.duration * 100);

    if (percentPlayed >= percent) {
      global.ga(
        prefixedSend(this.gaPrefix),
        'event', 'Video:' + this.player.videoMeta.channel_name,
        eventAction,
        this.player.videoMeta.player_options.shareUrl
      );
      this.player.gaEvents[eventAction] = true;
    }
  }

  checkSecondsElapsed(seconds, event) {
    let eventAction = seconds + ' seconds';

    if (this.player.gaEvents[eventAction]) {
      return;
    }

    if (event.position >= seconds) {
      global.ga(
        prefixedSend(this.gaPrefix),
        'event', 'Video:' + this.player.videoMeta.channel_name,
        eventAction,
        this.player.videoMeta.player_options.shareUrl
      );
      this.player.gaEvents[eventAction] = true;
    }
  }
}

export default {
  init (player, gaPrefix) {
    return new GoogleAnalytics(player, gaPrefix);
  },
};
