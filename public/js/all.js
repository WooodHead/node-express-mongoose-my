var app = angular.module('myApp', ['myApp.controllers','nbRouter']);

app.config(function(){});

angular.module('myApp.controllers',[]).controller(
  'AppCtrl', function($scope, $http){
    $scope.test='abcabc';
  }
);
