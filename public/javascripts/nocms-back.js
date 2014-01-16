/**
 *  nocms-back angular control
 */
angular.module('nocms-back',['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when("/",{
            // controller:"adminCtrl",
            templateUrl:"admin.html"
        })
        .when("/list",{
            templateUrl:"list.html"
        })
        ;
});


