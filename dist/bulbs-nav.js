webpackJsonp([13],{0:function(e,t,n){"use strict";function r(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],a=Object.getOwnPropertyDescriptor(t,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1);n(257);var c=n(186),u=150,f={state:{},requestClose:function(e){var t=this;this.state[e.getAttribute("nav-name")]={element:e,frameRequest:requestAnimationFrame(function(){delete t.state[e.getAttribute("nav-name")],e.close()})}},cancelClose:function(e){var t=this.state[e.getAttribute("nav-name")];t&&(cancelAnimationFrame(t.frameRequest),delete this.state[e.getAttribute("nav-name")])}},p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.createdCallback=function(){var e=this;this.addEventListener("mouseenter",function(){return e.openNavPanel()}),this.addEventListener("mouseleave",function(){return e.navPanel.requestClose()})},t.prototype.openNavPanel=function(){f.cancelClose(this.navPanel),this.navPanel.open()},t.prototype.toggleNavPanel=function(){this.navPanel.toggle()},i(t,[{key:"navPanel",get:function(){var e=this.getAttribute("nav-name");return document.querySelector("bulbs-nav-panel[nav-name='"+e+"']")}}]),t}(l.BulbsHTMLElement),v=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.createdCallback=function(){var e=this;this.addEventListener("mouseleave",function(){return e.requestClose()}),this.addEventListener("mouseenter",function(){return e.open()}),this.scrollHandler=this.scrollHandler.bind(this)},t.prototype.scrollHandler=function(){var e=(0,c.getScrollOffset)().y;Math.abs(e-this.openingScrollOffset)>u&&this.close()},t.prototype.requestClose=function(){f.requestClose(this)},t.prototype.open=function(){f.cancelClose(this),this.classList.contains("bulbs-nav-panel-active")||([].forEach.call(this.otherPanels,function(e){return e.close()}),this.classList.add("bulbs-nav-panel-active"),this.navToggle.classList.add("bulbs-nav-toggle-active"),this.tabGroup&&this.tabGroup.resetSelection(),window.picturefill&&window.picturefill(),this.openingScrollOffset=(0,c.getScrollOffset)().y,window.addEventListener("scroll",this.scrollHandler))},t.prototype.close=function(){this.classList.remove("bulbs-nav-panel-active"),this.navToggle.classList.remove("bulbs-nav-toggle-active"),window.removeEventListener("scroll",this.scrollHandler)},t.prototype.toggle=function(){this.classList.contains("bulbs-nav-panel-active")?this.close():this.open()},i(t,[{key:"tabGroup",get:function(){return this.querySelector("bulbs-tabs")}},{key:"navToggle",get:function(){var e=this.getAttribute("nav-name");return document.querySelector("bulbs-nav-toggle[nav-name='"+e+"']")}},{key:"otherPanels",get:function(){var e=this;return[].filter.call(document.querySelectorAll("bulbs-nav-panel"),function(t){return t!==e})}}]),t}(l.BulbsHTMLElement);(0,l.registerElement)("bulbs-nav-toggle",p),(0,l.registerElement)("bulbs-nav-panel",v)},257:function(e,t){}});
//# sourceMappingURL=bulbs-nav.js.map