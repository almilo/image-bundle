require('angular-bsfy');
require('angular-bsfy/route');

var bundle = {
    img1: require('./img1.jpg'),
    img2: require('./img2.jpg')
};

angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<img src="{{imageUrl}}" ng-click="toggle()"></img>',
                controller: controller
            })
            .otherwise({
                redirectTo: '/home'
            });
    });

function controller($scope) {
    $scope.imageUrl = bundle.img1;

    $scope.toggle = function() {
        $scope.imageUrl = $scope.imageUrl === bundle.img1 ? bundle.img2 : bundle.img1;
    }
}
