$(document).ready(function() {
	// This code is from the example we did in class
	function defineChart (id, type) {
		var el = document.getElementById(id);
		var myChart = new Chart(el, {
			type: type,
			data: {
				labels: ["Mowing", "Weed Whacking", "Trimming", "Mulch", "Stone", "Patios"],
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
	
	// create charts
	var id = "myChart";
	defineChart(id, 'doughnut') ;
	
	// This is From: http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxrating/jquery-rating-getting-started.htm?search=
	//It creates the calendar by accessing the scripts downlaoded
	$("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	
	 $("#jqxdatetimeinput").jqxDateTimeInput({ width: '250px', height: '25px', theme: 'summer' });
	
		 $("#jqxdatetimeinput").jqxDateTimeInput({ width: '250px', height: '25px', theme: 'summer' });
          // init buttons.
          $("#getDateButton").jqxButton();
          $("#setDateButton").jqxButton();
          // set new date.
          $("#setDateButton").click(function () {
              var date = new Date();
              date.setFullYear(2012, 5, 6);
              $('#jqxdatetimeinput').jqxDateTimeInput('setDate', date);
          });
          // get date.
          $("#getDateButton").click(function () {
              var date = $('#jqxdatetimeinput').jqxDateTimeInput('getDate');
              alert(date);
          });
	//This creates a bullet chart from: http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxrating/jquery-rating-getting-started.htm?search=\
	//It is similar to the other chart used but from a differnt url
	$("#jqxBulletChart").jqxBulletChart({
                theme: "summer",
                width: 500,
                height: 80,
                barSize: "40%",
                title: "Revenue 2014 YTD",
                description: "(U.S. $ in thousands)",
                ranges: [
                    { startValue: 0, endValue: 200, color: "#CC0000", opacity: 1 },
                    { startValue: 200, endValue: 250, color: "#FFD633", opacity: 1 },
                    { startValue: 250, endValue: 300, color: "#00CC00", opacity: 1 }
                ],
                pointer: { value: 270, label: "Revenue 2014 YTD", size: "25%", color: "" },
                target: { value: 260, label: "Revenue 2013 YTD", size: 4, color: "" },
                ticks: { position: "far", interval: 50, size: 10 },
                labelsFormat: "c",
                showTooltip: true
            });
			
	 // Create jqxRating.
	 //From: http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxrating/jquery-rating-getting-started.htm?search=
     $("#jqxRating").jqxRating({ width: 350, height: 35});
     
	 // This creates the functionality of the rating widget created above
	 //From: http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxrating/jquery-rating-getting-started.htm?search=
     $("#jqxRating").bind('change', function (event) {
         $("#rate").html('<span>' + event.value + '</span');
     });
});