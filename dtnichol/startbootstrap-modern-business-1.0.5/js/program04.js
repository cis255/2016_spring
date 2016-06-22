$(document).ready(function() {
	
	$("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	
	//order chart
	//from:http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxkanban/jquery-kanban-getting-started.htm?search=
	var fields = [
                     { name: "id", type: "string" },
                     { name: "status", map: "state", type: "string" },
                     { name: "text", map: "label", type: "string" },
                     { name: "tags", type: "string" },
                     { name: "color", map: "hex", type: "string" },
                     { name: "resourceId", type: "number" }
            ];
            var source =
             {
                 localData: [
                          { id: "1161", state: "new", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0", resourceId: 3 },
                          { id: "1645", state: "work", label: "Change Billing Address", tags: "billing", hex: "#f19b60", resourceId: 1 },
                          { id: "9213", state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0", resourceId: 3 },
                          { id: "6546", state: "done", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0", resourceId: 4 },
                          { id: "9034", state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
                 ],
                 dataType: "array",
                 dataFields: fields
             };
            var dataAdapter = new $.jqx.dataAdapter(source);
            var resourcesAdapterFunc = function () {
                var resourcesSource =
                {
                    localData: [
                          { id: 0, name: "No name", image: "../../jqwidgets/styles/images/common.png", common: true },
                          { id: 1, name: "Andrew Fuller", image: "../../images/andrew.png" },
                          { id: 2, name: "Janet Leverling", image: "../../images/janet.png" },
                          { id: 3, name: "Steven Buchanan", image: "../../images/steven.png" },
                          { id: 4, name: "Nancy Davolio", image: "../../images/nancy.png" },
                          { id: 5, name: "Michael Buchanan", image: "../../images/Michael.png" },
                          { id: 6, name: "Margaret Buchanan", image: "../../images/margaret.png" },
                          { id: 7, name: "Robert Buchanan", image: "../../images/robert.png" },
                          { id: 8, name: "Laura Buchanan", image: "../../images/Laura.png" },
                          { id: 9, name: "Laura Buchanan", image: "../../images/Anne.png" }
                    ],
                    dataType: "array",
                    dataFields: [
                         { name: "id", type: "number" },
                         { name: "name", type: "string" },
                         { name: "image", type: "string" },
                         { name: "common", type: "boolean" }
                    ]
                };
                var resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
                return resourcesDataAdapter;
            }
			
	 $('#kanban').jqxKanban({
            resources: resourcesAdapterFunc(),
            source: dataAdapter,
            columns: [
                { text: "Backlog", dataField: "new" },
                { text: "In Progress", dataField: "work" },
                { text: "Done", dataField: "done" }
            ]
        });

	
	
	
	//color picker
	//from:http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxcolorpicker/jquery-colorpicker-getting-started.htm?search=
	
	$("#jqxColorPicker").jqxColorPicker({ width: 350, height: 350 });
	
	//turn dial. 
	//from: http://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxknob/jquery-knob-getting-started.htm?search=
	
	$('#dial').jqxKnob({
                value: 60,
                min: 0,
                max: 100,
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
            var input = $('<div class="inputField">');
            $('#dial').append(input);
            var inputOptions = {
                width: 180,
                height: '40px',
                decimal: 60, // starting value same as widget
                min: 0,  // same as widget
                max: 100, // same as widget
                textAlign: 'center',
                decimalDigits: 1,
                inputMode: 'simple'
            };
            $(input).jqxNumberInput(inputOptions);
            $(input).on('mousedown', function (event) {
                event.stopPropagation();
            });
            $(input).on('keyup', function () {
                var val = $(this).val();
                $('#dial').val(val);
            });
            $(input).on('change', function () {
                var val = $(this).val();
                $('#dial').val(val);
            });
            $('#dial').on('change', function (event) {
                if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
                $(input).val(event.args.value);
            })
	
	//weather function
	$.get("http://ipinfo.io", function(response) {
	    var location = response.city + ", " + response.region;
	    getWeather(location);
	}, "jsonp");

	
	// initialize jqxTouch.
           $('.rhino-data-field').jqxTouch();
           $('.rhino-picture').jqxTouch();
           $('.rhino-data-field').bind('swipeleft', function () {
              // "You've swiped left"
           });
           $('.rhino-data-field').bind('swiperight', function () {
                // "You've swiped right"
           });
           $('.rhino-picture').bind('tap', function () {
                // "You've tapped"
           });
	
	var appointments = new Array();
            var appointment1 = {
                id: "id1",
                description: "George brings projector for presentations.",
                location: "",
                subject: "Quarterly Project Review Meeting",
                calendar: "Room 1",
                start: new Date(2015, 10, 23, 9, 0, 0),
                end: new Date(2015, 10, 23, 16, 0, 0)
            }
            var appointment2 = {
                id: "id2",
                description: "",
                location: "",
                subject: "IT Group Mtg.",
                calendar: "Room 2",
                start: new Date(2015, 10, 24, 10, 0, 0),
                end: new Date(2015, 10, 24, 15, 0, 0)
            }
            var appointment3 = {
                id: "id3",
                description: "",
                location: "",
                subject: "Course Social Media",
                calendar: "Room 3",
                start: new Date(2015, 10, 27, 11, 0, 0),
                end: new Date(2015, 10, 27, 13, 0, 0)
            }
            var appointment4 = {
                id: "id4",
                description: "",
                location: "",
                subject: "New Projects Planning",
                calendar: "Room 2",
                start: new Date(2015, 10, 23, 16, 0, 0),
                end: new Date(2015, 10, 23, 18, 0, 0)
            }
            var appointment5 = {
                id: "id5",
                description: "",
                location: "",
                subject: "Interview with James",
                calendar: "Room 1",
                start: new Date(2015, 10, 25, 15, 0, 0),
                end: new Date(2015, 10, 25, 17, 0, 0)
            }
            var appointment6 = {
                id: "id6",
                description: "",
                location: "",
                subject: "Interview with Nancy",
                calendar: "Room 4",
                start: new Date(2015, 10, 26, 14, 0, 0),
                end: new Date(2015, 10, 26, 16, 0, 0)
            }
            appointments.push(appointment1);
            appointments.push(appointment2);
            appointments.push(appointment3);
            appointments.push(appointment4);
            appointments.push(appointment5);
            appointments.push(appointment6);
            // prepare the data
            var source =
            {
                dataType: "array",
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'description', type: 'string' },
                    { name: 'location', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'calendar', type: 'string' },
                    { name: 'start', type: 'date' },
                    { name: 'end', type: 'date' }
                ],
                id: 'id',
                localData: appointments
            };
            var adapter = new $.jqx.dataAdapter(source);
            $("#scheduler").jqxScheduler({
                date: new $.jqx.date(2015, 11, 23),
                width: 700,
                height: 500,
                source: adapter,
                view: 'weekView',
                showLegend: true,
                ready: function () {
                    $("#scheduler").jqxScheduler('ensureAppointmentVisible', 'id1');
                },
                resources:
                {
                    colorScheme: "scheme05",
                    dataField: "calendar",
                    source: new $.jqx.dataAdapter(source)
                },
                appointmentDataFields:
                {
                    from: "start",
                    to: "end",
                    id: "id",
                    description: "description",
                    location: "place",
                    subject: "subject",
                    resourceId: "calendar"
                },
                views:
                [
                    'dayView',
                    'weekView',
                    'monthView'
                ]
            });
	
	
});


//from:http://www.svsu.edu/~adarenas/cis255/lesson24/weather.js

function getWeather(location) {
	if (location == undefined) {
		var location = document.getElementById("loc").value;
	}

	var url = "https://query.yahooapis.com/v1/public/yql?q=SELECT * FROM weather.forecast WHERE woeid in (select woeid from geo.places(1) where text='" + location + "') and u='f'&format=json";

	$.getJSON( url, function( data ) {
		console.log(data);

		if (data.query.count > 0) {
			location = data.query.results.channel.location.city
			
			if (data.query.results.channel.location.region != "") {
				location += ", " + data.query.results.channel.location.region;
			}

			location += ", " + data.query.results.channel.location.country;

			var temp = data.query.results.channel.item.condition.temp;
			var cond = data.query.results.channel.item.condition.text;

			var find  = document.getElementById('find');
			var found = document.getElementById('found');

			var my_loc  = document.getElementById('location');
			var my_cond = document.getElementById('cond');
			var my_temp = document.getElementById('temp');

			my_temp.innerHTML = temp;
			my_cond.innerHTML = cond;
			my_loc.innerHTML  = location;

			find.style.display  = 'none';
			found.style.display = 'block';
		} else {
			document.getElementById('error').style.display = 'block';
		}
	});
};

function showSearch() {
	var find  = document.getElementById('find');
	var found = document.getElementById('found');

	find.style.display  = 'block';
	found.style.display = 'none';
};

//Chart function
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
	}; //end function defineChart()
	
	//create 3 charts
	var id = "myChart";
	defineChart(id);