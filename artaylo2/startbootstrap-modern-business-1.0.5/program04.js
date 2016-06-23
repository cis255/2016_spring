$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	$("#calendar").jqxCalendar({ width: '250px', height: '250px' });
          $('#calendar').bind('valuechanged', function (event) {
              var date = event.args.date;
              $("#log").text(date.toDateString());
          });
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
			} /*,
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			} */
		});
	} // end function defineChart()
	
	// create chart
	var id = "myChart";
	defineChart(id, 'doughnut') ;
	
	// create data table
	$("#dataTable").jqxDataTable(
            {
                altRows: true,
                sortable: true,
                columns: [
                  { text: 'First Name', dataField: 'First Name', width: 100 },
                  { text: 'Last Name', dataField: 'Last Name', width: 100 },
                  { text: 'Product', dataField: 'Product', width: 180 },
                  { text: 'Unit Price', dataField: 'Price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
                  { text: 'Quantity', dataField: 'Quantity', width: 80, align: 'right', cellsAlign: 'right' }
                ]
            });
	
	// create list box
	var source = [
    "Affogato",
    "Americano",
    "Bicerin",
    "Breve",
    "Café Bombón",
    "Café au lait",
    "Caffé Corretto",
    "Café Crema",
    "Caffé Latte",
	];

    // Create a jqxListBox
    $("#jqxlistbox").jqxListBox({ source: source, width: '200px', height: '200px' });

    // disable the sixth item.
    $("#jqxlistbox").jqxListBox('disableAt', 5);

    // bind to 'select' event.
    $('#jqxlistbox').bind('select', function (event) {
        var args = event.args;
        var item = $('#jqxlistbox').jqxListBox('getItem', args.index);
        $("#eventlog").html('Selected: ' + item.label);
    });

    $("#button").jqxButton();
    $("#button").click(function () {
        var item = $('#jqxlistbox').jqxListBox('getSelectedItem');
        if (item != null) {
            alert(item.label);
        }
    });
	
	// Create jqxNumberInput
	$("#numericInput").jqxNumberInput({ width: '250px', height: '25px' });
	
	// bind to the valuechanged event.
	$('#numericInput').bind('valuechanged', function (event) {
		var value = event.args.value;
		$('#log').html('Value: ' + value);
		
	});
	
	
		
});