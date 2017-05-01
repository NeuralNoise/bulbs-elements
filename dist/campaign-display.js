webpackJsonp([37],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0}),t.displayPropType=void 0;var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(194),c=r(u),l=n(37),f=r(l),y=n(279),d=r(y),m=n(1),h=n(196);n(376);var g=n(378),b=r(g),P=n(379),O=r(P),v=n(380),w=r(v),T=function(e){function t(n){return i(this,t),(0,f.default)(!!n.placement,"campaign-display component requires a placement"),a(this,e.call(this,n))}return s(t,e),t.prototype.initialDispatch=function(){this.props.src&&this.store.actions.fetchCampaign(this.props.src)},t.prototype.componentDidUpdate=function(e){this.props.src!==e.src&&(this.store.actions.handleFetchComplete(null),this.initialDispatch())},t.prototype.render=function(){if(this.state.campaignRequest.networkError)return c.default.createElement("span",null);var e=p({},this.state,this.props,{nameOnly:"string"==typeof this.props.nameOnly,logoOnly:"string"==typeof this.props.logoOnly,noPixel:"string"==typeof this.props.noPixel,noLink:"string"==typeof this.props.noLink});return c.default.createElement(w.default,e)},t}(d.default);p(T,{displayName:"CampaignDisplay",schema:{campaign:b.default,campaignRequest:O.default},propTypes:{logoOnly:u.PropTypes.string,nameOnly:u.PropTypes.string,noLink:u.PropTypes.string,noPixel:u.PropTypes.string,placement:u.PropTypes.string.isRequired,preambleText:u.PropTypes.string.isRequired,src:u.PropTypes.string.isRequired}}),(0,m.registerReactElement)("campaign-display",(0,h.loadOnDemand)(T)),t.default=T;t.displayPropType=T.propTypes.display},376:function(e,t){},378:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={actions:{handleFetchComplete:function(e,t){return t}}};t.default=n},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(196),o={initialState:{requestInFlight:!1},actions:{fetchCampaign:function(e,t,n){return e.requestInFlight=!0,(0,r.makeRequest)(t,{credentials:"include",success:function(e){n.actions.fetchCampaignSuccess(e),n.actions.handleFetchComplete(e)},failure:n.actions.fetchCampaignFailure,error:n.actions.fetchCampaignError}),e},fetchCampaignSuccess:function(e){e.requestInFlight=!1},fetchCampaignFailure:function(e,t){return e.requestInFlight=!1,e.requestFailure=t,e},fetchCampaignError:function(e,t){return e.requestInFlight=!1,e.networkError=t,e}}};t.default=o},380:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var p=n(194),u=r(p),c=n(381),l=r(c),f=n(384),y=r(f),d=n(385),m=r(d),h=n(386),g=r(h),b=n(387),P=r(b),O=function(e){function t(n){return i(this,t),a(this,e.call(this,n))}return s(t,e),t.prototype.hasImageUrl=function(){return!!this.props.campaign.image_url},t.prototype.hasValidCampaign=function(){return!!this.props.campaign},t.prototype.pixelComponent=function(){return this.props.noPixel||!this.props.campaign.active?"":u.default.createElement(P.default,{campaignId:this.props.campaign.id,placement:this.props.placement})},t.prototype.logoComponent=function(){return this.props.logoOnly&&!this.hasImageUrl()?this.sponsorNameComponent():u.default.createElement(y.default,this.props.campaign)},t.prototype.sponsorNameComponent=function(){return u.default.createElement(g.default,this.props.campaign)},t.prototype.preambleTextComponent=function(){return u.default.createElement(m.default,{text:this.props.preambleText})},t.prototype.defaultComponents=function(){return(0,l.default)({dfpPixel:this.pixelComponent(),logo:this.logoComponent(),preamble:this.preambleTextComponent(),sponsorName:this.sponsorNameComponent()})},t.prototype.logoOnlyComponents=function(){return(0,l.default)({dfpPixel:this.pixelComponent(),preamble:this.preambleTextComponent(),logo:this.logoComponent()})},t.prototype.nameOnlyComponents=function(){return(0,l.default)({dfpPixel:this.pixelComponent(),preamble:this.preambleTextComponent(),sponsorName:this.sponsorNameComponent()})},t.prototype.childComponents=function(){var e=void 0;return e=this.props.logoOnly?this.logoOnlyComponents():this.props.nameOnly?this.nameOnlyComponents():this.defaultComponents(),this.props.noLink?e:u.default.createElement("a",{href:this.props.campaign.clickthrough_url},e)},t.prototype.render=function(){return this.hasValidCampaign()?u.default.createElement("div",{className:"campaign-display","data-track-label":this.props.campaign.clickthrough_url},u.default.createElement("div",{className:"campaign-display-inner"},this.childComponents())):u.default.createElement("div",{className:"inactive-campaign"})},t}(p.Component);O.defaultProps={logoOnly:!1,nameOnly:!1,noLink:!1,noPixel:!1},O.propTypes={campaign:p.PropTypes.shape({active:p.PropTypes.bool.isRequired,clickthrough_url:p.PropTypes.string.isRequired,id:p.PropTypes.number.isRequired,image_url:p.PropTypes.string,name:p.PropTypes.string.isRequired}),logoOnly:p.PropTypes.bool,nameOnly:p.PropTypes.bool,noLink:p.PropTypes.bool,noPixel:p.PropTypes.bool,placement:p.PropTypes.string.isRequired,preambleText:p.PropTypes.string.isRequired},t.default=O},381:function(e,t,n){"use strict";function r(e){var t=e&&(v&&e[v]||e[w]);if("function"==typeof t)return t}function o(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},r=(""+e).replace(t,function(e){return n[e]});return"$"+r}function i(e,t){return e&&"object"==typeof e&&null!=e.key?o(e.key):t.toString(36)}function a(e,t,n,o){var s=typeof e;if("undefined"!==s&&"boolean"!==s||(e=null),null===e||"string"===s||"number"===s||"object"===s&&e.$$typeof===m)return n(o,e,""===t?P+i(e,0):t),1;var p,u,c=0,l=""===t?P:t+O;if(Array.isArray(e))for(var f=0;f<e.length;f++)p=e[f],u=l+i(p,f),c+=a(p,u,n,o);else{var y=r(e);if(y)for(var d,h=y.call(e),b=0;!(d=h.next()).done;)p=d.value,u=l+i(p,b++),c+=a(p,u,n,o);else if("object"===s){var v="",w=""+e;g(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===w?"object with keys {"+Object.keys(e).join(", ")+"}":w,v)}}return c}function s(e,t,n){return null==e?0:a(e,"",t,n)}function p(e){return(""+e).replace(T,"$&/")}function u(e,t){return d.cloneElement(e,{key:t},void 0!==e.props?e.props.children:void 0)}function c(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function l(e,t,n){var r=e.result,o=e.keyPrefix,i=e.func,a=e.context,s=i.call(a,t,e.count++);Array.isArray(s)?f(s,r,n,h.thatReturnsArgument):null!=s&&(d.isValidElement(s)&&(s=u(s,o+(!s.key||t&&t.key===s.key?"":p(s.key)+"/")+n)),r.push(s))}function f(e,t,n,r,o){var i="";null!=n&&(i=p(n)+"/");var a=c.getPooled(t,i,r,o);s(e,l,a),c.release(a)}function y(e){if("object"!=typeof e||!e||Array.isArray(e))return b(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(d.isValidElement(e))return b(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;g(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)f(e[n],t,n,h.thatReturnsArgument);return t}var d=n(194),m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,h=n(382),g=n(14),b=n(383),P=".",O=":",v="function"==typeof Symbol&&Symbol.iterator,w="@@iterator",T=/\/+/g,j=10,E=C,C=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},_=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||E,n.poolSize||(n.poolSize=j),n.release=x,n},x=function(e){var t=this;g(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},R=function(e,t,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)};c.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},_(c,R);e.exports=y},382:function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},383:function(e,t,n){"use strict";var r=n(382),o=r;e.exports=o},384:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var p=n(194),u=r(p),c=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"campaign-display-logo"},u.default.createElement("img",{src:this.props.image_url}))},t}(p.Component);t.default=c,c.propTypes={image_url:p.PropTypes.string.isRequired,noLink:p.PropTypes.bool}},385:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("span",{className:"campaign-display-preamble"},e.text)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(194),a=r(i);o.propTypes={text:i.PropTypes.string.isRequired}},386:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var p=n(194),u=r(p),c=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return u.default.createElement("span",{className:"campaign-display-sponsor-name"},this.props.name)},t}(p.Component);t.default=c,c.propTypes={name:p.PropTypes.string.isRequired,noLink:p.PropTypes.bool}},387:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var p=n(194),u=r(p),c=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.componentDidMount=function(){var e=window.BULBS_ELEMENTS_ADS_MANAGER;"undefined"!=typeof e&&"function"==typeof e.loadAds?e.loadAds(this.refs.container):console.warn("<campaign-display> pixel will not trigger since `window.BULBS_ELEMENTS_ADS_MANAGER` is not configured to an AdsManager instance.")},t.prototype.render=function(){var e={dfp_placement:this.props.placement,dfp_campaign_id:this.props.campaignId};return u.default.createElement("div",{ref:"container",className:"dfp","data-ad-unit":"campaign-pixel","data-targeting":JSON.stringify(e)})},t}(p.Component);t.default=c,c.displayName="DfpPixel",c.propTypes={campaignId:p.PropTypes.number.isRequired,placement:p.PropTypes.string.isRequired}}});
//# sourceMappingURL=campaign-display.js.map