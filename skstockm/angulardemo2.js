var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope){
	$scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
	$scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
	

});

app2.controller('badMood', function($scope){
	var bad = ["Sad", "Frustrated", "Tired", "Hungry", "Hangry"];
	$scope.bad = bad[Math.floor((Math.random() * 5))]
});

app2.controller('goodMood', function($scope){
	var good = ["Happy", "Free", "Full", "Satisfied"];
	$scope.good = good[Math.floor((Math.random() * 4))]
});


