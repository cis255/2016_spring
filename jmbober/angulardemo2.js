var app2 = angular.module('app2',[]);

app2.controller('ctrl1', function($scope) {
  
  $scope.randomNum1 = Math.floor((Math.random() * 10) + 1)
  $scope.randomNum2 = Math.floor((Math.random() * 10) + 1)
  
  
  
});

app2.controller('badMood', function($scope){
  var bad = ["angry", "dissapointed", "sad", "frustrated", "annoyed", "tired", "hangry"];
  $scope.bad = bad[Math.floor((Math.random() * 7))];
  
});

app2.controller('goodMood', function($scope){
  var good = ["happy", "cheerful", "excited", "optimistic", "content"];
  $scope.good = good[Math.floor((Math.random() * 5))];
  
});