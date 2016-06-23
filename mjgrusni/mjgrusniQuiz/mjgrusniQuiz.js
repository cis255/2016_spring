/*
filename  : mjgrusniQuiz.js
author    : Michael Grusnick
date      : 2016-06-21
email     : mjgrusni@svsu.edu
course    : CIS-255
program structure (design):
	1. Wait for document to be ready
	2. Wait for a click event from the button
	3. Parse input field into a string array1
	4. Perform a bubble sort on the data
	5. Display only the sorted elements which do not end in the letter "e"
*/

$(document).ready(function() {
	$("#btnSort").click(function(){
		var str = $("#field").val();
		var array1 = str.split(", ");
		
		function bubbleSort(items) {
		  var length = items.length;
		  for (var i = 0; i < length; i++) { //Number of passes
			for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
			  //Compare the adjacent positions
			  if(items[j] > items[j+1]) {
				//Swap the numbers
				var tmp = items[j];  //Temporary variable to hold the current number
				items[j] = items[j+1]; //Replace current number with adjacent number
				items[j+1] = tmp; //Replace adjacent number with current number
			  }
			}        
		  }
		  return items;
		}
		
		//perform the sort
		var array1Sorted = bubbleSort(array1);
		
		//set the output field's text to display only elements that
		//	do not end in the letter "e"
		$("#output").text(function(){
			var toDisplay = "";
			//boolean to handle the commas in between elements after the first displayed
			var first = true;
			//for each string in the array
			for(var i = 0; i < array1Sorted.length; i++){
				//trim it
				array1Sorted[i] = $.trim(array1Sorted[i]);
				//if the string does not end in "e"
				if(array1Sorted[i].charAt(array1Sorted[i].length - 1) != 'e'){
					//if it is not the first we're displaying, put a ',' first
					if(!first){
						toDisplay += ", " + array1Sorted[i];
					}
					//otherwise do not display a ',' because it is the first element
					else{
						first = false;
						toDisplay += array1Sorted[i];
					}
				}
			}
			return toDisplay;
		});
	});	
});