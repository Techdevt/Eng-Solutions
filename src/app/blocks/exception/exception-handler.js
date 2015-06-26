(function(){
	'use strict';

	angular
		.module('blocks.exception')
		.provider('exceptionConfig', exceptionConfigProvider)
		.config(exceptionConfig);

	//Configure Service and Set its events via the exceptionConfigProvider
	function exceptionConfigProvider(){
		/*jshint validthis:true*/
		this.config = {
			//Set app error Prefix
			//appErrorPrefix: ''
		};

		this.$get = function(){
			return {
				config : this.config
			};
		};
	}

	exceptionConfig.$inject = ['$provide'];

	function exceptionConfig($provide){
		$provide.decorator('$exceptionHandler', extendExceptionHandler);
	}

	extendExceptionHandler.$inject = ['$delegate','exceptionConfig','logger'];
	//Extend the $exceptionHandler service to also display a toast.
		
	function extendExceptionHandler($delegate,exceptionConfig,logger){
		var appErrorPrefix = exceptionConfig.config.appErrorPrefix || '';

		return function(exception, cause){
		$delegate(exception, cause);

		var errorData = {exception: exception, cause: cause};
		var msg = appErrorPrefix + exception.message;

		logger.error(msg, errorData);	
		};

	}
})();