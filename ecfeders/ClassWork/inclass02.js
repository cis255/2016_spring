$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	var str = "[1,2]";
	var array = JSON.parse(str);
	console.log(array)
	
	var str = "1,2";
	
	var arr = str.split(", ");
	console.log(arr[0]);
	
	//Define string
	var courseStr = "CS 105, CS 116, ART 202, MATH 245, CIS 255, PHIL 210B";
	
	//Split string into array, All courses
	var arr = courseStr.split(", ");
	
	//Print Unsorted list
	for(var i = 0; i < arr.length; i++)
	{
		console.log(arr[i]);
	}
	
	/* http://stackoverflow.com/questions/14800987/javascript-sorting-by-algorithm-jquery-maybe */
	//Bubble Sort From URl Above
	function bubbleSort(a)
	{
		var swapped;
		do {
			swapped = false;
			for (var i=0; i < a.length-1; i++) {
				if (a[i] > a[i+1]) {
					var temp = a[i];
					a[i] = a[i+1];
					a[i+1] = temp;
					swapped = true;
				}
			}
		} while (swapped);
	}
	
	// Call bubble sort
	bubbleSort(arr);
	
	//Print sorted list
	for(var i = 0; i < arr.length; i++)
	{
		console.log(arr[i]);
	}
	
	//Second set of string
	var str2 = "CS 105, CS 116, ART 202";
	//Courses Left to graduate
	var arr3 = [];
	
	for(var i = 0; i < arr.length; i++)
	{
		if(str2.indexOf(arr[i]) == -1)
		{
			arr3.push(arr[i])
		}
	}
	
	console.log(arr3);
	
	// 2D a2rray to show courses and their pre-reqs
	pre = [["CIS 255", "CS 105"], ["CIS 355", "CIS 255"], ["JUNK", "TRASH"]];
	
	//"elgible" contains in arr3 and prereq are in str2
	elgible = [];
	
	for(var i = 0; i < arr3.length; i++)
	{
		for(var j = 0; j < pre.length; j++)
		{
			var found = false;
			var verified = false;
			if(pre[j][0] == arr3[i])
			{
				found = true;
				if(str2.indexOf(pre[j][i] >= 0))
				{
					elgible.push(arr3[i]);
					verified = true;
				}
			}
		}
	}
	
	console.log(elgible);
});
