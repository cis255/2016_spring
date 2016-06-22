$(document).ready(function(){
	$("#readyMessage").text("Ready.");
	
		var input = "Banana, Apple, Cantaloupe, Kiwi, Watermelon, Avacado, Strawberry, Grape";
	
	
		//splits the input into the array
		var array1 = input.split(", ");
		
		console.log(array1);
	
		//sorts array and shows up sorted in console log but cant get it to populate output box.
	
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
		
		array1 = bubbleSort(array1);
		console.log(array1);
	
		
	
	
		
});


	