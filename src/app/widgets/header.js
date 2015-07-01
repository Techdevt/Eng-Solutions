(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('appHeader', appHeader);

    appHeader.$inject = ['$compile','$templateRequest','$timeout','$location', '$mdMedia', '$mdSidenav', '$window', '$state'];
    /* @ngInject */
    function appHeader($compile,$templateRequest,$timeout,$location, $mdMedia, $mdSidenav, $window, $state) {
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

        function HeaderCtrl() {
            var vm = this;
            vm.src = './bower_components/material-design-icons';
            vm.shrink = $mdMedia('(min-width: 850px)');
            vm.header = 'app/widgets/header.html';
            vm.appheader = 'app/widgets/appheader.html';

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

            function setShadow(pageYOffset,pageXOffset){
                return (pageYOffset > 0) ? addShadow() : removeShadow();
            }

            function addShadow(){
                angular.element('.header').addClass('box');
            }

            function removeShadow(){
                angular.element('.header').removeClass('box');
            }

            function goToUrl(url, params) {
                $state.go(url, params);
            }

            morlock.onResizeEnd(updateShrink);
            morlock.onScroll(setShadow);

            $window.addEventListener('resize', updateShrink);
            vm.goToUrl = goToUrl;
        }
    }

})();
