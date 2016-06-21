var $jq = jQuery.noConflict();

$jq(document).ready(function() {
	
	function defineChart (id, type) {
		var el = document.getElementById(id);
		var myChart = new Chart(el, {
			type: type,
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
			} 
		});
	} // end function defineChart()
	
	// create 3 charts
	var id = "myChart";
	defineChart(id, 'doughnut') ;
	var id = "myChart2";
	defineChart(id, 'line') ;
	var id = "myChart3";
	defineChart(id, 'bar') ;

});