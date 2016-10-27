var app = angular.module('myApp', []);

app.controller('searchCtrl', function($scope, $http) {
    if(window.location.toString().split("?").length < 2){
        window.location.assign("index.html");
    }
    var type = window.location.toString().split("?")[1].split("=")[1];

    $scope.type = "Searching for: " + type.toUpperCase();

    var url = "";

    switch(type){
        case 'police': url = "http://wh.aptitudo.in/php/load_police.php"; break;
        case 'petrol': url = "http://wh.aptitudo.in/php/load_petrol.php"; break;
        case 'ambulance': url = "http://wh.aptitudo.in/php/load_ambulance.php"; break;
        case 'mechanic': url = "http://wh.aptitudo.in/php/load_mechanic.php"; break;
    }

    $scope.res = [];
    $http({
        method: 'POST',
        url: url,
        data: {},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
        .success(function(response){
            angular.forEach(response.data.children, function(i){
                $scope.res.push(i.data);
            });
        })
        .error(function(){
            alert("Error");
        });
});