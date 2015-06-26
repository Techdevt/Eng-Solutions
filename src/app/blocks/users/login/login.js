(function(){
	'use strict';

	angular.module('blocks.users')
		   .controller('login', Login);

	Login.$inject = ['auth'];
	function Login(auth){
		var vm = this;
		vm.loginData = {};

		vm.login = function(){
			auth.login(vm.loginData);
		};		

	}

})();