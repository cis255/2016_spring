$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	function defineChart(id){
		var el = document.getElementById(id);
		var myChart = new Chart(el, {
			type: 'doughnut',
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
	} //end function
	var id = "myChart";
	defineChart(id);
	//for jqxcalender
	$("#calendar").jqxCalendar({theme: "ui-sunny", width:250, height:250});
	//for colorPicker
	$("#jqxColorPicker").jqxColorPicker({ width: 350, height: 350 });
	//for priceRange
	$("#jqxRangeSelector").jqxRangeSelector(
    {
        width: 500, height: 100, min: 0, max: 100, range: { from: 10, to: 50 }
    });
	//for barGauge
	$('#barGauge').jqxBarGauge({
		colorScheme: "scheme02", width: 600, height: 600,
        values: [102, 115, 130, 137], max: 150, tooltip: {
        visible: true, formatFunction: function (value)
            {
                var realVal = parseInt(value);
                return ('Year: 2016<br/>Price Index:' + realVal);
            },
        }
    });
});