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
	
    $("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	$('#jqxTextArea').jqxTextArea({ placeHolder: 'Enter a sentence', height: 90, width: 300, minLength: 1, source: quotes });
	$("#messageNotification").jqxNotification({
                width: 250, position: "top-right", opacity: 0.9,
                autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 3000, template: "info"
            });
            $("#timeNotification").jqxNotification({
                width: 250, position: "top-right", opacity: 0.9,
                autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 3000, template: "time"
            });
            $("#openMessageNotification, #openTimeNotification").jqxButton({ width: 230, height: 30 });
            $("#openMessageNotification").click(function () {
                $("#messageNotification").jqxNotification("open");
            });
            $("#openTimeNotification").click(function () {
                var date = new Date();
                var minutes = date.getMinutes();
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                var seconds = date.getSeconds();
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                $("#currentTime").text(date.getHours() + ":" + minutes + ":" + seconds);
                $("#timeNotification").jqxNotification("open");
            });

           $("#jqxComplexInput").jqxComplexInput({ width: 250, height: 25, value: "15 + 7.2i" });
            $("#getReal, #getImaginary").jqxButton({ width: 150 });
            $("#getReal").click(function () {
                var realPart = $("#jqxComplexInput").jqxComplexInput("getReal");
                alert("Real part is " + realPart);
            });
            $("#getImaginary").click(function () {
                var imaginaryPart = $("#jqxComplexInput").jqxComplexInput("getImaginary");
                alert("Imaginary part is " + imaginaryPart);
            });

});

