webpackJsonp([12],{0:function(t,e,n){"use strict";function r(t,e){for(var n=Object.getOwnPropertyNames(e),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(e,o);i&&i.configurable&&void 0===t[o]&&Object.defineProperty(t,o,i)}return t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var u=n(190),c=n(2);n(261);var s=void 0,l=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.attachedCallback=function(){var t=this;this.requireAttribute("pushstate-url"),u.InViewMonitor.add(this),(0,u.onReadyOrNow)(function(){return t.handleDocumentReady()}),this.addEventListener("pagestart",function(){return t.handlePageStart()})},e.prototype.detachedCallback=function(){u.InViewMonitor.remove(this)},e.prototype.handleDocumentReady=function(){var t=this.hasAttribute("lock-scroll-on-load"),e=this.getAttribute("pushstate-url")===location.pathname;t&&e&&u.LockScroll.lockToElement(this)},e.prototype.handlePageStart=function(){var t=this;s&&window.cancelAnimationFrame(s),s=window.requestAnimationFrame(function(){history.replaceState({},t.getAttribute("pushstate-title"),t.getAttribute("pushstate-url")),(0,u.getAnalyticsManager)().trackPageView(t.getAttribute("pushstate-url"),t.getAttribute("pushstate-title")),s=null})},e}(c.BulbsHTMLElement);e.default=l,(0,c.registerElement)("bulbs-page",l)},261:function(t,e){}});
//# sourceMappingURL=bulbs-page.js.map