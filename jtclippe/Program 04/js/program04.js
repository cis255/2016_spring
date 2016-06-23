$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	function defineChart (id, type) {
		var el = document.getElementById(id);
		var myChart = new Chart(el, {
			type: type,
			data: {
				labels: ["Dragon Ball", "Haruhi Suzumiya", "My Hero Academia", "JoJo's Bizarre Adventure", "Detective Conan", "Yu Yu Hakusho"],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 127, 63, 0.8)',
						'rgba(12, 162, 255, 0.8)',
						'rgba(75, 192, 192, 0.8)',
						'rgba(153, 102, 255, 0.8)',
						'rgba(255, 159, 64, 0.8)',
						'rgba(75, 255, 192, 0.8)',
					],
					borderColor: [
						'rgba(255,0,0,1)',
						'rgba(0, 0, 255, 1)',
						'rgba(0, 255, 0, 1)',
						'rgba(0, 0, 255, 1)',
						'rgba(255,0, 0, 1)',
						'rgba(0, 255, 0, 1)',
					],
					borderWidth: 1
				}]
			}
		});
	} // end function defineChart()
	
	// create 3 charts
	var id = "myChart";
	defineChart(id, "doughnut") ;
	
	//JQX Calendar
	$("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	
	//JQX Gauge
	$('#gaugeContainer').jqxGauge({
		ranges: [{ startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
				 { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
				 { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
				 { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }],
		ticksMinor: { interval: 5, size: '5%' },
		ticksMajor: { interval: 10, size: '9%' },
		value: 0,
		colorScheme: 'scheme05',
		animationDuration: 1200
	});
	$('#gaugeContainer').on('valueChanging', function (e) {
		$('#gaugeValue').text(Math.round(e.args.value) + ' kph');
	});
	$('#gaugeContainer').jqxGauge('value', 140);
	$('#linearGauge').jqxLinearGauge({
		orientation: 'vertical',
		width: 100,
		height: 350,
		ticksMajor: { size: '10%', interval: 10 },
		ticksMinor: { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa'} },
		max: 60,
		pointer: { size: '5%' },
		colorScheme: 'scheme05',
		labels: { interval: 20, formatValue: function (value, position) {
			if (position === 'far') {
				value = (9 / 5) * value + 32;
				if (value === -76) {
					return '°F';
				}
				return value + '°';
			}
			if (value === -60) {
				return '°C';
			}
			return value + '°';
		}
		},
		ranges: [
		{ startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157'} },
		{ startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200'} },
		{ startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800'}}],
		animationDuration: 1500
	});
	$('#linearGauge').jqxLinearGauge('value', 40);
			
			//JQX Knob
			$('#knob').jqxKnob({
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
            $('#container').append(input);
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
            $(input).on('mousedown', function(event){
                event.stopPropagation();
            });
            $(input).on('keyup', function () {
                var val = $(this).val();
                $('#container').val(val);
            });
            $(input).on('change', function () {
                var val = $(this).val();
                $('#container').val(val);
            });
            $('#container').on('change', function (event) {
                if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
                $(input).val(event.args.value);
            })

			// Create jqxButton widgets.
            $("#jqxButton").jqxButton({ width: 120, height: 40 });
            $("#jqxSubmitButton").jqxButton({ width: 120, height: 40 });
            $("#jqxDisabledButton").jqxButton({ disabled: true, width: 120, height: 40 });
            $("#jqxImageButton").jqxButton({ width: 120, height: 40, imgSrc: "../../images/facebook.png" });
            $("#jqxTextImageButton").jqxButton({ width: 120, height: 40, textImageRelation: "imageBeforeText", textPosition: "left", imgSrc: "../../images/twitter.png" });
            $("#jqxHTMLButton").jqxButton({ width: 120, height: 40 });
            // Subscribe to Click events.
            $("#jqxButton").on('click', function ()
            {
                $("#events").find('span').remove();
                $("#events").append('<span>Button Clicked</span');
            });
            $("#jqxImageButton").on('click', function ()
            {
                $("#events").find('span').remove();
                $("#events").append('<span>Image Button Clicked</span');
            });
            $("#jqxHTMLButton").on('click', function ()
            {
                $("#events").find('span').remove();
                $("#events").append('<span>HTML Button Clicked</span');
                $("#jqxHTMLButton").jqxButton({ value: "<span style='font-style: italic;'>Thanks for clicking me!</span>" });
            });
            $("#jqxTextImageButton").on('click', function ()
            {
                $("#events").find('span').remove();
                $("#jqxTextImageButton").jqxButton({ textImageRelation: "textBeforeImage", imgPosition: "left", textPosition: "center" });
                $("#events").append('<span>Text/Image Button Clicked</span');
            });
            $("#jqxSubmitButton").on('click', function ()
            {
                $("#events").find('span').remove();
                $("#events").append('<span>Submit Button Clicked</span');
            });
});

function func()
{
	alert("This button does nothing special");
}