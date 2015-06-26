(function(){
	'use strict';

	angular
		.module('app.widgets')
		.directive('footerTemplate', Footer);

	function Footer(){
		var templateString = [
				'<footer class="footer">',
  				'<div class="footer-container" layout="column">',
      			'<div layout="row">',
          '<div flex="30" class="social-links" layout="row" layout-align="center center">',
          '<div class="social-link">',
            '<a href="#" target="_blank">',
              '<i class="fa fa-facebook"></i>',
            '</a>',
          '</div>',
          '<div class="social-link">',
            '<a href="#" target="_blank">',
              '<i class="fa fa-twitter"></i>',
            '</a>',
          '</div>',
          '<div class="social-link">',
            '<a href="#" target="_blank">',
              '<i class="fa fa-google-plus"></i>',
            '</a>',
          '</div>',

        '</div>',

          '<div class="links" flex="60" layout="column" layout-align="center">',
            '<ul>',
              '<h2 class="heading-3">',
                'Links',
              '</h2>',
              '<li>',
                '<a href="#">Book an appointment</a>',
              '</li>',
              '<li>',
                '<a href="#">Contact us</a>',
              '</li>',
              '<li>',
                '<a href="#">Invest in our products</a>',
              '</li>',
              '<li>',
                '<a href="#">Become a Retailer of Eng-Solution Products</a>',
              '</li>',
              '<li>',
                '<a href="#">Book an appointment</a>',
              '</li>',
            '</ul>',
          '</div>',

      '</div>',
      '<div layout="row" class="copyright" layout-fill>',
          '<p>&copy;2015 Eng-Solutions</p>',
      '</div>',
  '</div>',
'</footer>'].join('\n');
		return {
			restrict: 'E',
			replace: true,
			template: templateString
		};
	}
})();