webpackJsonp([15],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){for(var n=Object.getOwnPropertyNames(e),i=0;i<n.length;i++){var r=n[i],o=Object.getOwnPropertyDescriptor(e,r);o&&o.configurable&&void 0===t[r]&&Object.defineProperty(t,r,o)}return t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}function s(){var t=f.reduce(function(t,e){return!t||e.getElementRatioOfWindow()>t.getElementRatioOfWindow()?e:t},null);t&&t.handleInViewAndInFocus(),f=[]}Object.defineProperty(e,"__esModule",{value:!0});var u=n(6),h=n(1),l=n(5),p=i(l);n(119);var d=(0,u.debouncePerFrame)(),f=[],b=function(t){function e(){return o(this,e),a(this,t.apply(this,arguments))}return c(e,t),e.prototype.attachedCallback=function(){var t=this,e="<bulbs-page> requires attribute: ";(0,p.default)(this.dataset.contentAnalyticsDimensions,e+"data-content-analytics-dimensions"),this.requireAttribute("pushstate-url"),u.InViewMonitor.add(this),(0,u.onReadyOrNow)(function(){return t.handleDocumentReady()}),this.addEventListener("inviewrect",function(e){return t.handleInView(e)})},e.prototype.detachedCallback=function(){u.InViewMonitor.remove(this)},e.prototype.isCurrentPage=function(){return this.getAttribute("pushstate-url")===location.pathname+location.hash},e.prototype.handleDocumentReady=function(){var t=this.hasAttribute("lock-scroll-on-load");t&&this.isCurrentPage()&&u.LockScroll.lockToElement(this)},e.prototype.getElementRatioOfWindow=function(){if(!this.cachedViewRect)return{};var t=window.innerHeight||document.documentElement.clientHeight,e=this.cachedViewRect.top<0,n=this.cachedViewRect.bottom>t;return e?this.cachedViewRect.bottom/t:n?(t-this.cachedViewRect.top)/t:this.cachedViewRect.height/t},e.prototype.handleInView=function(t){this.cachedViewRect=t.detail.boundingRect,f.push(this),d(s)},e.prototype.handleInViewAndInFocus=function(){this.gaTrackerWrapper||(this.gaTrackerWrapper=(0,u.prepGaWrapper)(this.dataset.contentAnalyticsDimensions)),this.isCurrentPage()||(history.replaceState({},this.getAttribute("pushstate-title"),this.getAttribute("pushstate-url")),(0,u.getAnalyticsManager)().trackPageView(this.getAttribute("pushstate-url"),this.getAttribute("pushstate-title"),this.gaTrackerWrapper),this.sendAnalyticsEvent())},e.prototype.sendAnalyticsEvent=function(){this.gaTrackerWrapper("send","event","reading_list","scroll_view",this.getAttribute("pushstate-url"))},e}(h.BulbsHTMLElement);e.default=b,(0,h.registerElement)("bulbs-page",b)},119:function(t,e){}});
//# sourceMappingURL=bulbs-page.js.map