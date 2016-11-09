var app = angular.module('myApp', []);

app.controller('searchCtrl', function($scope, $http) {
    if(window.location.toString().split("?").length < 2){
        window.location.assign("index.html");
    }
    var type = window.location.toString().split("?")[1].split("=")[1];

    $scope.type = "Need " + type.toUpperCase() + "? Check out the list below.";

    var url = "";


    switch(type){
        case 'police': url = "http://wh.aptitudo.in/php/load_police.php"; $scope.type = "Lets find the nearest " + type.toUpperCase() + " STATION for you!"; break;
        case 'petrol': url = "http://wh.aptitudo.in/php/load_petrol.php"; $scope.type = "Lets find the nearest " + type.toUpperCase() + " PUMP for you!"; break;
        case 'ambulance': url = "http://wh.aptitudo.in/php/load_ambulance.php"; $scope.type = "Lets find the nearest " + type.toUpperCase() + " for you!"; break;
        case 'mechanic': url = "http://wh.aptitudo.in/php/load_mechanic.php"; $scope.type = "Lets find the nearest " + type.toUpperCase() + " for you!"; break;
    }

    $scope.err_msg = "Loading...";

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
            $scope.err_msg = "Nothing found";
        })
        .error(function(){
            alert("Error");
            $scope.err_msg = "Error loading";
        });
});