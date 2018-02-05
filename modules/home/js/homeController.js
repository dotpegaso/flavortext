angular.module('home', [])

.controller('homeController', function($scope, $http){
    
    $scope.quoteList = [
        "Wich fate will the cards bring to you today?",
        "This world isn't the only one",
        "I hope you find your truth today",
        "Life-ahead is timeless scrying fortune",
        "I'll provide the guidance and answers for you",
        "Make a wish",
        "Take a deep breath",
        "Did you smile today?",
        "Don't look behind you right now",
        "I hope you get a foil one today"
    ];
    
    $scope.quote = $scope.quoteList[Math.floor(Math.random() * $scope.quoteList.length) + 0];
    
    $http.get('https://api.magicthegathering.io/v1/cards?flavor=a|e|i|o|u&random=true').then(function(res){
            
        $scope.i = Math.floor(Math.random() * res.data.cards.length) + 0;
        $scope.flavor = res.data.cards[$scope.i].flavor;
        $scope.name = res.data.cards[$scope.i].name;
        $scope.color = res.data.cards[$scope.i].colors;
        $scope.img = res.data.cards[$scope.i].imageUrl;
        $scope.setName = res.data.cards[$scope.i].setName;
        $scope.artist = res.data.cards[$scope.i].artist;
        
    });
    
})