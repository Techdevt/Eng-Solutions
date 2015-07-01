(function(){
'use strict';
	angular.module('app.core')
		   .factory('common',common);

    common.$inject = ['$location','$http','$q','$rootScope','$timeout','logger'];

    function common($location,$http,$q,$rootScope,$timeout,logger){
    	var service = {
    		$broadcast: $broadcast,
    		$q: $q,
    		$timeout: $timeout
    	};

     return service;
     //////////////

     function $broadcast() {
        return $rootScope.$broadcast.apply($rootScope, arguments);
    }
    
    }

})();