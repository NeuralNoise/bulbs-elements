webpackJsonp([5],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0}),t.displayPropType=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(1),p=r(c),l=n(188),f=r(l),d=n(178),y=r(d),m=n(34);n(260);var h=n(262),g=r(h),b=n(263),O=r(b),v=n(264),P=r(v),j=function(e){function t(n){return i(this,t),(0,f["default"])(!!n.src,"campaign-display component requires a src"),(0,f["default"])(!!n.placement,"campaign-display component requires a placement"),a(this,e.call(this,n))}return s(t,e),t.prototype.initialDispatch=function(){this.store.actions.fetchCampaign(this.props.src)},t.prototype.render=function(){if(this.state.campaignRequest.networkError)return p["default"].createElement("span",null);var e=u({},this.state,this.props,{nameOnly:"string"==typeof this.props.nameOnly,logoOnly:"string"==typeof this.props.logoOnly,noLink:"string"==typeof this.props.noLink});return p["default"].createElement(P["default"],e)},t}(y["default"]);u(j,{displayName:"CampaignDisplay",schema:{campaign:g["default"],campaignRequest:O["default"]},propTypes:{logoOnly:c.PropTypes.string,nameOnly:c.PropTypes.string,noLink:c.PropTypes.string,placement:c.PropTypes.string.isRequired,preambleText:c.PropTypes.string.isRequired,src:c.PropTypes.string.isRequired}}),(0,m.registerReactElement)("campaign-display",j),t["default"]=j;t.displayPropType=j.propTypes.display},178:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),p=n(179),l=r(p),f=function(t){function n(r){i(this,n);var o=a(this,t.call(this,r));return o.store=o.createStore(),o.store&&(o.store.subscribeComponent(o),e(o.initialDispatch.bind(o))),o}return s(n,t),n.prototype.createStore=function(){var e=void 0;return this.constructor.schema&&(e=new l["default"]({schema:this.constructor.schema})),e},n.prototype.initialDispatch=function(){},n}(c["default"].Component);t["default"]=f}).call(t,n(35).setImmediate)},179:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(180),i=r(o);t["default"]=i["default"]},180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t={};return(0,y["default"])(e,function(e,n){t[n]=(0,f["default"])(e.initialState)}),t}function a(e){var t={};return(0,y["default"])(e,function(e,n){(0,y["default"])(e.actions,function(e,r){e.fieldName=n,e.type=r,t[r]=e})}),t}function s(e,t){var n=a(e),r={};return(0,y["default"])(n,function(e,n){r[n]=c.bind(null,t,e)}),r}function u(e){e.components.forEach(function(t){t.setState(e.state)})}function c(e,t,n){m&&console.time("dispatch "+t.type);var r=e.state,o=p({},r),i=r[t.fieldName],a=(0,f["default"])(i);o[t.fieldName]=t(a,n,e),"undefined"!=typeof o[t.fieldName]&&(e.state=o),u(e),m&&(console.groupCollapsed("DISPATCH %c"+t.type+" %c=> %c"+t.fieldName,"color:green","color:auto","color:blue"),console.timeEnd("dispatch "+t.type),console.log("PAYLOAD: ",n),console.log("PREV VALUE: ",i),console.log("NEXT VALUE: ",a),console.log("PREV STORE: ",r),console.log("NEXT STORE: ",o),console.groupEnd())}Object.defineProperty(t,"__esModule",{value:!0});var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(181),f=r(l),d=n(182),y=r(d),m=!1,h=function(){function e(t){o(this,e),this.actions=s(t.schema,this),this.state=i(t.schema),this.components=[],m&&console.log("%cCREATED STORE","color:green")}return e.prototype.subscribeComponent=function(e){this.components.push(e),e.state=this.state},e.prototype.unsubscribeComponent=function(e){var t=this.components.indexOf(e);t>-1&&this.components.splice(t,1)},e}();t["default"]=h},181:function(e,t){var n=function(){"use strict";function e(t,n,r,o){function a(t,r){if(null===t)return null;if(0==r)return t;var s,l;if("object"!=typeof t)return t;if(e.__isArray(t))s=[];else if(e.__isRegExp(t))s=new RegExp(t.source,i(t)),t.lastIndex&&(s.lastIndex=t.lastIndex);else if(e.__isDate(t))s=new Date(t.getTime());else{if(p&&Buffer.isBuffer(t))return s=new Buffer(t.length),t.copy(s),s;"undefined"==typeof o?(l=Object.getPrototypeOf(t),s=Object.create(l)):(s=Object.create(o),l=o)}if(n){var f=u.indexOf(t);if(-1!=f)return c[f];u.push(t),c.push(s)}for(var d in t){var y;l&&(y=Object.getOwnPropertyDescriptor(l,d)),y&&null==y.set||(s[d]=a(t[d],r-1))}return s}var s;"object"==typeof n&&(r=n.depth,o=n.prototype,s=n.filter,n=n.circular);var u=[],c=[],p="undefined"!=typeof Buffer;return"undefined"==typeof n&&(n=!0),"undefined"==typeof r&&(r=1/0),a(t,r)}function t(e){return Object.prototype.toString.call(e)}function n(e){return"object"==typeof e&&"[object Date]"===t(e)}function r(e){return"object"==typeof e&&"[object Array]"===t(e)}function o(e){return"object"==typeof e&&"[object RegExp]"===t(e)}function i(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return e.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},e.__objToStr=t,e.__isDate=n,e.__isArray=r,e.__isRegExp=o,e.__getRegExpFlags=i,e}();"object"==typeof e&&e.exports&&(e.exports=n)},182:function(e,t){"use strict";e.exports=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];Object.keys(e).forEach(function(n){t(e[n],n)})}},186:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(187),i=r(o),a=n(182),s=r(a);e.exports={makeRequest:i["default"],iterateObject:s["default"]}},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];(0,u["default"])(t.success,"makeRequest MUST have a success callback"),(0,u["default"])(t.failure,"makeRequest MUST have a failure callback"),(0,u["default"])(t.error,"makeRequest MUST have an error callback");var n=t.success,r=t.failure,o=t.error,i={success:n,failure:r,error:o},s=(0,a["default"])(t);return delete s.success,delete s.failure,delete s.error,t.redirect||(s.redirect="follow"),fetch(e,s).then(function(e){var t=void 0;return e.status<300?t=e.json().then(i.success):e.status>=400&&(t=e.json().then(i.failure)),t})["catch"](i.error)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var i=n(181),a=r(i),s=n(188),u=r(s)},188:function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],p=0;u=new Error(t.replace(/%s/g,function(){return c[p++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}};e.exports=r},260:function(e,t){},262:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={actions:{handleFetchComplete:function(e,t){return t}}};t["default"]=n},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(186),o={initialState:{requestInFlight:!1},actions:{fetchCampaign:function(e,t,n){return e.requestInFlight=!0,(0,r.makeRequest)(t,{credentials:"include",success:function(e){n.actions.fetchCampaignSuccess(e),n.actions.handleFetchComplete(e)},failure:n.actions.fetchCampaignFailure,error:n.actions.fetchCampaignError}),e},fetchCampaignSuccess:function(e){e.requestInFlight=!1},fetchCampaignFailure:function(e,t){return e.requestInFlight=!1,e.requestFailure=t,e},fetchCampaignError:function(e,t){return e.requestInFlight=!1,e.networkError=t,e}}};t["default"]=o},264:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),p=n(265),l=r(p),f=n(267),d=r(f),y=n(268),m=r(y),h=n(269),g=r(h),b=n(270),O=r(b),v=function(e){function t(n){return i(this,t),a(this,e.call(this,n))}return s(t,e),t.prototype.hasImageUrl=function(){return!!this.props.campaign.image_url},t.prototype.hasValidCampaign=function(){return!!this.props.campaign&&this.props.campaign.active},t.prototype.pixelComponent=function(){return c["default"].createElement(O["default"],{campaignId:this.props.campaign.id,placement:this.props.placement})},t.prototype.logoComponent=function(){return this.props.logoOnly&&!this.hasImageUrl()?this.sponsorNameComponent():c["default"].createElement(d["default"],this.props.campaign)},t.prototype.sponsorNameComponent=function(){return c["default"].createElement(g["default"],this.props.campaign)},t.prototype.preambleTextComponent=function(){return c["default"].createElement(m["default"],{text:this.props.preambleText})},t.prototype.defaultComponents=function(){return(0,l["default"])({dfpPixel:this.pixelComponent(),logo:this.logoComponent(),preamble:this.preambleTextComponent(),sponsorName:this.sponsorNameComponent()})},t.prototype.logoOnlyComponents=function(){return(0,l["default"])({dfpPixel:this.pixelComponent(),preamble:this.preambleTextComponent(),logo:this.logoComponent()})},t.prototype.nameOnlyComponents=function(){return(0,l["default"])({dfpPixel:this.pixelComponent(),preamble:this.preambleTextComponent(),sponsorName:this.sponsorNameComponent()})},t.prototype.childComponents=function(){var e=void 0;return e=this.props.logoOnly?this.logoOnlyComponents():this.props.nameOnly?this.nameOnlyComponents():this.defaultComponents(),this.props.noLink?e:c["default"].createElement("a",{href:this.props.campaign.clickthrough_url},e)},t.prototype.render=function(){return this.hasValidCampaign()?c["default"].createElement("div",{className:"campaign-display","data-track-label":this.props.campaign.clickthrough_url},c["default"].createElement("div",{className:"inner"},this.childComponents())):c["default"].createElement("div",{className:"inactive-campaign"})},t}(u.Component);v.defaultProps={logoOnly:!1,nameOnly:!1,noLink:!1},v.propTypes={campaign:u.PropTypes.shape({active:u.PropTypes.bool.isRequired,clickthrough_url:u.PropTypes.string.isRequired,id:u.PropTypes.number.isRequired,image_url:u.PropTypes.string,name:u.PropTypes.string.isRequired}).isRequired,logoOnly:u.PropTypes.bool,nameOnly:u.PropTypes.bool,noLink:u.PropTypes.bool,placement:u.PropTypes.string.isRequired,preambleText:u.PropTypes.string.isRequired},t["default"]=v},265:function(e,t,n){e.exports=n(266).create},266:function(e,t,n){"use strict";var r=n(4),o=n(7),i=n(10),a=n(6),s=(n(9),{create:function(e){if("object"!=typeof e||!e||Array.isArray(e))return e;if(o.isValidElement(e))return e;1===e.nodeType?a(!1):void 0;var t=[];for(var n in e)r.mapIntoWithKeyPrefixInternal(e[n],t,n,i.thatReturnsArgument);return t}});e.exports=s},267:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),p=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c["default"].createElement("div",{className:"campaign-display-logo"},c["default"].createElement("img",{src:this.props.image_url}))},t}(u.Component);t["default"]=p,p.propTypes={image_url:u.PropTypes.string.isRequired,noLink:u.PropTypes.bool}},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return a["default"].createElement("span",{className:"campaign-display-preamble"},e.text)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var i=n(1),a=r(i);o.propTypes={text:i.PropTypes.string.isRequired}},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),p=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c["default"].createElement("span",{className:"campaign-display-sponsor-name"},this.props.name)},t}(u.Component);t["default"]=p,p.propTypes={name:u.PropTypes.string.isRequired,noLink:u.PropTypes.bool}},270:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),p=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.componentDidMount=function(){var e=window.BULBS_ELEMENTS_ADS_MANAGER;"undefined"!=typeof e&&"function"==typeof e.loadAds?e.loadAds(this.refs.container):console.warn("<campaign-display> pixel will not trigger since `window.BULBS_ELEMENTS_ADS_MANAGER` is not configured to an AdsManager instance.")},t.prototype.render=function(){var e={dfp_placement:this.props.placement,dfp_campaign_id:this.props.campaignId};return c["default"].createElement("div",{ref:"container",className:"dfp","data-ad-unit":"campaign-pixel","data-targeting":JSON.stringify(e)})},t}(u.Component);t["default"]=p,p.propTypes={campaignId:u.PropTypes.number.isRequired,placement:u.PropTypes.string.isRequired}}});
//# sourceMappingURL=campaign-display.js.map