webpackJsonp([13],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){for(var n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(e,r);i&&i.configurable&&void 0===t[r]&&Object.defineProperty(t,r,i)}return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}function s(){}var u=n(188),l=n(1),f=n(36),p=o(f);s.prototype=HTMLButtonElement.prototype;var h=function(t){function e(){return i(this,e),a(this,t.apply(this,arguments))}return c(e,t),e.prototype.createdCallback=function(){(0,p.default)(this.hasAttribute("src"),'<button is="bulbs-load-more"> MUST have a `src` attribute;')},e.prototype.attachedCallback=function(){this.addEventListener("click",this.handleClick.bind(this))},e.prototype.handleClick=function(){this.fillLoadingNotification(),fetch(this.getAttribute("src"),{credentials:"include"}).then(u.filterBadResponse).then(function(t){return t.text()}).then(this.handleFetchSuccess.bind(this)).catch(this.handleFetchError.bind(this))},e.prototype.fillLoadingNotification=function(){var t='<i class="fa fa-spinner fa-spin"></i> Loading...';this.innerHTML=t},e.prototype.handleFetchSuccess=function(t){this.outerHTML=t},e.prototype.handleFetchError=function(){this.outerHTML="<span>There was an error fetching more content. Please reload page and try again.</span>"},e}(s);h.extends="button",(0,l.registerElement)("bulbs-load-more",h)}]);
//# sourceMappingURL=bulbs-load-more.js.map