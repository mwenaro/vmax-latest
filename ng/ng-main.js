var app = angular.module('myApp', []);

app.controller('vmaxController', function($scope) {
    $scope.greeting = 'Hello, Angular!';
    console.log($scope.greeting, " in vmaxController")
    alert("Page loaded")
});