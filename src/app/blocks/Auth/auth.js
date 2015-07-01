(function(){
	'use strict';

	angular.module('blocks.auth')
		   .factory('auth', auth);

	auth.$inject = ['logger','XHR','AuthToken','$state','$window','$q'];
	function auth(logger,XHR,AuthToken,$state,$window,$q){
		var storage = $window.localStorage;

		var user = JSON.parse(storage.getItem('userInfo')) || undefined;
		var type = JSON.parse(storage.getItem('userType')) || null;
		var service = {
			login: login,
			registerHotel: registerHotel,
			registerClient: registerClient,
			logout: logout,
			user: getUser,
			role: userRole 
		};

		return service;
		//////////////
		function login(data){
			var loginBackend = '/api/signin';

			XHR.post(loginBackend, data)
		   	   .then(function(result){
		   	   		user = result.user;
			   		type = result.type;
					if(AuthToken.setToken(JSON.stringify(result.token))){
						storage.setItem('userInfo', JSON.stringify(result.user));
						storage.setItem('userType', JSON.stringify(result.type));
						$state.go('dashboard');
					}
		   		})
		   		.catch(function(err){
		   			logger.error(err, null, 'server_error');
		   		});
		}

		function logout(){
			var logoutBackend = '/api/logout';
			var logoutErrorMsg = 'Logout failure. Try again in a while';

			XHR.post(logoutBackend)
			   .then(function(result){
			   	  if(result.logoutSuccess){
			   	  	user = undefined;
			   	  	type = null;
			   	  	AuthToken.removeToken().then(function(){
			   	 			$state.go('landing');
			   	 	});
			   	  }
			   })
			   .catch(function(err){
			   	 	if(err.data[0] === 'token_expired' ||
			   	 	   err.data[0] === 'tokenAbsent'   ||
			   	 	   err.data[0] === 'tokenInvalid'){
			   	 		// logger.error(err.data[0], null, 'Logout_Error!');
			   	 		AuthToken.removeToken().then(function(){
			   	 			$state.go('landing');
			   	 		}, function(err){
			   	 			logger.error(logoutErrorMsg, null, 'TOKEN_RESET_FAILURE!');
			   	 		});
			   	 	}
			   });
		}

		function registerHotel(data){
			var url = '/api/hotels';
			var successMsg = 'You Have Successfully Registered';
			var errorMsg = 'Registration Failed';

			XHR.post(url, data)
			   .then(function(result){
			   		// Extract into function...used repeatedly
			   		user = result.user;
			   		type = result.type;
				 	var username = result.user.name || result.user.username;
					logger.success(successMsg, result, 'Congratulations! ' + username);
					if(AuthToken.setToken(JSON.stringify(result.token))){
						storage.setItem('userInfo', JSON.stringify(result.user));
						storage.setItem('userType', JSON.stringify(result.type));
						$state.go('dashboard');
					}
			   })
			   .catch(function(errors){
			   		angular.forEach(errors, function(error){
			   			logger.error(error, null, 'Registration Error!!!');
			   		});
			   });
		}

		function registerClient(data){
			var url = '/api/client';
			var successMsg = 'You Have Successfully Registered';
			var errorMsg = 'Registration Failed';

			XHR.post(url, data)
			   .then(function(result){
			   		user = result.user;
			   		type = result.type;
				   	var username = result.user.name || result.user.username;
					logger.success(successMsg, null, 'Congratulations! ' + username);
					if(AuthToken.setToken(JSON.stringify(result.token))){
						storage.setItem('userInfo', JSON.stringify(result.user));
						storage.setItem('userType', JSON.stringify(result.type));
						$state.go('dashboard');
					}
			   })
			   .catch(function(errors){
			   		angular.forEach(errors, function(error){
			   			logger.error(error, null, 'Registration Error!!!');
			   		});
			   });
		}
		function getUser(){
			var deferred = $q.defer();
			
			if(typeof user === 'string'){
				deferred.resolve(JSON.parse(user));
			}else if(typeof user === 'object'){
				deferred.resolve(user);
			}else{
				deferred.reject(user);
			}
			return deferred.promise;
		}

		function userRole(){
			return (type === 'App\\Hotel') ? 'Hotel' : 'User';
		}

	}
})();