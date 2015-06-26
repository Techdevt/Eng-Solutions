(function(){
	'use strict';

	angular.module('blocks.users')
		   .controller('Hotel', Hotel);
		   
	Hotel.$inject = ['auth'];

	function Hotel(auth){
		var vm = this;
		vm.formData = {};

		vm.submit = function(){
			auth.registerHotel(vm.formData);
		};
	}
	
})();