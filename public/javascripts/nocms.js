/**
 *  nocms-back angular control
 */
var nocmsUtil = {
    getParameterByName: function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1]);
    }
}

var nocms = angular.module('nocms', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "indexCtrl",
                templateUrl: "/front/layout.html"
            })
            .when("/:action", {
                controller: "indexRouteCtrl",
                templateUrl: "/front/layout.html"
            })
            .when("/admin", {

                templateUrl: "/back/layout.html"
            })
            .when("/admin/:action", {
                templateUrl: "/back/layout.html"
            })
            .otherwise({
                templateUrl: '/front/layout.html'
            });
    });

// index controller
nocms.controller("indexCtrl", ['$scope', '$http',
    function($scope, $http) {
        $scope.template = {};
        $scope.template.url = "/front/index.html";
    }
]);

nocms.controller('indexRouteCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {

    }
]);

nocms.controller('')





