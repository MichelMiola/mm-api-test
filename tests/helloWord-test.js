/**
 * Created by mmiola on 03/04/16.
 */
describe("Test hello word", function () {

    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    it("Test init jasmine", function () {
        expect(true).toBe(true);
    });

    describe("Test scope", function () {

       it("Scope var soma eq 4", function () {
          var $scope = {};
          $controller("helloWordCtrl", { $scope: $scope });
          expect($scope.soma).toBe(4);
       });

    });

});

