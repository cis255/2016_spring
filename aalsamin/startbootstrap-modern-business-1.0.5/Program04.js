var $jq = jQuery.noConflict();

//Ready Function
$jq(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
  //Chart function
	function defineChart (id, type) {
		var el = document.getElementById(id);
		var myChart = new Chart(el, {
			type: type,
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					label: '# of Votes',
					data: [15, 35, 5, 50, 100, 70],
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
	} // end function defineChart()
	
	//Creating chart
	var id = "myChart";
	defineChart(id, 'doughnut') ;

	//Creating Calendar
	$jq("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });

	
});
