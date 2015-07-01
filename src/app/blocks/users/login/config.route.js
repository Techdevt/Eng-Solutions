(function(){
	'use strict';

	angular
		.module('blocks.users')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : 'login',
			url : '/login',
			title: 'Login',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/blocks/users/login/login.html',
							controller : 'login',
							controllerAs : 'vm'
					}
				}
			}
		}];
	}
})();