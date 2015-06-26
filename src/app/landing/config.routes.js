(function(){
	'use strict';

	angular
		.module('app.landing')
		.run(routeConfig);

	routeConfig.$inject = ['routehelper'];
	/* @ngInject */

	function routeConfig(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : 'landing',
			abstract: true,
			url : '/',
			title : 'Landing Page',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							template : '<div ui-view class="page-wrap fadeInUp"></div><footer-template></footer-template>',
							controller : 'Landing',
							controllerAs : 'vm'
					}
				}
			}
		},
		{
			name : 'landing.home',
			url : '',
			title : 'Home',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/landing/home.html'
					}
				}
			}
		},{
			name : 'landing.about',
			url : '^/about',
			title : 'About Us',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/landing/about.html'
					}
				}
			}
		},
		{
			name : 'landing.contact',
			url : '^/contact',
			title : 'Contact Us',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/landing/contact.html'
					}
				}
			}
		},
		{
			name : 'landing.blog',
			url : '^/blog',
			title : 'Blog',
			config : {
				//add route resolve properties if any on resolve
				views:{
					'' : {
							templateUrl : 'app/landing/blog.html'
					}
				}
			}
		}];
	}

})();