webpackJsonp([9],{0:function(t,e,i){"use strict";function n(t,e){for(var i=Object.getOwnPropertyNames(e),n=0;n<i.length;n++){var r=i[n],s=Object.getOwnPropertyDescriptor(e,r);s&&s.configurable&&void 0===t[r]&&Object.defineProperty(t,r,s)}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):n(t,e))}function a(t){var e=0;return t.length>1&&(e=parseInt(t.match(/(\d+)/)[1],10)-1),e}Object.defineProperty(e,"__esModule",{value:!0});var l=i(2);i(244);var d=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.attachedCallback=function(){this.slidesClicked=0;var t=$(this);this.$slideshow=t.find(".slideshow"),this.$navigation=t.find("nav"),this.$navigationLinks=this.$navigation.find("a"),this.$restartLink=t.find(".slides-restart a"),this.$slideCount=t.find(".slidecount"),this.$navigationLinks.filter(".next").on("click",this.createNavigationLinkClickHandler("next")),this.$navigationLinks.filter(".prev").on("click",this.createNavigationLinkClickHandler("prev")),this.$restartLink.on("click",this.handleRestartLinkClick.bind(this)),this.$slideshow.flexslider({animation:"fade",animationLoop:!1,animationSpeed:0,controlNav:!1,directionNav:!1,keyboard:!0,namespace:"slides-",slideshow:!1,startAt:a(window.location.hash),smoothHeight:!0,start:this.render.bind(this),after:this.afterSlideTransition.bind(this)}),this.flexSlider=this.$slideshow.data("flexslider")},e.prototype.createNavigationLinkClickHandler=function(t){return function(e){var i=$(e.currentTarget);e.preventDefault(),i.hasClass("slides-disabled")||this.flexSlider.flexAnimate(this.flexSlider.getTarget(t))}.bind(this)},e.prototype.handleRestartLinkClick=function(t){t.preventDefault(),this.flexSlider.flexslider(0)},e.prototype.render=function(){this.displayCurrentSlideNumber(),this.updateNavigationState(),this.fillPictures()},e.prototype.displayCurrentSlideNumber=function(){var t=this.flexSlider.count,e=this.currentSlideNumber();this.$slideCount.text(e+" of "+t)},e.prototype.currentSlideNumber=function(){return this.flexSlider.currentSlide+1},e.prototype.updateNavigationState=function(){this.$navigationLinks.removeClass("slides-disabled"),this.isOnLastSlide()&&this.disableNextLinks(),this.isOnFirstSlide()&&this.disablePreviousLinks()},e.prototype.isOnLastSlide=function(){return this.currentSlideNumber()===this.flexSlider.count},e.prototype.isOnFirstSlide=function(){return 1===this.currentSlideNumber()},e.prototype.disableNextLinks=function(){this.$navigationLinks.filter(".next").addClass("slides-disabled")},e.prototype.disablePreviousLinks=function(){this.$navigationLinks.filter(".prev").addClass("slides-disabled")},e.prototype.fillPictures=function(){window.picturefill(".slides li, .endcard .summary")},e.prototype.afterSlideTransition=function(){this.render(),this.navigateToNextSlide()},e.prototype.navigateToNextSlide=function(){window.location.hash="slide"+this.currentSlideNumber()},e}(l.BulbsHTMLElement);(0,l.registerElement)("bulbs-slideshow",d),e["default"]=d},244:function(t,e){}});
//# sourceMappingURL=bulbs-slideshow.js.map