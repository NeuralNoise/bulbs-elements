webpackJsonp([7],[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){for(var i=Object.getOwnPropertyNames(t),n=0;n<i.length;n++){var r=i[n],o=Object.getOwnPropertyDescriptor(t,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(188),d=n(l),u=i(36),c=n(u),f=i(1),p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.attachedCallback=function(){(0,c.default)(this.hasAttribute("viewport-threshold"),'<div is="bulbs-dfp"> MUST specify a `viewport-threshold` property. This value defines how many screens away from the viewport the slot will be in order to trigger an ad load. 1.2 = 120% viewport height.'),this.handleEnterViewport=this.handleEnterViewport.bind(this),this.handleExitViewport=this.handleExitViewport.bind(this),this.handleInterval=this.handleInterval.bind(this),this.addEventListener("enterviewport",this.handleEnterViewport),this.addEventListener("exitviewport",this.handleExitViewport);var e=parseFloat(this.getAttribute("viewport-threshold"),10);d.default.InViewMonitor.add(this,{get distanceFromTop(){return-(window.innerHeight*e)},get distanceFromBottom(){return window.innerHeight*e}});var t=3e4;this.adUnitData=this.adsManager.adUnits.units[this.dataset.adUnit],this.adUnitData.refreshDisabled||this.hasAttribute("no-refresh")||(this.refreshInterval=window.setInterval(this.handleInterval,this.adUnitData.refreshInterval||t))},t.prototype.detachedCallback=function(){d.default.InViewMonitor.remove(this),this.refreshInterval&&window.clearInterval(this.refreshInterval)},t.prototype.handleEnterViewport=function(){this.trackedEnterViewport||(this.trackedEnterViewport=!0,this.adsManager.asyncRefreshSlot(this))},t.prototype.handleExitViewport=function(){this.trackedExitViewport||(this.trackedExitViewport=!0)},t.prototype.handleInterval=function(){var e=document.visibilityState;this.isViewable&&"visible"===e&&(d.default.getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Live Metrics",eventAction:"30-second-refresh-triggered-visible",eventLabel:this.dataset.adUnit}),this.adsManager.reloadAds(this),this.adsManager.refreshSlot(this))},h(t,[{key:"isViewable",get:function(){return d.default.InViewMonitor.isElementInViewport(this,null,{distanceFromTop:.66*this.offsetHeight,distanceFromBottom:-(.66*this.offsetHeight)})}},{key:"adsManager",get:function(){return window.BULBS_ELEMENTS_ADS_MANAGER}}]),t}(f.BulbsHTMLElement);t.default=p,p.extends="div",(0,f.registerElement)("bulbs-dfp",p)}]);
//# sourceMappingURL=bulbs-dfp.js.map