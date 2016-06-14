$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	var str = "[1,2]";
	var arr = JSON.parse(str);
	console.log(arr[0]);
	
	var str = "1, 2";
	var arr = str.split(", ");
	 
	console.log(arr);
	//print list (unsorted)
	 var str = "CS 105, CS 116, ART 202, MATH 245, CIS 255, CIS 355";
	 //arr is all courses
	 var arr = str.split(", ");
		for(var i=0; i< arr.length; i++){
		console.log(arr[i]);
	}
	console.log(" ")
	
	//Function from http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/
	function bubbleSort(arr)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
	bubbleSort(arr);
	for(var i=0; i< arr.length; i++){
		console.log(arr[i]);
	}
	console.log(" ")
	//courses taken
	str2 = "CS 105, CS 116, ART 202";
    //courses left to graduate
	arr3 = [];
	arr3index = 0;
	
	for(var i=0; i< arr.length; i++){
		if(str2.indexOf(arr[i])==-1){
			arr3[arr3index++]=arr[i];
			//arr3.push(arr[i]);
			console.log(arr[i]);
		}
	};
		//"pre" contains courses and prerequisites
		//vreates 2d array
	pre = [["CIS 255", "CS 105"]["CIS 355","CIS 255"]];
	// "eligible" conatins courses in arr3 
	//if prereqs in str2
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
	}	eligible = [];
	for(var i = 0; i<arr3.length; i++){
		for(var j = 0; j<pre.length; j++){
			var found = false;
			var verifiedTaken = false;
			if(pre[j][0]==arr3[i]){
				found = true;
				if(str2.indexOf(pre[j][1]>= 0)){
					eligible.push(arr3[i]);
					verifiedTaken = true;
				}
			}
		}
	}
	
});
	
	
	