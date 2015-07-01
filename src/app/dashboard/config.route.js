(function(){
	'use strict';

	angular.module('app.dashboard')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : 'dashboard',
			id : 1,
			url : '/dashboard',
			title: 'Dashboard',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/dashboard/dashboard.html',
							controller : 'Dashboard',
							controllerAs : 'vm'
					},
					'users@dashboard': {
							templateUrl : 'app/dashboard/dashListUsers.html',
							controller : 'Dashboard',
							controllerAs : 'vm'
					}
				},
			    settings: {
	                nav: 1,
	                content: '<i class="fa fa-dashboard"></i> Dashboard'
	            }
			}
		}];
	}

})();