webpackJsonp([14],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){for(var n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var r=n[o],a=Object.getOwnPropertyDescriptor(e,r);a&&a.configurable&&void 0===t[r]&&Object.defineProperty(t,r,a)}return t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):r(t,e))}var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(1),u=n(189),b=o(u);n(265);var p=function(t){function e(){return a(this,e),i(this,t.apply(this,arguments))}return l(e,t),e.prototype.createdCallback=function(){this.addEventListener("click",this.toggleNavPanel.bind(this))},e.prototype.toggleNavPanel=function(t){t.stopPropagation(),b.default.getAnalyticsManager().sendEvent({eventCategory:"Nav",eventAction:t.target.dataset.trackAction,eventLabel:t.target.dataset.trackLabel}),[].forEach.call(this.navPanels,function(t){return t.toggle()})},c(e,[{key:"navPanels",get:function(){var t=this.getAttribute("nav-name");return document.querySelectorAll("bulbs-nav-panel[nav-name='"+t+"']")}}]),e}(s.BulbsHTMLElement),f=function(t){function e(){return a(this,e),i(this,t.apply(this,arguments))}return l(e,t),e.prototype.createdCallback=function(){this.documentClickHandler=this.documentClickHandler.bind(this)},e.prototype.open=function(){this.classList.contains("bulbs-nav-panel-active")||([].forEach.call(this.otherPanels,function(t){return t.close()}),this.classList.add("bulbs-nav-panel-active"),[].forEach.call(this.navToggles,function(t){return t.classList.add("bulbs-nav-toggle-active")}),this.tabGroup&&this.tabGroup.resetSelection(),window.picturefill&&window.picturefill(),document.body.addEventListener("click",this.documentClickHandler))},e.prototype.close=function(){this.classList.remove("bulbs-nav-panel-active"),[].forEach.call(this.navToggles,function(t){return t.classList.remove("bulbs-nav-toggle-active")}),document.body.removeEventListener("click",this.documentClickHandler)},e.prototype.pinTabToTop=function(t){requestAnimationFrame(function(){var e=t.closest(".modern.bulbs-flyover-open");e&&(e.scrollTop+=t.getBoundingClientRect().top)})},e.prototype.toggle=function(){this.classList.contains("bulbs-nav-panel-active")?this.close():(this.open(),this.pinTabToTop(this.parentElement))},e.prototype.documentClickHandler=function(t){t.target.matches("bulbs-nav-toggle, bulbs-nav-toggle *")||this.contains(t.target)||this.close()},c(e,[{key:"tabGroup",get:function(){return this.querySelector("bulbs-tabs")}},{key:"navToggles",get:function(){var t=this.getAttribute("nav-name");return document.querySelectorAll("bulbs-nav-toggle[nav-name='"+t+"']")}},{key:"otherPanels",get:function(){var t=this.getAttribute("nav-name");return[].filter.call(document.querySelectorAll("bulbs-nav-panel"),function(e){return e.getAttribute("nav-name")!==t})}}]),e}(s.BulbsHTMLElement);(0,s.registerElement)("bulbs-nav-toggle",p),(0,s.registerElement)("bulbs-nav-panel",f)},265:function(t,e){}});
//# sourceMappingURL=bulbs-nav.js.map