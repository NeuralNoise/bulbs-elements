webpackJsonp([4],{0:function(t,e,n){"use strict";function r(t,e){for(var n=Object.getOwnPropertyNames(e),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(e,o);i&&i.configurable&&void 0===t[o]&&Object.defineProperty(t,o,i)}return t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}var a=n(2);n(207);var s=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return c(e,t),e.prototype.attachedCallback=function(){if(!this.hasDispatchedReadyEvent){var t=new CustomEvent("bulbs-content-ready");this.dispatchEvent(t),this.hasDispatchedReadyEvent=!0}},e}(a.BulbsHTMLElement);(0,a.registerElement)("bulbs-content",s)},207:function(t,e){}});
//# sourceMappingURL=bulbs-content.js.map