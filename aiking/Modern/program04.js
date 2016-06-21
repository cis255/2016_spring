/* ------------------------------------------------------------------------
filename  : program04.js
author    : Alexander King
date      : 2016-06-20
email     : aiking@svsu.edu
course    : CIS-255
link      : csis.svsu.edu/~gpcorser/cis255/aiking/Modern/program04.js
backup    : github.com/cis255/cis255
purpose   : This file serves as Alexander King's Program 4 javascript file,
			JQX Wdigets,
			at Saginaw Valley State University (SVSU)
copyright : GNU General Public License (http://www.gnu.org/licenses/)
			This program is free software: you can redistribute it and/or modify
			it under the terms of the GNU General Public License as published by
			the Free Software Foundation, either version 3 of the License, or
			(at your option) any later version.
			This program is distributed in the hope that it will be useful,
			but WITHOUT ANY WARRANTY; without even the implied warranty of
			MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.   
external code used in this file: 
			JQX Code url:http://www.jqwidgets.com/
------------------------------------------------------------------------- */

$(document).ready(function() {
	//$("#readyMessage").text("Ready.");
	
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
	
	// create chart
	var id = "myChart";
	defineChart(id) ;
	
	$("#jqxRangeSelector").jqxRangeSelector(
            {
                 width: 500, height: 100, min: 0, max: 100, range: { from: 10, to: 50 }
            });
	
	$("#jqxcalendar").jqxCalendar({ width: '250px', height: '250px' });
	$('#jqxFileUpload').jqxFileUpload({ width: 300, uploadUrl: 'upload.php', fileInputName: 'fileToUpload' });
	
	$('#container').jqxKnob({
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
            $(input).on('mousedown', function (event) {
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


	
});














