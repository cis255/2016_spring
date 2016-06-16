$(document).ready(function() {
	$("readyMessage").text("Ready.");
	
	//var str = "[1,2]";
	//var arr = JSON.parse(str);
	//console.log(arr[0]);

	var str = "1, 2";
	var arr = str.split(", ");
	console.log(arr[0]);
	
	var courseStr = "CS 105, CS 116, ART 202, MATH 245, CIS 255, CIS 355";
	var courseArr = courseStr.split(", ");
	//Print list unsorted
	for(i=0; i < courseArr.length; i++){
		console.log(courseArr[i]);
	};
	 console.log("End of Unsorted List.")
// bubbleSort adapted from code at: http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/
	function bubbleSort(courseArr){
		var swapped;
		do {
			swapped = false;
			for (var i=0; i < courseArr.length-1; i++) {
				if (courseArr[i] > courseArr[i+1]) {
					var temp = courseArr[i];
					courseArr[i] = courseArr[i+1];
					courseArr[i+1] = temp;
					swapped = true;
				}
			}
		} while (swapped);
};
 
	bubbleSort(courseArr);
	for(i=0; i < courseArr.length; i++){
		console.log(courseArr[i]);
	};
	
	console.log("End of Sorted List.")
	
	var courseStr2 = "CS 105, CS 116, ART 202";
	var courseArr2 = [];
	for(i=0; i < courseArr.length;i++){
		if(courseStr2.indexOf(courseArr[i]) == -1){
			courseArr2.push(courseArr[i]);
		};
	};
	
	for(i=0; i < courseArr2.length; i++){
		console.log(courseArr2[i]);
	};
	
	console.log("End of Not included List.")

	//Create 2D array
	pre = [["CIS 255" , "CS 105"],["CIS 355","CIS 255"]];
	
	eligible =[];
	for(i=0; i < courseArr2.length;i++){
		var found =false;
		var verified=false;
		for(var j = 0; j< pre.length;j++){
			if(pre[j][0] == courseArr2[i]){
				found=true;
				if(courseStr2.indexOf(pre[j][1]) >=0){
					eligible.push(courseArr2[i]);
					verfied = true;
				};
				
			};
		};
		
	};
	for(i=0; i < eligible.length; i++){
		console.log(eligible[i]);
	};
});