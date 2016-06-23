$(document).ready(function() {
	
	function defineChart(id, type){
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
	};//End defineChart Function
	//actually use the chart function.
	var id = "myChart";
	defineChart(id, 'pie');
	//Intialize the calendar.
	$("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	
	//Gauge Initialization
	$('#gaugeContainer').jqxGauge({
                ranges: [{ startValue: 0, endValue: 55, style: { fill: '#C9C9C9', stroke: '#C9C9C9' }, endWidth: 5, startWidth: 1 },
                            { startValue: 55, endValue: 110, style: { fill: '#FCF06A', stroke: '#FCF06A' }, endWidth: 10, startWidth: 5 },
                            { startValue: 110, endValue: 165, style: { fill: '#FCA76A', stroke: '#FCA76A' }, endWidth: 15, startWidth: 10 },
                            { startValue: 165, endValue: 220, style: { fill: '#FC6A6A', stroke: '#FC6A6A' }, endWidth: 20, startWidth: 15}],
                ticksMinor: { interval: 5, size: '5%' },
                ticksMajor: { interval: 10, size: '9%' },
                value: 0,
                colorScheme: 'scheme03',
                animationDuration: 1200
            });
    $('#gaugeContainer').jqxGauge('value', 140);
	
	// Create Repeat Button.
    $("#jqxButton").jqxRepeatButton({ width: '150', height: '25' });
    // Set its delay(the interval between two clicks) property.
    $("#jqxButton").jqxRepeatButton({ delay: 25 });
    var i = 1;
    // Subscribe to Click events.
    $("#jqxButton").on('click', function () {
        $("#log").html("Clicks: " + i);
        i++;
    });
	
	$("#jqxNumberInput").jqxNumberInput({ width: '250px', height: '25px' });
 	
});
