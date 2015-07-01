(function(){
'use strict';
	var core = angular.module('app.core');
	core.config(toastrConfig);


    toastrConfig.$inject = ['toastr'];

    function toastrConfig(toastr){
    	toastr.options.timeOut = 4000;
    	toastr.options.positionClass = 'toast-bottom-right';
    }

    var imageSettings = {
    	imageBasePath : '../content/img/site',
    	unregisteredUserImageSource : '../content/img/site/default.jpg'
    };

    var keyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46
    };

    var events = {
    	//add events when breeze is setup
    };

    var config = {
    	appErrorPrefix: 'HM Error - ',
    	events: events,
    	imageSettings: imageSettings,
    	keycodes: keyCodes,
    	version: '0.0.1'
    };

    core.constant('config', config);

    core.config(configure);


    configure.$inject = ['$logProvider','$stateProvider','exceptionConfigProvider','routehelperConfigProvider','toastr','$urlRouterProvider','$locationProvider','$httpProvider','$mdThemingProvider'];

    function configure($logProvider,$stateProvider,exceptionConfigProvider,routehelperConfigProvider,toastr,$urlRouterProvider,$locationProvider,$httpProvider,$mdThemingProvider){
    	configureToastr();
    	configureLogging();
    	configureExceptions();
    	configureRouting();
        configureWithCredentials();
        configureMdTheme();

    	function configureToastr(){
    		toastr.options.timeOut = 4000;
    		toastr.options.positionClass = 'toast-bottom-right';
    	}

    	function configureLogging(){
    		if($logProvider.debugEnabled){
    			$logProvider.debugEnabled(true);
    		}
    	}

        function configureMdTheme(){
            $mdThemingProvider
                .theme('default')
                .primaryPalette('blue', {
                  'default': '500',
                  'hue-1': '100',
                  'hue-2': '600', 
                  'hue-3': 'A100'
                })
                .accentPalette('pink', {
                  'default': '200'
                });

            $mdThemingProvider
                .theme('form-dark', 'default')
                .primaryPalette('pink')
                .accentPalette('blue-grey')
                .dark();
        }

    	function configureExceptions(){
    		exceptionConfigProvider.config.appErrorPrefix = config.appErrorPrefix;
    	}

    	function configureRouting(){
    		var routeCfg = routehelperConfigProvider;
    		routeCfg.config.$stateProvider = $stateProvider;
            routeCfg.config.$urlRouterProvider = $urlRouterProvider;
            routeCfg.config.$locationProvider = $locationProvider;
    		routeCfg.config.docTitle = 'HM - ';
    		routeCfg.config.resolveAlways = {
    			ready: function(datacontext){
    				return datacontext.ready();
    			}
    		};
    	}

        function configureWithCredentials(){
            $httpProvider.defaults.withCredentials = true;
        }
    }
})();