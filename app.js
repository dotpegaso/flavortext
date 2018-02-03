angular.module('app', ['ngRoute', 'home'])

.config(function($routeProvider, $locationProvider){
    
    $routeProvider
        
        .when("/", {
            templateUrl: "modules/home/index.html",
            controller: "homeController"
        })
        
        .otherwise({redirectTo: "/"});
        
        $locationProvider.html5Mode(true);
    
})