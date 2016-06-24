var $jq = jQuery.noConflict();

function getWeather(location) {
	if (location == undefined) {
		var location = document.getElementById("loc").value;
	}

	var url = "https://query.yahooapis.com/v1/public/yql?q=SELECT * FROM weather.forecast WHERE woeid in (select woeid from geo.places(1) where text='" + location + "') and u='f'&format=json";

	$.getJSON( url, function( data ) {
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
}

function showSearch() {
	var find  = document.getElementById('find');
	var found = document.getElementById('found');

	find.style.display  = 'block';
	found.style.display = 'none';
}


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
	
$jq(document).ready(function() { 
$jq("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });

var id = "myChart";
defineChart(id) ;
	
$.get("http://ipinfo.io", function(response) {
	var location = response.city + ", " + response.region;
	getWeather(location);
}, "jsonp");

});