angular.module('home', [])

.controller('homeController', function($scope, $http){
    
    $http.get('https://api.magicthegathering.io/v1/cards?flavor=a|e|i|o|u&random=true').then(function(res){
        
        $scope.i = Math.floor(Math.random() * res.data.cards.length) + 0;
        $scope.flavor = res.data.cards[$scope.i].flavor;
        $scope.name = res.data.cards[$scope.i].name;
        $scope.color = res.data.cards[$scope.i].colors;
        $scope.img = res.data.cards[$scope.i].imageUrl;
        $scope.setName = res.data.cards[$scope.i].setName;
        $scope.artist = res.data.cards[$scope.i].artist;
        $scope.legalities = res.data.cards[$scope.i].legalities;
        
        console.log(res.data.cards);
    })
})