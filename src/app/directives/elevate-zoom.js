(function(){
	'use strict';

	angular
		.module('app.directives')
		.directive('ngElevateZoom', ngElevateZoom);

	ngElevateZoom.$inject = ['$'];
	function ngElevateZoom($){
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      element.attr('data-zoom-image',attrs.zoomImage);
	      $(element).elevateZoom();
	    }
	  };
	}

})();