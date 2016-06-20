$(document).ready(function(){
	$("#readMessage").text("Ready.");
	
	var str = "[1, 2]";
	var arr = JSON.parse(str);
	console.log(arr[0]);
	
	var str = "1, 2";
	var arr = str.split(", ");
	console.log(arr[0]);
	
	var str = "CS 105, CS 116, ART 202, MATH 245, CIS 255, PHIL 210";
	var arr = str.split(", ");
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	//from:
	// http://codingmiles.com/sorting-algorithms-bubble-sort-using-javascript/
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


	arr = bubbleSort(arr);
	
	str2 = "CS 105, CS 116, ART 202";
	
	arr2 = str2.split(", ");
	
	arr3 = [];
	
	console.log("classes in arr but not in arr2")
	//for each class in arr
	for(var i = 0; i < arr.length; i++){
		//assume it is unique
		var unique = true;
		//check it against each class in arr2
		for(var j = 0; j < arr2.length; j++){
			//if it is the same as a class in arr2, it is no longer unique
			if(arr[i] == arr2[j]){
				unique = false;
			}
		}
		//if it is unique after comparing against all classes in arr2, print it
		if(unique){
			console.log(arr[i]);
			arr3.push(arr[i]);
		}
	}
	
	//pre is a 2d array of prereqs
	pre = [["CIS 255", "CS 105"], ["CIS 355", "CIS 255"], ["junk", "trash"]];
	//eligible contains courses in arr3 and prereqs in str2
	eligible = [];
	
	for(var i = 0; i < arr3.length; i++){		
		for(var j = 0; j < pre.length; j++){
			var found = false;
			var verfiedTaken = false;
			if(pre[j][0] == arr3[i]){
				found = true;
				if(str2.indexOf(pre[j][1]) >= 0){
					eligible.push(arr3[i]);
					verfiedTaken = true;
				}
			}
		}
	}
	console.log("eligible courses")
	for(var i = 0; i < eligible.length; i++){
		console.log(eligible[i]);
	}
	
	console.log("arr")
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	
});