describe("Test hello word", function () {

    beforeEach(module('app'));

    var $controller;
    var $httpBackend;
    var $scope = {};
    var $helloWordService;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    beforeEach(inject(function(_$httpBackend_){
        $httpBackend = _$httpBackend_;
    }));

    beforeEach(inject(function (_helloWordService_) {
        $helloWordService = _helloWordService_;
    }));

    beforeEach(function () {
        $controller("helloWordCtrl", { $scope: $scope, helloWordService: $helloWordService});
    });

    it("Test init jasmine", function () {
        expect(true).toBe(true);
    });

    describe("Test scope", function () {

       it("Scope var soma eq 4", function () {
          expect($scope.soma).toBe(4);
       });

    });

    describe("Test service", function () {

        beforeEach(function () {
            $httpBackend.whenPOST('/phones').respond(function(method, url, data, headers){
                console.log('POST');
                return [200];
            });
        });

        it("Test return save - Service", inject(function (SAVE_MOCK) {
            $helloWordService.save(SAVE_MOCK.nome).then(function(result){
                expect('Michel Miola').toEqual(result);
            });
            $httpBackend.flush();
        }));

        it("Test return save - Controller", inject(function (SAVE_MOCK) {
            $scope.saveTeste(SAVE_MOCK.nome).then(function(){
                expect('Michel Miola').toEqual($scope.resultSave);
            });
            $httpBackend.flush();
        }));


    });

});

