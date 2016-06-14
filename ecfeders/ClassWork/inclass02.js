$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	var str = "[1,2]";
	var array = JSON.parse(str);
	console.log(parsedStr)
	
	var str = "1,2";
	var arr = str.split(", ");
	console.log(arr[0]);
	
	var courseArr = "CS 105, CS 116, ART 202, MATH 245, CIS 255, PHIL 210B";
	
	var arr = courseArr.split(", ");
	for(var i = 0; i < arr.length; i++)
	{
		console.log(arr[i]);
	}
});
