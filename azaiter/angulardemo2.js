var app2 = angular.module('app2',[]);

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

app2.controller('ctrl1',function($scope) {
	
	generateNums = function(){
		$scope.randomNum1 = randomIntFromInterval(0,10);
		$scope.randomNum2 = randomIntFromInterval(10,20);
	};
	generateNums();
});

app2.controller('badMood',function($scope) {
	var bad = ["Sad", "Bad", "lonely", "Hungry", "OH RAMADAAAN !!!"]
	$scope.bad = bad[randomIntFromInterval(0,(bad.length-1))];
});
app2.controller('goodMood',function($scope) {
	var good = ["Good", "Happy", "Strong", "not hungry", "EID IS SOON!!!"]
	$scope.good = good[randomIntFromInterval(0,(good.length-1))];
});
