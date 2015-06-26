(function(){
	'use strict';

	angular
		.module('app.directives')
		.directive('loopImageSlides', loopImageSlides);

	function loopImageSlides()
	{
		return {
			restrict: 'A',
			link: function($scope,$elem,$attrs){
				var children = $elem.children();
				
				function setCurrentChildIndex(index) {
			        $scope.currentIndex = index;
			    }

			    function isCurrentChildIndex(index) {
			        return $scope.currentIndex === index;
			    }

			    function previousChild(){
			    	angular.element($scope.children[$scope.currentIndex]).removeClass('is-active');
			        $scope.currentIndex = ($scope.currentIndex !== 0) ? --$scope.currentIndex : $scope.children.length - 1;
			        angular.element($scope.children[$scope.currentIndex]).addClass('is-active');
			    }

			    function nextChild() {
			    	angular.element($scope.children[$scope.currentIndex]).removeClass('is-active');
			        $scope.currentIndex = ($scope.currentIndex < $scope.children.length - 1) ? ++$scope.currentIndex : 0;
			        angular.element($scope.children[$scope.currentIndex]).addClass('is-active');
			    }

			    function next(index){
			    	return ($scope.currentIndex > index) ? previousChild() : nextChild();
			    }
			    
			    $scope.children = children;
			    $scope.currentIndex = 0;
			    $scope.setCurrentChildIndex = setCurrentChildIndex;
			    $scope.isCurrentChildIndex = isCurrentChildIndex;
			    $scope.nextChild = nextChild;
			    $scope.previousChild = previousChild;
			    $scope.next = next;
			}
		};
	}
})();