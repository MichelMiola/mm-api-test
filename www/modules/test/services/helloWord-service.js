(function (angular) {
    angular.module('br.com.michel.tests')
        .factory('helloWordService', function($http){

            var get = function() {
                return $http.get('/phones').
                    success(function(result) {
                        return result;
                    });
            };

            var save = function (data) {
                return $http.post('/phones', data)
                    .then(function() {
                        return data;
                    });
            }

            return {
                save: save,
                get: get
            };

        });
})(angular);
