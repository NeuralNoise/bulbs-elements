webpackJsonp([7],{0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){for(var i=Object.getOwnPropertyNames(e),n=0;n<i.length;n++){var s=i[n],o=Object.getOwnPropertyDescriptor(e,s);o&&o.configurable&&void 0===t[s]&&Object.defineProperty(t,s,o)}return t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):s(t,e))}Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),h=i(1),p=n(h),u=i(240),c=(n(u),function(t){function e(){return o(this,e),r(this,t.apply(this,arguments))}return l(e,t),e.prototype.attachedCallback=function(){(0,p.default)(this.getAttribute("line-count"),"BulbsEllipsize: Expects a line-count attribute"),this.textContent&&this.truncate()},e.prototype.truncate=function(){var t=parseInt(this.getAttribute("line-count"),10);$(this).truncate({lines:t,ellipsis:"..."})},e}(a.BulbsHTMLElement));(0,a.registerElement)("bulbs-ellipsize",c),e.default=c},240:function(t,e){!function(t,e,i){function n(t){return t.replace(/\s*$/,"")}function s(t,e){if(t.innerText)t.innerText=e;else if(t.nodeValue)t.nodeValue=e;else{if(!t.textContent)return!1;t.textContent=e}}function o(t,e,i,n){var o,r=t.parent();t.remove();var l=i?i.length:0;if(r.contents().length>l)return o=r.contents().eq(-1-l),h(o,e,i,n);var a=r.prev();return o=a.contents().eq(-1),!!o.length&&(s(o[0],o.text()+n.ellipsis),r.remove(),i.length&&a.append(i),!0)}function r(t,e,i,r){for(var l,a,h=t[0],p=t.text(),u="",c=0,d=p.length;c<=d;)l=c+(d-c>>1),a=r.ellipsis+n(p.substr(l-1,p.length)),s(h,a),e.height()>r.maxHeight?c=l+1:(d=l-1,u=u.length>a.length?u:a);return u.length>0?(s(h,u),!0):o(t,e,i,r)}function l(t,e,i,r){for(var l,a,h=t[0],p=t.text(),u="",c=0,d=p.length;c<=d;)l=c+(d-c>>1),a=n(p.substr(0,l+1))+r.ellipsis,s(h,a),e.height()>r.maxHeight?d=l-1:(c=l+1,u=u.length>a.length?u:a);return u.length>0?(s(h,u),!0):o(t,e,i,r)}function a(t,e,i,r){for(var l,a,h=t[0],p=t.text(),u="",c=0,d=p.length,f=d>>1;c<=f;)l=c+(f-c>>1),a=n(p.substr(0,l))+r.ellipsis+p.substr(d-l,d-l),s(h,a),e.height()>r.maxHeight?f=l-1:(c=l+1,u=u.length>a.length?u:a);return u.length>0?(s(h,u),!0):o(t,e,i,r)}function h(t,e,i,n){return"end"===n.position?l(t,e,i,n):"start"===n.position?r(t,e,i,n):a(t,e,i,n)}function p(t,i,n,s){var o,r,l=t[0],a=t.contents(),p=a.length,u=p-1,d=!1;for(t.empty();u>=0&&!d;u--)o=a.eq(u),r=o[0],8!==r.nodeType&&(l.insertBefore(r,l.firstChild),n.length&&(e.inArray(l.tagName.toLowerCase(),f)>=0?t.after(n):t.append(n)),i.height()>s.maxHeight&&(d=3===r.nodeType?h(o,i,n,s):c(o,i,n,s)),!d&&n.length&&n.remove());return d}function u(t,i,n,s){var o,r,l=t[0],a=t.contents(),p=0,u=a.length,d=!1;for(t.empty();p<u&&!d;p++)o=a.eq(p),r=o[0],8!==r.nodeType&&(l.appendChild(r),n.length&&(e.inArray(l.tagName.toLowerCase(),f)>=0?t.after(n):t.append(n)),i.height()>s.maxHeight&&(d=3===r.nodeType?h(o,i,n,s):c(o,i,n,s)),!d&&n.length&&n.remove());return d}function c(t,e,i,n){return"end"===n.position?u(t,e,i,n):"start"===n.position?p(t,e,i,n):u(t,e,i,n)}function d(t,n){if(this.element=t,this.$element=e(t),this._name="truncate",this._defaults={lines:1,ellipsis:"…",showMore:"",showLess:"",position:"end",lineHeight:"auto"},this.options=e.extend({},this._defaults,n),"auto"===this.options.lineHeight){var s=this.$element.css("line-height"),o=18;"normal"!==s&&(o=parseInt(s,10)),this.options.lineHeight=o}this.options.maxHeight===i&&(this.options.maxHeight=parseInt(this.options.lines,10)*parseInt(this.options.lineHeight,10)),"start"!==this.options.position&&"middle"!==this.options.position&&"end"!==this.options.position&&(this.options.position="end"),this.$clipNode=e(e.parseHTML(this.options.showMore),this.$element),this.original=this.cached=t.innerHTML,this.isTruncated=!1,this.isCollapsed=!0,this.update()}var f=["table","thead","tbody","tfoot","tr","col","colgroup","object","embed","param","ol","ul","dl","blockquote","select","optgroup","option","textarea","script","style"];d.prototype={update:function(t){var e=!this.isCollapsed;"undefined"!=typeof t?this.original=this.element.innerHTML=t:this.isCollapsed&&this.element.innerHTML===this.cached&&(this.element.innerHTML=this.original);var i=this.$element.wrapInner("<div/>").children();i.css({border:"none",margin:0,padding:0,width:"auto",height:"auto","word-wrap":"break-word"}),this.isTruncated=!1,i.height()>this.options.maxHeight?(this.isTruncated=c(i,i,this.$clipNode,this.options),this.isExplicitlyCollapsed&&(this.isCollapsed=!0,e=!1)):this.isCollapsed=!1,i.replaceWith(i.contents()),this.cached=this.element.innerHTML,e&&(this.element.innerHTML=this.original)},expand:function(){var t=!0;this.isExplicitlyCollapsed&&(this.isExplicitlyCollapsed=!1,t=!1),this.isCollapsed&&(this.isCollapsed=!1,this.element.innerHTML=this.isTruncated?this.original+(t?this.options.showLess:""):this.original)},collapse:function(t){this.isExplicitlyCollapsed=!0,this.isCollapsed||(this.isCollapsed=!0,t=t||!1,t?this.update():this.element.innerHTML=this.cached)}},e.fn.truncate=function(t){var i=e.makeArray(arguments).slice(1);return this.each(function(){var n=e.data(this,"jquery-truncate");n?"function"==typeof n[t]&&n[t].apply(n,i):e.data(this,"jquery-truncate",new d(this,t))})},t.Truncate=d}(this,jQuery)}});
//# sourceMappingURL=bulbs-ellipsize.js.map