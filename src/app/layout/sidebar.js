(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Sidebar', Sidebar);

    Sidebar.$inject = ['$state', 'config', 'routehelper','auth'];

    function Sidebar($state, config, routehelper,auth) {
        /*jshint validthis: true */
        var vm = this;
        var keyCodes = config.keyCodes;

        vm.isCurrent = isCurrent;
        vm.routes = routehelper.getRoutes();

        activate();

        function activate() {
            getNavRoutes();
        }

        function getNavRoutes() {
            vm.navRoutes = vm.routes.filter(function(r) {
                if(angular.isDefined(r.config.settings)){
                    return r.config.settings && r.config.settings.nav;
                }
            }).sort(function(r1, r2){
                    return r1.config.settings.nav - r2.config.settings.nav;
            });
            // console.log(vm.navRoutes);
        }


        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }

    }
})();