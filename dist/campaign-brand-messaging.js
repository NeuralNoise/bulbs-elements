webpackJsonp([20],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],a=Object.getOwnPropertyDescriptor(t,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):o(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var c=n(2),u=n(176),l=n(1),p=r(l),f=function(e){function t(){return a(this,t),s(this,e.apply(this,arguments))}return i(t,e),t.prototype.handleRequestSuccess=function(e){(0,p["default"])(e.product_shot_url,"CampaignProductShot.handleRequestSuccess(data): data.brand_messaging is undefined"),this.innerHTML="<div class='campaign-brand-messaging'>\n        <span>"+e.brand_messaging+"</span>\n      </div>"},t.prototype.handleRequestError=function(e){console.log(e)},t.prototype.attachedCallback=function(){(0,p["default"])(this.hasAttribute("src"),"campaign-brand-messaging component requires a src"),fetch(this.getAttribute("src")).then(u.filterBadResponse).then(u.getResponseJSON).then(this.handleRequestSuccess.bind(this))["catch"](this.handleRequestError)},t.prototype.attributeChangedCallback=function(e,t,n){document.body.contains(this)&&"src"===e&&t!==n&&this.attachedCallback()},t}(c.BulbsHTMLElement);t["default"]=f,(0,c.registerElement)("campaign-brand-messaging",f)}]);
//# sourceMappingURL=campaign-brand-messaging.js.map