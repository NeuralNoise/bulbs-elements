webpackJsonp([22],{0:function(t,e,n){"use strict";function i(t,e){for(var n=Object.getOwnPropertyNames(e),i=0;i<n.length;i++){var o=n[i],r=Object.getOwnPropertyDescriptor(e,o);r&&r.configurable&&void 0===t[o]&&Object.defineProperty(t,o,r)}return t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):i(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1);n(307),n(308);var l=function(t){function e(){return o(this,e),r(this,t.apply(this,arguments))}return a(e,t),e.prototype.attachedCallback=function(){},e}(s.BulbsHTMLElement);(0,s.registerElement)("bulbs-reading-list",l),e.default=l},307:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){for(var n=Object.getOwnPropertyNames(e),i=0;i<n.length;i++){var o=n[i],r=Object.getOwnPropertyDescriptor(e,o);r&&r.configurable&&void 0===t[o]&&Object.defineProperty(t,o,r)}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):o(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),d=n(36),c=i(d),u=n(186),p=(0,u.debouncePerFrame)(),f=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.attachedCallback=function(){var t="<bulbs-reading-list-item> requires attribute: ";(0,c.default)(this.dataset.id,t+"data-id"),(0,c.default)(this.dataset.href,t+"data-href"),(0,c.default)(this.dataset.partialUrl,t+"data-partial-url"),(0,c.default)(this.dataset.title,t+"data-title"),(0,c.default)(this.dataset.contentAnalyticsDimensions,t+"data-content-analytics-dimensions"),(0,c.default)(window.GOOGLE_ANALYTICS_ID,"<bulbs-reading-list-item> requires GOOGLE_ANALYTICS_ID set on the window"),u.InViewMonitor.add(this),this.id=parseInt(this.dataset.id,10),this.href=this.dataset.href,this.partialUrl=this.dataset.partialUrl,this.title=this.dataset.title,this.gaDimensions=this.getGaDimensions(),this.isLoaded=this.hasAttribute("data-is-loaded"),this.fetchPending=!1,this.loadingTemplate='<p><i class="fa fa-spinner fa-spin"></i> Loading...</p>',this.pageStartThreshold=200,this.loadOnInitialization(),this.registerEvents()},e.prototype.loadOnInitialization=function(){!this.isLoaded&&u.InViewMonitor.isElementInViewport(this)&&this.loadContent()},e.prototype.registerEvents=function(){this.addEventListener("approachingviewport",this.loadContent.bind(this)),this.addEventListener("inviewrect",this.handlePageStart.bind(this))},e.prototype.getGaDimensions=function(){var t=JSON.parse(this.dataset.contentAnalyticsDimensions);return{dimension1:t.dimension1||"None",dimension2:t.dimension2||"None",dimension3:t.dimension3||"None",dimension4:t.dimension4||"None",dimension5:t.dimension5||"None",dimension6:t.dimension6||"None",dimension7:t.dimension7||"None",dimension8:t.dimension8||"None",dimension9:t.dimension9||"None",dimension10:t.dimension10||"None",dimension11:t.dimension11||"None",dimension12:t.dimension12||"None",dimension13:t.dimension13||"None"}},e.prototype.prepGaTracker=function(){return(0,u.prepGaEventTracker)("pageview",window.GOOGLE_ANALYTICS_ID,this.gaDimensions)},e.prototype.sendAnalyticsEvent=function(){this.gaTrackerWrapper("send","event","reading_list","scroll_view",this.href)},e.prototype.loadContent=function(){var t=this;return new Promise(function(e,n){t.shouldLoad()&&(t.fetchPending=!0,t.fillContent(t.loadingTemplate),fetch(t.partialUrl,{credentials:"same-origin"}).then(u.filterBadResponse).then(u.getResponseText).then(function(n){t.handleLoadContentComplete(n),e(t)}).catch(function(e){t.handleLoadContentError(e),n(t)}))})},e.prototype.shouldLoad=function(){return!(this.isLoaded||this.fetchPending)},e.prototype.fillContent=function(t){this.innerHTML=t,this.dataset.loadStatus="loading"},e.prototype.handleLoadContentComplete=function(t){this.fillContent(t),this.isLoaded=!0,this.fetchPending=!1,this.dataset.loadStatus="loaded"},e.prototype.handleLoadContentError=function(t){return this.fetchPending=!1,new Promise(function(e,n){return n('<bulbs-reading-list-item> loadContent(): fetch failed "'+t.status+" "+t.statusText+'"')})},e.prototype.isArticleBoundaryInView=function(t){var e=t.detail.boundingRect.top<=this.pageStartThreshold&&t.detail.boundingRect.top>0,n=t.detail.boundingRect.bottom>=this.pageStartThreshold&&t.detail.boundingRect.top<0;return e||n},e.prototype.handlePageStart=function(){var t=this;window.location.pathname!==this.href&&this.isArticleBoundaryInView(event)&&p(function(){t.gaTrackerWrapper||(t.gaTrackerWrapper=t.prepGaTracker()),history.replaceState({},t.title,t.href),(0,u.getAnalyticsManager)().trackPageView(t.href,t.title,t.gaTrackerWrapper),t.sendAnalyticsEvent()})},e}(l.BulbsHTMLElement);(0,l.registerElement)("bulbs-reading-list-item",f),e.default=f},308:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){for(var n=Object.getOwnPropertyNames(e),i=0;i<n.length;i++){var o=n[i],r=Object.getOwnPropertyDescriptor(e,o);r&&r.configurable&&void 0===t[o]&&Object.defineProperty(t,o,r)}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):o(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),d=n(36),c=i(d),u=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.attachedCallback=function(){(0,c.default)(this.getAttribute("reading-list-id"),'<bulbs-reading-list-articles> requires a "reading-list-id" attribute')},e}(l.BulbsHTMLElement);(0,l.registerElement)("bulbs-reading-list-articles",u),e.default=u}});
//# sourceMappingURL=bulbs-reading-list.js.map