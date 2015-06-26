(function(){
	'use strict';

	angular.module('app.data')
		   .factory('datacontext', datacontext);


	datacontext.$inject = [];
    function datacontext(){
    	var service = {
    		ready: ready
    	};	

    	return service;

    	function ready(){
    		return true;
    	}
    }

})();