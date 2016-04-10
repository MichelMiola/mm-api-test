(function (angular) {
	angular.module('br.com.michel.tests')
	.controller('helloWordCtrl', function($scope, helloWordService){
		$scope.soma = 4;
		$scope.resultSave;

		$scope.saveTeste = function(params){
			return helloWordService.save(params)
				.then(function(result){
					$scope.resultSave = result;
				});
		};

	});
})(angular);