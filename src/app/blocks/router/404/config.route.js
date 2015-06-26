(function(){
	'use strict';

	angular
		.module('blocks.router.404')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : '404',
			id : 0,
			url : '/404',
			title: 'Page Not Found',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/blocks/router/404/404.html'
					}
				}
			}
		}];
	}
})();
