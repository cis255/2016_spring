//$(document).ready(function() {
			
	var fruits = document.getElementById("inputText");
	var fruitText = "";
	var str = "Banana, Apple, Cantaloupe, Kiwi, Watermelon, Avocado, Strawberry, Grape";
	var array1 = str.split(", ");
	
	for(var i = 0; i < array1.length; i++) {
		fruitText += array1[i] + ", ";
		inputText.innerHTML = fruitText;
	}
	
	function submit() {    			// this function sorts array and prints
		$('#outputText').val("");			//clears the text
		var str = $('#inputText').val();	//input text and splits it into an array
		var array1 = str.split(", ");
		
		function bubbleSort(array1)	//copied from http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/
		{
			var swapped;
			do {
				swapped = false;
				for (var i=0; i < array1.length-1; i++) {
					if (array1[i] > array1[i+1]) {
						var temp = array1[i];
						array1[i] = array1[i+1];
						array1[i+1] = temp;
						swapped = true;
					}
				}
			} while (swapped);
		}
		bubbleSort(array1);

		for (var i=0; i < array1.length; i++) { 	//print array
			if (array1[i].slice(-1) !== "e") {
				$('#outputText').val($('#outputText').val() + array1[i] + "\n");
			}
		}
	};
//});

	
	