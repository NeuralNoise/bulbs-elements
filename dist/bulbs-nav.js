webpackJsonp([13],{0:function(e,t,n){"use strict";function r(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1);n(257);var u=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.createdCallback=function(){var e=this;this.addEventListener("click",this.toggleNavPanel.bind(this)),this.addEventListener("mouseleave",function(){return e.navPanel.requestClose()})},t.prototype.toggleNavPanel=function(){this.navPanel.toggle()},l(t,[{key:"navPanel",get:function(){var e=this.getAttribute("nav-name");return document.querySelector("bulbs-nav-panel[nav-name='"+e+"']")}}]),t}(s.BulbsHTMLElement),c=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.open=function(){this.classList.contains("bulbs-nav-panel-active")||([].forEach.call(this.otherPanels,function(e){return e.close()}),this.classList.add("bulbs-nav-panel-active"),this.navToggle.classList.add("bulbs-nav-toggle-active"),this.tabGroup&&this.tabGroup.resetSelection(),window.picturefill&&window.picturefill())},t.prototype.close=function(){this.classList.remove("bulbs-nav-panel-active"),this.navToggle.classList.remove("bulbs-nav-toggle-active")},t.prototype.toggle=function(){this.classList.contains("bulbs-nav-panel-active")?this.close():this.open()},l(t,[{key:"tabGroup",get:function(){return this.querySelector("bulbs-tabs")}},{key:"navToggle",get:function(){var e=this.getAttribute("nav-name");return document.querySelector("bulbs-nav-toggle[nav-name='"+e+"']")}},{key:"otherPanels",get:function(){var e=this;return[].filter.call(document.querySelectorAll("bulbs-nav-panel"),function(t){return t!==e})}}]),t}(s.BulbsHTMLElement);(0,s.registerElement)("bulbs-nav-toggle",u),(0,s.registerElement)("bulbs-nav-panel",c)},257:function(e,t){}});
//# sourceMappingURL=bulbs-nav.js.map