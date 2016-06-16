$(document).ready(function() {
	Animate("fadeIn","body");
	  function Animate(x,element) {
			$(element).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			  $(this).removeClass();
			});
		  };
		  
	var str = "[1, 2]";
	var parsedStr = JSON.parse(str);
	console.log(parsedStr[0]);
	console.log(parsedStr[0]);
	
	var coursesArr = "CS 105, CS 116, ART 202, MATH 245, CIS 255, PHIL 210B";
	var arr = coursesArr.split(", ");
	
	for(var i=0;i<arr.length;i++)
	{
		console.log(arr[i]);
	};
	
	//taken from external source
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
	};
	
	bubbleSort(arr);
	
	console.log("Sorted: ");
	
	for(var i=0;i<arr.length;i++)
	{
		console.log(arr[i]);
	};
	
	str2 = "CS 105, CS 116, ART 202";
	arr2 = str2.split(", ");
	arr3 = [];
	
	for(var i=0;i<arr.length;i++)
	{
		if(arr2.indexOf(arr[i]) == -1)
		{
			arr3.push(arr[i]);
			console.log(arr[i]+" is in first array but not second one.");
		}
	}
	
	console.log(arr3);
	
	pre = [["CIS 255","CS 116"],["CIS 355","CIS 255"]];
	
	// "eligible" contains courses in arr3 IF prereqs in str2
	eligible = []; 
	for(var i = 0; i < arr3.length; i++){
		for(var j = 0; j < pre.length; j++) {
			var found = false;
			var verifiedTaken = false; 
			if(pre[j][0]==arr3[i]) {
				found = true;
				if (str2.indexOf(pre[j][1] >= 0)) {
					eligible.push(arr3[i]);
					verifiedTaken = true;
				}
			}
		}
	}
	
	
	$("#readyMessage").text("Ready.");
});