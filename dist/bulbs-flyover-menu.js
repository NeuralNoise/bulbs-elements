webpackJsonp([8],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){for(var n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var r=n[o],u=Object.getOwnPropertyDescriptor(e,r);u&&u.configurable&&void 0===t[r]&&Object.defineProperty(t,r,u)}return t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}function s(){}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(2);n(267);var f=n(1),b=o(f);s.prototype=HTMLButtonElement.prototype;var p={menus:{},get:function(t){var e=p.menus[t];return e?e:(e={openButtons:[],menu:null},p.menus[t]=e,e)}},y=function(t){function e(){return u(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.createdCallback=function(){this.flyoverState.menu=this},e.prototype.attachedCallback=function(){(0,b.default)(this.hasAttribute("menu-name"),"<bulbs-flyover-menu> MUST have a `menu-name` attribute;")},e.prototype.openFlyover=function(){this.classList.add("bulbs-flyover-open"),this.hasAttribute("no-body-scroll")&&document.body.classList.add("noscroll-flyout-active"),this.flyoverState.openButtons.forEach(function(t){t.setAttribute("aria-expanded","true")})},e.prototype.closeFlyover=function(){this.classList.remove("bulbs-flyover-open"),this.hasAttribute("no-body-scroll")&&document.body.classList.remove("noscroll-flyout-active"),this.flyoverState.openButtons.forEach(function(t){t.setAttribute("aria-expanded","false"),t.classList.remove("bulbs-flyover-open")})},l(e,[{key:"flyoverState",get:function(){return p.get(this.getAttribute("menu-name"))}}]),e}(c.BulbsHTMLElement),h=function(t){function e(){return u(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.createdCallback=function(){(0,b.default)(this.hasAttribute("menu-name"),'<button is="bulbs-flyover-close"> MUST have a `menu-name` attribute;')},e.prototype.attachedCallback=function(){var t=this;this.addEventListener("click",function(){return t.flyoverState.menu.closeFlyover()})},l(e,[{key:"flyoverState",get:function(){return p.get(this.getAttribute("menu-name"))}}]),e}(s);h.extends="button";var v=function(t){function e(){return u(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.createdCallback=function(){(0,b.default)(this.hasAttribute("menu-name"),'<button is="bulbs-flyover-open"> MUST have a `menu-name` attribute;')},e.prototype.attachedCallback=function(){var t=this;this.flyoverState.openButtons.push(this),this.setAttribute("aria-haspopup","true"),this.setAttribute("aria-expanded","false"),this.addEventListener("click",function(){return t.flyoverState.menu.openFlyover()})},l(e,[{key:"flyoverState",get:function(){return p.get(this.getAttribute("menu-name"))}}]),e}(s);v.extends="button",(0,c.registerElement)("bulbs-flyover-menu",y),(0,c.registerElement)("bulbs-flyover-open",v),(0,c.registerElement)("bulbs-flyover-close",h)},267:function(t,e){}});
//# sourceMappingURL=bulbs-flyover-menu.js.map