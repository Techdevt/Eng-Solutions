(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('appHeader', Header);

    Header.$inject = ['$compile','$templateRequest','$timeout'];
    function Header($compile,$templateRequest,$timeout) {
        return {
            restrict: 'E',
            replace: true,
            link: link,
            controller: HeaderCtrl,
            controllerAs: 'vm',
            bindToController: true
        };

        function link(scope, elem, attrs, ct) {

        	scope.setTemplate = function(){
	        	$templateRequest(ct.getTemplate()).then(function(html){
			     	elem.html(html).show();
	        		$compile(elem.contents())(scope);
			   	});
		   	};

		   	scope.setTemplate();

            scope.$on('$stateChangeSuccess', function() {
                scope.setTemplate();
            });
        }

        HeaderCtrl.$inject = ['$location', '$mdMedia', '$mdSidenav', '$window', '$state'];

        function HeaderCtrl($location, $mdMedia, $mdSidenav, $window, $state) {
            var vm = this;
            vm.src = './bower_components/material-design-icons';
            vm.shrink = $mdMedia('(min-width: 850px)');
            vm.header = '/app/widgets/header.html';
            vm.appheader = '/app/widgets/appheader.html';

            vm.getTemplate = function() {
                var current = $location.path();
                var sub = current.substr(1, 9);
                var templateUrl = vm.header;

                if (sub === 'dashboard'){
                    templateUrl = vm.appheader;
                }

                return templateUrl;
            };

            vm.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

            function updateShrink() {
                vm.shrink = $mdMedia('(min-width: 850px)');
            }

            function goToUrl(url, params) {
                $state.go(url, params);
            }

            morlock.onResizeEnd(updateShrink);

            $window.addEventListener('resize', updateShrink);
            vm.goToUrl = goToUrl;
        }
    }

})();
