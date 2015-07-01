(function(){
	'use strict';

	angular
		.module('app.layout')
		.controller('topnavCtrl', Header);

	Header.$inject = ['auth','AuthToken'];

	function Header(auth,AuthToken){
		var vm = this;
		vm.logoutUrl = '/profile';
		vm.isAuthenticated = AuthToken.isAuthenticated;
		vm.logout = function(){
			auth.logout();
		};
	}

})();