/* eslint-disable no-return-assign */
import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import RailPlayer from './rail-player';
import RailPlayerRoot from './components/root';

import VideoField from '../../fields/video';
import VideoRequestField from '../../fields/video-request';

describe('<rail-player>', () => {
  let subject;

  describe('PropTypes', () => {
    beforeEach(() => subject = RailPlayer.propTypes);

    it('requires a channel', () => {
      expect(subject.channel).to.eql(PropTypes.string.isRequired);
    });

    it('requires a src attribute', () => {
      expect(subject.src).to.eql(PropTypes.string.isRequired);
    });
  });

  describe('schema', () => {
    beforeEach(() => subject = RailPlayer.schema);

    it('has a video field', () => {
      expect(subject.video).to.eql(VideoField);
    });

    it('has a videoRequest field', () => {
      expect(subject.videoRequest).to.eql(VideoRequestField);
    });
  });

  describe('fetchVideo', () => {
    context('without campaign', () => {
      beforeEach(() => {
        subject = new RailPlayer({ src: 'http://example.org/a-src' });
      });
      it('checks if ad block is enabled', () => {
        sinon.spy(subject.store.actions, 'fetchVideo');
        subject.isAdBlocked = true;
        subject.fetchVideo();
        expect(subject.store.actions.fetchVideo).to.have.been.calledWith('http://example.org/a-src?adBlockActive=true');
      });
      it('checks if ad block is disabled', () => {
        sinon.spy(subject.store.actions, 'fetchVideo');
        subject.isAdBlocked = false;
        subject.fetchVideo();
        expect(subject.store.actions.fetchVideo).to.have.been.calledWith('http://example.org/a-src');
      });
    });
    context('with campaign', () => {
      beforeEach(() => {
        subject = new RailPlayer({ src: 'http://example.org/a-src?campaign_id=534' });
      });
      it('checks if ad block is enabled and a query param already exists', () => {
        sinon.spy(subject.store.actions, 'fetchVideo');
        subject.isAdBlocked = true;
        subject.fetchVideo();
        expect(subject.store.actions.fetchVideo).to.have.been.calledWith(
          'http://example.org/a-src?campaign_id=534&adBlockActive=true');
      });
      it('checks if ad block is disabled', () => {
        sinon.spy(subject.store.actions, 'fetchVideo');
        subject.isAdBlocked = false;
        subject.fetchVideo();
        expect(subject.store.actions.fetchVideo).to.have.been.calledWith('http://example.org/a-src?campaign_id=534');
      });
    });
  });

  describe('componentDidMount', () => {
    beforeEach(() => {
      subject = new RailPlayer({ src: 'http://example.org/a-src' });
    });

    it('calls fetchVideo', () => {
      sinon.spy(subject, 'fetchVideo');
      subject.componentDidUpdate({ src: 'http://example.org/new-src' });
      expect(subject.fetchVideo).to.have.been.called;
    });
  });

  describe('componentDidUpdate', () => {
    context('src did change', () => {
      beforeEach(() => {
        subject = new RailPlayer({ src: 'http://example.org/a-src' });
      });

      it('calls fetchVideo', () => {
        sinon.spy(subject, 'fetchVideo');
        subject.componentDidUpdate({ src: 'http://example.org/new-src' });
        expect(subject.fetchVideo).to.have.been.called;
      });
    });

    context('src did not change', () => {
      beforeEach(() => {
        subject = new RailPlayer({ src: 'http://example.org/a-src' });
      });

      it('does not call fetchVideo', () => {
        sinon.spy(subject, 'fetchVideo');
        subject.componentDidUpdate({ src: subject.props.src });
        expect(subject.fetchVideo).not.to.have.been.called;
      });
    });
  });

  describe('render', () => {
    it('renders a RailPlayerRoot', () => {
      expect(shallow(<RailPlayer/>)).to.have.descendants(RailPlayerRoot);
    });

    describe('RailPlayerRoot.props', () => {
      let railPlayer;
      beforeEach(() => {
        let props = {
          channel: 'channel',
          recircUrl: 'http://example.org/recirc',
          targetCampaignId: '12345',
        };
        railPlayer = new RailPlayer(props);
        subject = railPlayer.render().props;
      });

      it('renders a channel prop', () => {
        expect(subject.channel).to.eql('channel');
      });

      it('passes actions through', () => {
        expect(subject.actions).to.eql(railPlayer.store.actions);
      });

      it('passes recircUrl through', () => {
        expect(subject.recircUrl).to.eql('http://example.org/recirc');
      });

      it('passes targetCampaignId through', () => {
        expect(subject.targetCampaignId).to.eql('12345');
      });

      it('merges video from state', () => {
        expect(subject.video).to.eql(railPlayer.state.video);
      });
    });
  });
});
