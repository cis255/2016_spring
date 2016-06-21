$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	function defineChart (id) {
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
	} // end function defineChart()
	
	// create 3 charts
	var id = "myChart";
	defineChart(id) ;
	var id = "myChart2";
	defineChart(id) ;
	var id = "myChart3";
	defineChart(id) ;
    $("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	 $("#jqxcalendar2").jqxCalendar({ width: '250px', height: '250px' });
	  $("#jqxcalendar3").jqxCalendar({ width: '250px', height: '250px' });
});