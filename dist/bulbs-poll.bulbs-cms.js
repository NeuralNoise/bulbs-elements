webpackJsonp([3],[function(e,t,n){"use strict";function r(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var o=n[r],i=Object.getOwnPropertyDescriptor(t,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}function u(e,t){a[e]||(a[e]=fetch(e).then(function(e){return e.json()})),a[e].then(function(n){s[e]=n,t(n)})}var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),a={},s={},p=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return c(t,e),f(t,[{key:"embedContentPreview",get:function(){var e=this,t=this.getAttribute("src"),n="";return t&&(s[t]?n=s[t].title:u(t,function(t){e.querySelector("h1").innerHTML+=" "+t.title})),"\n      <h1 style='text-align: center; font-family: \"Droid Serif\"'>\n        <i class='fa fa-th-list'></i>\n        Embedded Poll: "+n+"\n      </h1>\n    "}}]),t}(l.EmbededCMSElement);(0,l.registerElement)("bulbs-poll",p)}]);
//# sourceMappingURL=bulbs-poll.bulbs-cms.js.map