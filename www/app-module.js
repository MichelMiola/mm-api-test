(function (angular) {

	angular.module('app', [
			'ui.router',	
			'ngResource',
			'br.com.michel.templates',
			'br.com.michel.tests'
		])

	.config(function($stateProvider, $urlRouterProvider, $injector){
		$urlRouterProvider.otherwise(function ($injector) {
				$injector.invoke(function ($state) {
					$state.transitionTo('helloWord');
				});
			});
		$stateProvider
				.state('helloWord', {
					url: '/helloWord',
					templateUrl: 'modules/test/view/helloWord-tpl.html',
					controller:	'helloWordCtrl'
		
				});

	})
	.run(function($state, $rootScope){
		$rootScope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams){     			

		});
	});

})(angular);

