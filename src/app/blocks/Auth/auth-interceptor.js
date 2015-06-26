(function(){
	'use strict';

	angular
		.module('blocks.auth')
		.factory('AuthInterceptor', AuthInterceptor);
		// .config(config);

	AuthInterceptor.$inject = ['AuthToken'];
	function AuthInterceptor(AuthToken){
		var service = {
			request: request,
			response: response
		};

		return service;
		//////////////

		function request(config){
			AuthToken.getToken().then(function(result){
				return result;
			}, function(err){
				
			}).then(function(result){
				if(typeof result !== 'undefined'){
				  config.headers.Authorization = 'Bearer ' + result.token;
				}
			});
			return config;
		}

		function response(obj){
			return obj;
		}
	}
})();  