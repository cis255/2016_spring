//Bubble Sort Array of Courses
var strClasses = "CS105, CS116, CS216, CIS255, CIS355";
var arrClasses = strClasses.split(", ");
console.log(arrClasses);
bubbleSort(arrClasses);
console.log(arrClasses);

//Find courses in one array, but not arrray subset
var strClasses2 = "CS105, CS116, CIS355";
var arrClasses2 = strClasses2.split(", "); 
console.log("A = " + arrClasses);
console.log("B = " + arrClasses2);
var arrClasses3 = inAnotB(arrClasses, arrClasses2);
console.log("in A, but not B = " + arrClasses3);

//I'm not sure yet
prereq = [["CIS255", "CS105"], ["CIS355", "CIS255"]]
elig = [];

for (var i = 0; i < arrClasses3.length; i++)
{
	for (var j = 0; j < prereq.length; j++)
	{
		if (prereq[j][0] === arrClasses3[i])
		{
			elig.push(arrClasses3[i]);
		}
	}
}

console.log(elig);


function bubbleSort(arr)
{
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function inAnotB(arrA, arrB)
{
	var arrC = [];
	
	for (var i = 0; i < arrA.length; i++)
	{
		if (arrB.indexOf(arrA[i]) == -1)
		{
			arrC.push(arrA[i]);
		}
	}
	
	return arrC;
}

function binarySearch(arr, el) {
    var beg = 0, mid, end = arr.length -1;
 
    while (beg <= end) {
        mid = (beg + end) / 2 | 0;
        if (arr[mid] < el) {
            beg = mid + 1;
        }
        else if (arr[mid] > el) {
            end = mid - 1;
        }
        else {
            return mid;
        }
    }
 
    return -1;
}