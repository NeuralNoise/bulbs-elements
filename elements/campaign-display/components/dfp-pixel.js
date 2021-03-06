import React, { Component, PropTypes } from 'react';

export default class DfpPixel extends Component {

  componentDidMount () {
    const adsManager = window.BULBS_ELEMENTS_ADS_MANAGER;
    if (typeof adsManager !== 'undefined' &&
        typeof adsManager.loadAds === 'function') {
      adsManager.loadAds(this.refs.container);
    }
    else {
      console.warn(
        '<campaign-display> pixel will not trigger since ' +
        '`window.BULBS_ELEMENTS_ADS_MANAGER` is not configured to an ' +
        'AdsManager instance.'
      );
    }
  }

  render () {
    let targeting = {
      dfp_placement: this.props.placement,
      dfp_campaign_id: this.props.campaignId,
    };

    return (
      <div
          ref="container"
          className="dfp"
          data-ad-unit="campaign-pixel"
          data-targeting={ JSON.stringify(targeting) }>
      </div>
    );
  }
}

DfpPixel.displayName = 'DfpPixel';

DfpPixel.propTypes = {
  campaignId: PropTypes.number.isRequired,
  placement: PropTypes.string.isRequired,
};
