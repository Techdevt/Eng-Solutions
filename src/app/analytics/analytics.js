(function(){
	'use strict';

	angular
		.module('app.analytics')
		.controller('Analytics', Analytics);

	Analytics.$inject = ['XHR','logger','stats'];
	function Analytics(XHR,logger,stats){
		var vm = this;

		vm.analytics = stats;
	}
})();