webpackJsonp([16],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):r(e,t))}var u=n(1),a=n(36),s=o(a),p=n(268),d=o(p),l=function(e){function t(){return i(this,t),f(this,e.apply(this,arguments))}return c(t,e),t.prototype.createdCallback=function(){(0,s.default)(this.hasAttribute,"src"),d.default.embed(this.getAttribute("src"),this)},t}(u.BulbsHTMLElement);(0,u.registerElement)("bulbs-pdfobject",l)},268:function(e,t,n){var o,r,i;!function(n,f){r=[],o=f,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i))}(this,function(){"use strict";if("undefined"==typeof window||"undefined"==typeof navigator)return!1;var e,t,n,o,r,i,f,c,u,a,s,p="2.0.201604172",d="undefined"!=typeof navigator.mimeTypes["application/pdf"],l=function(){return/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())}();return t=function(e){var t;try{t=new ActiveXObject(e)}catch(e){t=null}return t},n=function(){return!!(window.ActiveXObject||"ActiveXObject"in window)},o=function(){return!(!t("AcroPDF.PDF")&&!t("PDF.PdfCtrl"))},e=d||n()&&o(),r=function(e){var t,n="";if(e){for(t in e)e.hasOwnProperty(t)&&(n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");n&&(n="#"+n,n=n.slice(0,n.length-1))}return n},i=function(e){"undefined"!=typeof console&&console.log&&console.log("[PDFObject] "+e)},f=function(e){return i(e),!1},u=function(e){var t=document.body;return"string"==typeof e?t=document.querySelector(e):"undefined"!=typeof jQuery&&e instanceof jQuery&&e.length?t=e.get(0):"undefined"!=typeof e.nodeType&&1===e.nodeType&&(t=e),t},a=function(e,t,n,o,r){var i=o+"?file="+encodeURIComponent(t)+n,f=l?"-webkit-overflow-scrolling: touch; overflow-y: scroll; ":"overflow: hidden; ",c="<div style='"+f+"position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  "+r+" src='"+i+"' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";return e.className+=" pdfobject-container",e.style.position="relative",e.style.overflow="auto",e.innerHTML=c,e.getElementsByTagName("iframe")[0]},s=function(e,t,n,o,r,i,f){var c="";return c=t&&t!==document.body?"width: "+r+"; height: "+i+";":"position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",e.className+=" pdfobject-container",e.innerHTML="<embed "+f+" class='pdfobject' src='"+n+o+"' type='application/pdf' style='overflow: auto; "+c+"'/>",e.getElementsByTagName("embed")[0]},c=function(t,n,o){if("string"!=typeof t)return f("URL is not valid");n="undefined"!=typeof n&&n,o="undefined"!=typeof o?o:{};var i=o.id&&"string"==typeof o.id?"id='"+o.id+"'":"",c=!!o.page&&o.page,p=o.pdfOpenParams?o.pdfOpenParams:{},d="undefined"==typeof o.fallbackLink||o.fallbackLink,l=o.width?o.width:"100%",b=o.height?o.height:"100%",y="boolean"==typeof o.forcePDFJS&&o.forcePDFJS,h=!!o.PDFJS_URL&&o.PDFJS_URL,g=u(n),w="",m="",v="<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";return g?(c&&(p.page=c),m=r(p),y&&h?a(g,t,m,h,i):e?s(g,n,t,m,l,b,i):h?a(g,t,m,h,i):(d&&(w="string"==typeof d?d:v,g.innerHTML=w.replace(/\[url\]/g,t)),f("This browser does not support embedded PDFs"))):f("Target element cannot be determined")},{embed:function(e,t,n){return c(e,t,n)},pdfobjectversion:function(){return p}(),supportsPDFs:function(){return e}()}})}});
//# sourceMappingURL=bulbs-pdfobject.js.map