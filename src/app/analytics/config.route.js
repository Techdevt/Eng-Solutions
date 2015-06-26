(function(){
	'use strict';

	angular.module('app.analytics')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : 'dashboard.analytics',
			id : 2,
			url : '^/analytics',
			title: 'Analytics',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/analytics/analytics.html',
							controller : 'Analytics',
							controllerAs : 'vm'
					}
				},
			    settings: {
	                nav: 2,
	                content: '<i class="fa fa-bar-chart"></i> Analytics'
	            },
	            resolve: {
	            	stats : function(XHR,$q){
	            		var deferred = $q.defer();
	            		XHR.post('/api/analytics')
						   .then(function(results){
						   		deferred.resolve(results);
						   }, function(error){
						   	  deferred.reject(error);
						   });
						return deferred.promise;
	            	}
	            }
			}
		}];
	}

})();