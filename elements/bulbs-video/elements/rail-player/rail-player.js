import React, { PropTypes } from 'react';
import { registerReactElement } from 'bulbs-elements/register';
import BulbsElement from 'bulbs-elements/bulbs-element';

import VideoField from '../../fields/video';
import VideoRequest from '../../fields/video-request';

import RailPlayerRoot from './components/root';

import './rail-player.scss';

export default class RailPlayer extends BulbsElement {
  initialDispatch () {
    this.store.actions.fetchVideo(this.props.src);
  }

  componentDidUpdate (prevProps) {
    if (this.props.src !== prevProps.src) {
      this.initialDispatch();
    }
  }

  render () {
    return (
      <RailPlayerRoot
        {...this.state}
        recircUrl={this.props.recircUrl}
        actions={this.store.actions}
        channel={this.props.channel}
      />
    );
  }
}

Object.assign(RailPlayer, {
  displayName: 'RailPlayer',
  schema: {
    video: VideoField,
    videoRequest: VideoRequest,
  },
  propTypes: {
    channel: PropTypes.string.isRequired,
    recircUrl: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  },
});

registerReactElement('rail-player', RailPlayer);
