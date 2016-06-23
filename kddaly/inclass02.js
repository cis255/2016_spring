$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	
	var str = "[1, 2]";
	var arr = JSON.parse(str);
	console.log(arr[0]);
	
	var str = "1, 2";
	var arr = str.split(", ");
	console.log(arr[0]);
	//print list unsorted
	var str = "CS 105, CS 116, ART 202, CIS 255, PHIL 210B, MATH 280";
	var arr = str.split(", ");
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
	console.log("sorted");
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
//print sorted
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
	console.log("compared");
	str2 = "CS 105, CS 116, ART 202";
	arr3 = [];
	for(var i = 0; i < arr.length; i++){
		if (str2.indexOf(arr[i])==-1){
			arr3.push(arr[i]);
			console.log(arr[i]);
		}
	}
	
	
	pre = [["CIS 205", "CS 105"],["CIS 355", "CS 255"]];;
	
	eligible = [];
		for(var i = 0; i < arr3.length; i++){
			for(var j = 0; j < pre.length; j++){
			var found = false;
			var varified = false;
			if (pre[j][0]==arr3[i]) {
					found = true;
					if (str2.indexOf(pre[j][1]) >= 0) {
						eligible.push(arr3[i]);
						verified = true;
					}
				}
			}
		}
	
	

});

