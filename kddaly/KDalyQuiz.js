$(document).ready(function() { // begin document ready
});
function run(){
	
//get the values from the textbox input field
   var str = document.getElementById("food").value;
   console.log(str);
   // remove the commas from those values and add them to an array
   var arr = str.split(", ");
   console.log(arr);
   //start of bubble sort
   function bubbleSort(a)
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
};
// end of bubble sort 
//run bubble sort and output to console
bubbleSort(arr);
console.log(arr);


//declare new array to hold values that do not end in "e"
var arr2 = [];
//declare variable c to allow arr2 to only increment when it gets a value
var c=0;
//search through arr to find values that do not end in "e" and add them to arr2
for(var n=0; n <arr.length; n++)
{
	if(arr[n].slice(-1) !="e")
	{
		console.log(arr[n] + " does not end in e");
		arr2[c]=arr[n];
		c++;
	}
}
//output field is set to arr2 and no longer displays values that end in "e"
document.getElementById("output").value = arr2;
console.log(arr2);  
};
//}); //end of document ready