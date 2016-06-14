$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	var str = "[1, 2]";
	var array = JSON.parse(str);
	console.log(array);
	console.log(array[0]);
	console.log(array[1]);
	
	var str2 = "1, 2";
	var array2 = str2.split(", ");
	console.log(array2);
	console.log(array2[0]);
	console.log(array2[1]);
	
	//all courses
	var courses = "CS 105, CS 116, ART 202, MATH 245, CIS 255, CIS 355";
	var courseArr = courses.split(", ");
	
	//print unsorted list
	for (var i=0; i<courseArr.length; i++) {
		console.log(courseArr[i]);
	}
	
	//bubblesort function copied from http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/
	function bubbleSort(courseArr)
	{
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
	}
	bubbleSort(courseArr);
	console.log(courseArr);
	
	//print each element of the sorted array
	for (var i=0; i<courseArr.length; i++) {
		console.log(courseArr[i]);
	}
	
	//courses taken
	var str2 = "CS 105, CS 116, ART 202";
	var arr2 = courses.split(", ");
	
	//arr3 is courses remaining
	//create array of items not in subset of array
	arr3 = [];
	arr3index = 0;
	for (i=0; i<courseArr.length; i++) {
		if (str2.indexOf(courseArr[i])==-1) {
			arr3[arr3index++]=courseArr[i];
			//arr3.push(courseArr[i]);
			console.log(courseArr[i]);
		}
	}
	
	console.log(arr3);
	
	//pre is courses and their prereqs
	//2d array
	pre = [["CIS 255", "CS 105"], ["CIS 355", "CIS 255"], ["JUNK", "TRASH"]];
	console.log(pre.length);
	
	//eligible is courses needed and able to be taken
	eligible = [];
	for (i=0; i<arr3.length; i++) {
		for(var j =0; j<pre.length; j++) {
			var found = false;
			var verifiedTaken = false;
			if (pre[j][0] == arr3[i]) {
				found = true;
				if (str2.indexOf(pre[j][1]) >= 0) {
					eligible.push(arr3[i]);
					verifiedTaken = true;
				}
			}
		}
		
	}
	
	console.log(eligible);
});