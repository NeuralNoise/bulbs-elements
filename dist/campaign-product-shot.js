webpackJsonp([28],[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){for(var n=Object.getOwnPropertyNames(e),r=0;r<n.length;r++){var o=n[r],c=Object.getOwnPropertyDescriptor(e,o);c&&c.configurable&&void 0===t[o]&&Object.defineProperty(t,o,c)}return t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):o(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var u=n(2),i=n(185),l=n(1),p=r(l),h=function(t){function e(){return c(this,e),s(this,t.apply(this,arguments))}return a(e,t),e.prototype.handleRequestSuccess=function(t){(0,p.default)(t.product_shot_url,"CampaignProductShot.handleRequestSuccess(data): data.product_shot_url is undefined"),this.innerHTML="<div class='campaign-product-shot'>\n        <a href='"+t.clickthrough_url+"'>\n          <img src='"+t.product_shot_url+"'>\n        </a>\n      </div>"},e.prototype.handleRequestError=function(t){console.log(t)},e.prototype.attachedCallback=function(){(0,p.default)(this.hasAttribute("src"),"campaign-product-shot component requires a src"),fetch(this.getAttribute("src")).then(i.filterBadResponse).then(i.getResponseJSON).then(this.handleRequestSuccess.bind(this)).catch(this.handleRequestError)},e.prototype.attributeChangedCallback=function(t,e,n){document.body.contains(this)&&"src"===t&&e!==n&&this.attachedCallback()},e}(u.BulbsHTMLElement);e.default=h,(0,u.registerElement)("campaign-product-shot",h)}]);
//# sourceMappingURL=campaign-product-shot.js.map