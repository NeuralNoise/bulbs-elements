import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';

import Revealed from './revealed';
import video from '../fixtures/video.json';

describe('<bulbs-video> <Revealed>', () => {
  describe('propTypes', () => {
    let subject = Revealed.propTypes;

    it('requires video', () => {
      expect(subject.video).to.eql(PropTypes.object.isRequired);
    });
  });

  describe('render', () => {
    let subject;
    let props = { video };

    beforeEach(() => {
      props = {
        video: {
          sources: [
            { url: 'url-1', content_type: 'type-1' },
            { url: 'url-2', content_type: 'type-2' },
          ],
        },
      };
      subject = shallow(<Revealed {...props}/>);
    });

    it('renders a video viewport', () => {
      expect(subject.find('.bulbs-video-viewport')).to.have.length(1);
    });

    it('renders a <video>', () => {
      let videoEl = subject.find('video');
      expect(subject.find('video')).to.have.length(1);
      expect(videoEl).to.have.className('bulbs-video-video video-js vjs-default-skin');
      expect(videoEl).to.have.prop('controls');
    });

    it('renders video and sources', () => {
      expect(subject).to.contain(
        <source
          src='url-1'
          type='type-1'
        />
      );
      expect(subject).to.contain(
        <source
          src='url-2'
          type='type-2'
        />
      );
    });
  });

  describe('componentDidMount globalsCheck', () => {
    global.BULBS_ELEMENTS_ONIONSTUDIOS_GA_ID = 'a-ga-id';
    global.ga = () => {}

    const globals = [
      'jQuery', 'ga',
      'BULBS_ELEMENTS_ONIONSTUDIOS_GA_ID',
    ];

    globals.forEach((name) => {
      it(`${name} MUST be available globally`, () => {
        let _global = global[name];
        delete global[name];
        let subject = new Revealed({ video });
        expect(() => {
          subject.componentDidMount();
        }).to.throw(`\`<bulbs-video>\` requires \`${name}\` to be in global scope.`);
        global[name] = _global;
      });
    });
  });

  describe('componentDidMount', () => {
    beforeEach({});
  });
});
