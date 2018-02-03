angular.module('home', [])

.controller('homeController', function($scope, $http){
    
    $scope.i = Math.floor(Math.random() * 100) + 0;
    
    $http.get('https://api.magicthegathering.io/v1/cards?flavor=true&color=red').then(function(res){
        $scope.flavor = res.data.cards[$scope.i].flavor;
        $scope.name = res.data.cards[$scope.i].name;
        $scope.color = res.data.cards[$scope.i].colors;
        $scope.img = res.data.cards[$scope.i].imageUrl;
    })
})