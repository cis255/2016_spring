$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	var str = "[1, 2]";
	var arr = JSON.parse(str);
	console.log(arr[0]);
	
	var str = "1, 2";
	var arr = str.split(", ");
	console.log(arr[0]);
	
	var str = "CS 105, CS 116, ART 202, MATH 245, CIS 255, CIS 355";
	var arr = str.split(", ");

	
	//Got bubbleSort from:
	//http://stackoverflow.com/questions/16956649/javascript-bubble-sort-of-an-array-with-objects
	function bubbleSort(arr){
    var swap;
    do {
        swap = false;
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {	//if current is greater than next
                var temp = arr[i];		//make a temp storage for current
                arr[i] = arr[i+1];		//replace current with next
                arr[i+1] = temp;		//now replace next with original current
                swap = true;
            }
        }
    } while (swap);
}

	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	
	bubbleSort(arr);
	console.log(arr);
	
	// "str2" contains COURSES TAKEN
	// specify subset of array
	str2 = "CS 105, CS 116, ART 202";
	
	// "arr3" contains COURSES REMAINING to graduate
	// create array of items NOT in subset of array
	// i.e. create complement of array
	arr3 = [];
	arr3index = 0;
	for(var i = 0; i < arr.length; i++){
		if (str2.indexOf(arr[i])==-1) {
			arr3[arr3index++]=arr[i];
			// arr3.push(arr[i]);
			console.log(arr[i]);
		}
	}
	
	// "pre" contains COURSES and their PREREQUISITES
	// create 2d array
	pre = [["CIS 255", "CS 105"], ["CIS 355", "CIS 255"], ["JUNK", "TRASH"]];
	pre.length
	
	// "eligible" contains courses in arr3 IF prereqs in str2
	eligible = []; 
	for(var i = 0; i < arr3.length; i++){
		
	
		if (str2.indexOf(arr[i])==-1) {
			arr3[arr3index++]=arr[i];
			// arr3.push(arr[i]);
			console.log(arr[i]);
		}
	}
	
});



