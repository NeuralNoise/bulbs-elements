webpackJsonp([27],{0:function(t,i,e){"use strict";function n(t,i){for(var e=Object.getOwnPropertyNames(i),n=0;n<e.length;n++){var s=e[n],r=Object.getOwnPropertyDescriptor(i,s);r&&r.configurable&&void 0===t[s]&&Object.defineProperty(t,s,r)}return t}function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function r(t,i){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?t:i}function a(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):n(t,i))}function o(t){var i=0;return t.length>1&&(i=parseInt(t.match(/(\d+)/)[1],10)-1),i}Object.defineProperty(i,"__esModule",{value:!0});var l=e(1),d=e(196);e(326);var c=function(t){function i(){return s(this,i),r(this,t.apply(this,arguments))}return a(i,t),i.prototype.attachedCallback=function(){this.slidesClicked=0;var t=$(this);this.$slideshow=t.find(".slideshow"),this.$navigation=t.find("nav"),this.$navigationLinks=this.$navigation.find("a"),this.$restartLink=t.find(".slides-restart a"),this.$slideCount=t.find(".slidecount"),this.$navigationLinks.filter(".next").on("click",this.createNavigationLinkClickHandler("next")),this.$navigationLinks.filter(".prev").on("click",this.createNavigationLinkClickHandler("prev")),this.$restartLink.on("click",this.handleRestartLinkClick.bind(this)),this.$slideshow.flexslider({animation:"fade",animationLoop:!1,animationSpeed:0,controlNav:!1,directionNav:!1,keyboard:!0,namespace:"slides-",slideshow:!1,startAt:o(window.location.hash),smoothHeight:!0,start:this.render.bind(this),after:this.afterSlideTransition.bind(this)}),this.flexSlider=this.$slideshow.data("flexslider")},i.prototype.createNavigationLinkClickHandler=function(t){return function(i){var e=$(i.currentTarget);i.preventDefault(),e.hasClass("slides-disabled")||this.flexSlider.flexAnimate(this.flexSlider.getTarget(t))}.bind(this)},i.prototype.handleRestartLinkClick=function(t){t.preventDefault(),this.flexSlider.flexslider(0)},i.prototype.render=function(){this.displayCurrentSlideNumber(),this.updateNavigationState(),this.fillPictures()},i.prototype.displayCurrentSlideNumber=function(){var t=this.flexSlider.count,i=this.currentSlideNumber();this.$slideCount.text(i+" of "+t)},i.prototype.currentSlideNumber=function(){return this.flexSlider.currentSlide+1},i.prototype.updateNavigationState=function(){this.$navigationLinks.removeClass("slides-disabled"),this.isOnLastSlide()&&this.disableNextLinks(),this.isOnFirstSlide()&&this.disablePreviousLinks()},i.prototype.isOnLastSlide=function(){return this.currentSlideNumber()===this.flexSlider.count},i.prototype.isOnFirstSlide=function(){return 1===this.currentSlideNumber()},i.prototype.disableNextLinks=function(){this.$navigationLinks.filter(".next").addClass("slides-disabled")},i.prototype.disablePreviousLinks=function(){this.$navigationLinks.filter(".prev").addClass("slides-disabled")},i.prototype.fillPictures=function(){window.picturefill(".slides li, .endcard .summary")},i.prototype.afterSlideTransition=function(){this.render(),this.navigateToNextSlide(),this.sendPageView()},i.prototype.setupGA=function(){var t=(0,d.prepReadingListAnalytics)(this.$slideshow,{dimension12:"slideshow"}),i=t.analyticsManager,e=t.analyticsWrapper,n=t.title;this.analyticsManager=i,this.analyticsWrapper=e,this.title=n},i.prototype.sendPageView=function(){this.analyticsManager||this.setupGA(),this.analyticsManager.trackPageView(!1,this.title,this.analyticsWrapper)},i.prototype.navigateToNextSlide=function(){window.location.hash="slide"+this.currentSlideNumber()},i}(l.BulbsHTMLElement);(0,l.registerElement)("bulbs-slideshow",c),i.default=c},326:function(t,i){}});
//# sourceMappingURL=bulbs-slideshow.js.map