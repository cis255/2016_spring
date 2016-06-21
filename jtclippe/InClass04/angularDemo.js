var app1 = angular.module("app1", []);
var app2 = angular.module("app2", []);

app1.controller('ctrl1', function($scope)
{
	$scope.first = 1;
	$scope.second = 2;
	
	$scope.updateValue = function()
	{
		$scope.calculation = $scope.first + " + " + $scope.second + " = " + (+$scope.first + +$scope.second);
	}
});

app2.controller('ctrl1', function($scope)
{
	$scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
	$scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
});

app2.controller('badMood', function($scope)
{
	var bad = ["Sad", "Frustrated", "Hungry", "Hangry"];
	$scope.bad = bad[Math.floor(Math.random() * 4)];
});

app2.controller('goodMood', function($scope)
{
	var good = ["Happy", "Joyous", "Enthusiastic", "Full"];
	$scope.good = good[Math.floor(Math.random() * 4)];
});