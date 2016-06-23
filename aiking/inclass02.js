//Bubble sorting with Bubble Sort

$(document).ready(function() {
	// This is a listener.
	$("#p1").text("Ready.");
	
	var str = "[1, 2]";
	//parsedStr is an array.
	var parsedStr = JSON.parse(str);
	console.log(parsedStr);
	console.log("The first value is " + parsedStr[0]);
	console.log("The second value is " + parsedStr[1]);
	
	var str2 = "1, 2"
	var arr = str2.split(", ");
	console.log(arr);
	
	var courses = "CS 105, CS 216, CS 316, CIS 146, CS 116, PHIL 210B"
	var courseArr = courses.split(", ");
	
	for (var i = 0; i < courseArr.length; i++) {
		if (i == 0)
			{console.log("Unsorted List -->");}
		console.log(courseArr[i]);
		if (i == courseArr.length - 1)
			{console.log("-----------")}
	};
	
	bubbleSort(courseArr);
	
	function bubbleSort(items) {
		var i;
		var j;
		var sortedArr = [];
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
		for (i=0;i<length;i++) {
			sortedArr[i] = items[i];
		};
		
		for (i = 0; i < length; i++) {
			if (i == 0) 
				{console.log("Sorted List -->");};
			console.log(sortedArr[i]);
			};
			
			return sortedArr;
		};
/*-----------------------------------------------------------------------
		//Create 2D array.
		var pre = [["CIS 255", "CS 105"], ["CIS 355", "CIS 255"]];
		//Courses already taken.
		var taken = "CS 105, CS 116, PHIL 210B";
		var arr3 = [];
		var arr3index =0;
		
		for(var k =0;k<courseArr.length;i++) {
			if (taken.indexOf(courseArr[k])==-1) {
				arr3[arr3index++]=courseArr[k];
				console.log(courseArr[k]);
			};
		}
*/
	});