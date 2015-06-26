(function(){
	'use strict';

	angular
		.module('app.animations')
		.animation('.fade-in-animation', fadeIn);

	fadeIn.$inject = ['$window','TweenMax'];
	function fadeIn ($window,TweenMax) {
	    return {
	        enter: function (element, done) {
	            TweenMax.fromTo(element, 1, { opacity: 0}, {opacity: 1, onComplete: done});
	        },

	        leave: function (element, done) {
	            TweenMax.to(element, 1, {opacity: 0, onComplete: done});
	        }
	    };
	}

})();