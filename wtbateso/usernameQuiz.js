$(document).ready(function() { // begin document ready

	object.onsubmit = function();
	
	function {	//when user hits button
		var element = document.getElementById('input');
		var array1 =  [];
		
		if (element != null && element.value == '') { 	//if input is not blank
			var array1 = [getElementById("input")];		//take input store to array
			}
			else {			// if input is blank this is default array
				var array1 = ["bananas", "apple", "cantaloupe", "kiwi", "watermelon", "avacado", "strawberry", "grape"];
			}
		array1.sort(); // sort array
		
		for(var i = 0; i < array1.length; i++) 
				outputtext += array1[i] + ", ";
			output.innerHTML = array1[];

		output.innerhtml = array1[];
		console.log(array1[]);
	};
	
	/*
	$( "form" ).submit(function( event ) {
	  console.log( $( this ).serializeArray() );
	  event.preventDefault();
	});
	var res = str.split("e");
	*/

}); // end document ready