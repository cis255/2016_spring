$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	function defineChart(id) { 
			var el = document.getElementById(id);
			var myChart = new Chart(el, {
				type: 'bar',
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true
							}
						}]
					}
				}
			});
		}
		// make 3 charts
		var id = "myChart";
		defineChart(id);
		id = "myChart2";
		defineChart(id);
		id = "myChart3";
		defineChart(id);
		
	
	// if no return statement, function returns "undefined" (except constructors, which return object constructed)
	function fun00() {};
	console.log(fun00);	
	console.log(fun00());
	
	// functions are objects, but typeof returns "function", the function object
	function fun01() {return "output: fun01";};
	console.log(fun01);
	console.log(fun01());
	console.log("typeof(fun01()): " + typeof(fun01()));	
	console.log("typeof(fun01): " + typeof(fun01));
	
	// first class functions can be assigned to variables	
	var fun02 = function fun02() {return "output: fun02";};
	console.log(fun02);	
	console.log(fun02());	
	
	// functions can be anonymous (no name)
	var fun03 = function () {return "output: fun03";};
	console.log(fun03);								// anonymous functions can be called using variable name
	console.log(fun03());	
	
	// important distinction: function expression vs function declaration (declarations require a name)
	// see: http://benalman.com/news/2010/11/immediately-invoked-function-expression/
	
	// immediately invoked function expression (IIFE)
	// functions can be self-invoking (anonymous or named)...
	(function () {
		console.log("output: anonymous: self-invoking function");
	})();
	(function fun04() {
		console.log("output: fun04: self-invoking function");
	})();
	// ... but self-invoking functions are not available after execution
	//console.log(fun04);
	//console.log(fun04());	
	
});

