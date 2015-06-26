(function(){
	'use strict';

	angular.module('app', [
		/*
		 core modules provided...order is unimportant
		*/
		'app.core',
		'app.data', //needs core
		'app.widgets', //needs core

		/*
		 feature modules
		*/
		'app.dashboard',
		'app.analytics',
		'app.layout',
		'app.landing',
		'app.features',
		'app.directives',
		'app.animations',
		'app.filters'
	]);

})();

