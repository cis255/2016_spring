//wait until the document is ready
$(document).ready(function() {
	//a function to create the jQuery chart
	function defineChart (id) {
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
	} // end function defineChart()
	var id = "myChart";
	defineChart(id) ;
	//add the jqxCalendar
	$("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	//add the jqxKnob
	$('#jqxMyKnob').jqxKnob({
		value: 60,
		min: 0,
		max: 100,
		width: '250px',
		height: '250px',
		startAngle: 120,
		endAngle: 420,
		snapToStep: true,
		rotation: 'clockwise',
		style: { stroke: '#dfe3e9', strokeWidth: 3, fill: { color: '#fefefe', gradientType: "linear", gradientStops: [[0, 1], [50, 0.9], [100, 1]] } },
		marks: {
			colorRemaining: { color: 'grey', border: 'grey' },
			colorProgress: { color: '#00a4e1', border: '#00a4e1' },
			type: 'line',
			offset: '71%',
			thickness: 3,
			size: '6%',
			majorSize: '9%',
			majorInterval: 10,
			minorInterval: 2
		},
		labels: {
			offset: '88%',
			step: 10,
			visible: true
		},
		progressBar: {
			style: { fill: '#00a4e1', stroke: 'grey' },
			size: '9%',
			offset: '60%',
			background: { fill: 'grey', stroke: 'grey' }
		},
		pointer: { type: 'arrow', style: { fill: '#00a4e1', stroke: 'grey' }, size: '59%', offset: '49%', thickness: 20 }
    });
    //add the jqxRating
	$("#jqxRating").jqxRating({ width: 350, height: 35, theme: 'classic'});
            $("#jqxRating").on('change', function (event) {
                $("#rate").find('span').remove();
                $("#rate").append('<span>' + event.value + '</span');
			});
	//add the jqxTooltip
	$("#toolTipPic").jqxTooltip({ content: '<b>WOW</b> <i>Is this not the most helpful tooltip ever?!</i>', position: 'mouse'});
	
});