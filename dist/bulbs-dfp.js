webpackJsonp([6],[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){for(var n=Object.getOwnPropertyNames(t),i=0;i<n.length;i++){var a=n[i],r=Object.getOwnPropertyDescriptor(t,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}return e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):a(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(182),h=i(l),c=n(1),p=i(c),f=n(2),u=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return o(t,e),t.prototype.attachedCallback=function(){(0,p["default"])(this.hasAttribute("viewport-threshold"),'<div is="bulbs-dfp"> MUST specify a `viewport-threshold` property. This value defines how many screens away from the viewport the slot will be in order to trigger an ad load. 1.2 = 120% viewport height.'),h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Metrics",eventAction:"attached",eventLabel:this.dataset.adUnit}),this.handleEnterViewport=this.handleEnterViewport.bind(this),this.handleExitViewport=this.handleExitViewport.bind(this),this.handleInterval=this.handleInterval.bind(this),this.handleSlotRenderEnded=this.handleSlotRenderEnded.bind(this),this.handleImpressionViewable=this.handleImpressionViewable.bind(this),this.handleSlotOnload=this.handleSlotOnload.bind(this),this.addEventListener("enterviewport",this.handleEnterViewport),this.addEventListener("exitviewport",this.handleExitViewport),this.addEventListener("dfpSlotRenderEnded",this.handleSlotRenderEnded),this.addEventListener("dfpImpressionViewable",this.handleImpressionViewable),this.addEventListener("dfpSlotOnload",this.handleSlotOnload);var e=parseFloat(this.getAttribute("viewport-threshold"),10);h["default"].InViewMonitor.add(this,{get distanceFromTop(){return window.innerHeight*e},get distanceFromBottom(){return-(window.innerHeight*e)}});var t=3e4;this.adUnitData=this.adsManager.adUnits.units[this.dataset.adUnit],this.adUnitData.refreshDisabled||(this.refreshInterval=window.setInterval(this.handleInterval,this.adUnitData.refreshInterval||t))},t.prototype.detachedCallback=function(){h["default"].InViewMonitor.remove(this),this.refreshInterval&&window.clearInterval(this.refreshInterval)},t.prototype.handleEnterViewport=function(){this.trackedEnterViewport||(this.trackedEnterViewport=!0,h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Metrics",eventAction:"enterviewport",eventLabel:this.dataset.adUnit}))},t.prototype.handleExitViewport=function(){this.trackedExitViewport||(this.trackedExitViewport=!0,h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Metrics",eventAction:"exitviewport",eventLabel:this.dataset.adUnit}))},t.prototype.handleSlotRenderEnded=function(){h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Metrics",eventAction:"slotrenderended",eventLabel:this.dataset.adUnit})},t.prototype.handleImpressionViewable=function(){h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Metrics",eventAction:"impressionviewable",eventLabel:this.dataset.adUnit})},t.prototype.handleSlotOnload=function(){h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Metrics",eventAction:"slotonload",eventLabel:this.dataset.adUnit})},t.prototype.handleInterval=function(){var e=document.visibilityState;h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Live Metrics",eventAction:"30-second-refresh-candidate-"+e,eventLabel:this.dataset.adUnit}),this.isViewable&&(h["default"].getAnalyticsManager().sendEvent({eventCategory:"bulbs-dfp-element Live Metrics",eventAction:"30-second-refresh-triggered-"+e,eventLabel:this.dataset.adUnit}),"visible"===e&&this.adsManager.reloadAds(this))},d(t,[{key:"isViewable",get:function(){return h["default"].InViewMonitor.isElementInViewport(this,{distanceFromTop:.66*this.offsetHeight,distanceFromBottom:-(.66*this.offsetHeight)})}},{key:"adsManager",get:function(){return window.BULBS_ELEMENTS_ADS_MANAGER}}]),t}(f.BulbsHTMLElement);t["default"]=u,u["extends"]="div",(0,f.registerElement)("bulbs-dfp",u)}]);
//# sourceMappingURL=bulbs-dfp.js.map