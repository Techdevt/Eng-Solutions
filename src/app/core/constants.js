(function(){
'use strict';
	
	angular.module('app.core')
		   .constant('moment',moment)
		   .constant('toastr',toastr)
		   .constant('morlock',morlock)
		   .constant('TweenMax', TweenMax)
		   .constant('$', jQuery);
})();