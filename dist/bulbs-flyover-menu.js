webpackJsonp([9],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){for(var n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(e,r);i&&i.configurable&&void 0===t[r]&&Object.defineProperty(t,r,i)}return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}function a(){}function l(t){t.preventDefault()}var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),h=n(1);n(240);var f=n(36),p=o(f);a.prototype=HTMLButtonElement.prototype;var b={menus:{},get:function(t){var e=b.menus[t];return e?e:(e={openButtons:[],menu:null},b.menus[t]=e,e)}},v=function(t){function e(){return i(this,e),s(this,t.apply(this,arguments))}return u(e,t),e.prototype.createdCallback=function(){this.flyoverState.menu=this,this.handleTouchstart=this.handleTouchstart.bind(this),this.handleTouchmove=this.handleTouchmove.bind(this),this.addEventListener("touchstart",this.handleTouchstart)},e.prototype.attachedCallback=function(){(0,p.default)(this.hasAttribute("menu-name"),"<bulbs-flyover-menu> MUST have a `menu-name` attribute;")},e.prototype.openFlyover=function(){this.classList.add("bulbs-flyover-open"),this.hasAttribute("no-body-scroll")&&(document.body.classList.add("noscroll-flyout-active"),document.body.addEventListener("touchmove",this.handleTouchmove),document.addEventListener("touchmove",l)),this.flyoverState.openButtons.forEach(function(t){t.setAttribute("aria-expanded","true")})},e.prototype.closeFlyover=function(){this.classList.remove("bulbs-flyover-open"),this.hasAttribute("no-body-scroll")&&(document.body.classList.remove("noscroll-flyout-active"),document.body.removeEventListener("touchmove",this.handleTouchmove),document.removeEventListener("touchmove",l)),this.flyoverState.openButtons.forEach(function(t){t.setAttribute("aria-expanded","false"),t.classList.remove("bulbs-flyover-open")})},e.prototype.handleTouchstart=function(t){this.scrollHeight!==this.clientHeight&&(0===this.scrollTop&&(this.scrollTop=1),this.scrollTop===this.scrollHeight-this.clientHeight&&(this.scrollTop=this.scrollHeight-this.clientHeight-1)),this.allowUp=this.scrollTop>0,this.allowDown=this.scrollTop<this.scrollHeight-this.clientHeight,this.lastY=t.pageY},e.prototype.handleTouchmove=function(t){var e=t.pageY>this.lastY,n=!e;this.lastY=t.pageY,e&&this.allowUp||n&&this.allowDown?t.stopPropagation():t.target.contains(this)&&t.preventDefault()},c(e,[{key:"flyoverState",get:function(){return b.get(this.getAttribute("menu-name"))}}]),e}(h.BulbsHTMLElement),y=function(t){function e(){return i(this,e),s(this,t.apply(this,arguments))}return u(e,t),e.prototype.createdCallback=function(){(0,p.default)(this.hasAttribute("menu-name"),'<button is="bulbs-flyover-close"> MUST have a `menu-name` attribute;')},e.prototype.attachedCallback=function(){var t=this;this.addEventListener("click",function(){return t.flyoverState.menu.closeFlyover()})},c(e,[{key:"flyoverState",get:function(){return b.get(this.getAttribute("menu-name"))}}]),e}(a);y.extends="button";var d=function(t){function e(){return i(this,e),s(this,t.apply(this,arguments))}return u(e,t),e.prototype.createdCallback=function(){(0,p.default)(this.hasAttribute("menu-name"),'<button is="bulbs-flyover-open"> MUST have a `menu-name` attribute;')},e.prototype.attachedCallback=function(){var t=this;this.flyoverState.openButtons.push(this),this.setAttribute("aria-haspopup","true"),this.setAttribute("aria-expanded","false"),this.addEventListener("click",function(){return t.flyoverState.menu.openFlyover()})},c(e,[{key:"flyoverState",get:function(){return b.get(this.getAttribute("menu-name"))}}]),e}(a);d.extends="button",(0,h.registerElement)("bulbs-flyover-menu",v),(0,h.registerElement)("bulbs-flyover-open",d),(0,h.registerElement)("bulbs-flyover-close",y)},240:function(t,e){}});
//# sourceMappingURL=bulbs-flyover-menu.js.map