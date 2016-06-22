$(document).ready(function(){
	$("#readyMessage").text("Ready.");
		
		var input = "Banana, Apple, Cantaloupe, Kiwi, Watermelon, Avacado, Strawberry, Grape";
	
		var textInput =  $('#textinput').val();
		
		// filling the box with default elements
		$('#textinput').val('Banana, Apple, Cantaloupe, Kiwi, Watermelon, Avacado, Strawberry, Grape');
		
		var array = input.split(", ");
		
		console.log(array); // printing the array

		
		array = bubbleSort(array);
		console.log(array);
	
		
		var textOutput =  $('#textoutput').val(); // grabs the values that were output
		
		$('#textoutput').val(array); // prints the sorted array elements into the output text box
	
		
	
	
});

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