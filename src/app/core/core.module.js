(function(){
'use strict';

	angular.module('app.core',[
		/*
		angular modules
		*/
		'ngMaterial',
		'ngAnimate',
		'ngSanitize',
		'ngTouch',
		/*
		our app modules
		*/
		'blocks.exception',
		'blocks.logger',
		'blocks.router',
		'blocks.router.404',
		'blocks.users',
		'blocks.auth',

		/*
		third party modules
		*/
		'ngplus',
		'ui.router',
		'restangular',
		'ngMdIcons',
		'ngCookies',
		'ngFileUpload',
		'smoothScroll'
		]);

})();