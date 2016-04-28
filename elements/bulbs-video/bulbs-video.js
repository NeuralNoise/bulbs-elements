import React, { PropTypes } from 'react';
import {
  registerReactElement,
} from 'bulbs-elements/register';
import BulbsElement from 'bulbs-elements/bulbs-element';

import VideoField from './fields/video';
import VideoRequest from './fields/video-request';
import ControllerField from './fields/controller';

import BulbsVideoRoot from './components/root';

import './bulbs-video.scss';
import 'videojs/dist/video-js/video-js.css';
import 'videohub-player/dist/videohub-player.css';

export default class BulbsVideo extends BulbsElement {
  initialDispatch () {
    this.store.actions.fetchVideo(this.props.src);
  }

  componentWillReceiveProps (props) {
    // Prop Will Change
    if (this.props.src !== props.src) {
      this.store.actions.resetController();
      this.store.actions.fetchVideo(props.src);
    }
  }

  render () {
    return (
      <BulbsVideoRoot
        {...this.state}
        actions={this.store.actions}
      />
    );
  }
}

Object.assign(BulbsVideo, {
  displayName: 'BulbsVideo',
  schema: {
    video: VideoField,
    videoRequest: VideoRequest,
    controller: ControllerField,
  },
  propTypes: {
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    mute: PropTypes.bool,
    src: PropTypes.string.isRequired,
  },
});

registerReactElement('bulbs-video', BulbsVideo);
