$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	var str = "[1, 2]";
	var arr = JSON.parse(str);
	console.log(arr[0]);

	
	var str = "1, 2";
	var arr = str.split(", ");
	console.log(arr[0]);
  console.log(" ");
	
  //"str" contains all courses
	var str = "CS 105, CS 116, ART 202, MATH 245, CIS 255, CIS 355";
	
	
	var arr = str.split(", ");
	
	// print list (unsorted)
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
  console.log(" ");
	
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
	
	// print array (sorted)
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
  console.log(" ");
  
  
  
  //"str2" contains COURSES TAKEN
  //specify subset of array
  str2 = "CS 105, CS 116, ART 202";
  
  //"str3" contains COURSES NEEDED
  //create array of items NOT in subset of array
	var arr2 = str.split(", ");
  var arr3 = [];
  for(var i = 0; i < arr.length; i++)
  {
    if(str2.indexOf(arr[i]) == -1)
    {
      arr3.push(arr[i]);
      console.log(arr[i]);
    }
  }
  
  //"pre" contains COURSES and their PREREQS
  //create 2D array
  pre = [["CIS 255", "CS 105"], ["CIS 355", "CIS 255"]];
  
 // "eligible" contains courses in arr3 IF prereqs in str2
	eligible = []; 
	for(var i = 0; i < arr3.length; i++){
		for(var j = 0; j < pre.length; j++) {
			var found = false;
			var verifiedTaken = false; 
			if(pre[j][0] == arr3[i]) {
				found = true;
				if (str2.indexOf(pre[j][1]) >= 0) {
					eligible.push(arr3[i]);
					verifiedTaken = true;
				}
			}
		}
	}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});
