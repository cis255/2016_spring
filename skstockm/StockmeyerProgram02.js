/*All the code in this file is from Abdulrahman Zaiter
I tried to do it by myself with no luck. 
Since he already did it perfectly I thought might as well use his and just change it a bit to the way I like to format my code.
*/
//Declaring an empty array that will hold our json objects from svsu api.
allCoursesArr = [];
//An array that holds courses prefixes to be used in URL variable in a loop
coursesPrefixes = ["CS","CIS","MATH","COMM","RPW","PHIL","ACCT","ECON","LAW","MGT","MKT"];
//xmlhttp array that holds requests same as courses prefixes size.
xmlhttp = new Array(coursesPrefixes.length);

//IIFE function
//looping through the prefixes one by one
for(var i=0;i<coursesPrefixes.length;i++) {
	xmlhttp[i]= new XMLHttpRequest(); // intialize new request
	var url = "https://api.svsu.edu/courses?prefix=" + coursesPrefixes[i]; // declare the url
	//Specify Callback Function 
	xmlhttp[i].onreadystatechange =  
	function(index) {
        return function() {
			if ((xmlhttp[index].readyState == 4) && (xmlhttp[index].status == 200)) {
				var jsonArr = JSON.parse(xmlhttp[index].responseText);
				for(var j=0;j<jsonArr.courses.length;j++) {
					pushIntoDefinedArr(jsonArr,j); 
				}
			};
		};
	}(i);
	// Exexute the Request
	xmlhttp[i].open("GET", url, true);
	xmlhttp[i].send();
};   

//just like the name says, it adds/pushes into the Defined Array to allCoursesArr
function pushIntoDefinedArr(arr,index)
{
	allCoursesArr.push(arr.courses[index]);
};

// edited courses array for CS -- from: cole royes
var csCoursesArr = ["CS 105", "MATH 300", "CS 116", "CS 216", "CS 245", "MATH 161", "MATH 140",
					"MATH 223", "COMM 105A", "RPW 304", "PHIL 205A!", "PHIL 210B", "CS 146",
					"CS 316", "CS 331", "CS 401", "CS 411", "CS 421", "CS 446", "CS 451", "CS 461",
					"CS 471", "CIS 255", "CIS 355", "CIS 357", "CIS 311", "CS 345", "CS 403",
					"CS 431", "CS 476", "CS 482", "CS 490"];

// courses for CIS -- from: cole royes
var cisCoursesArr = ["CS 245", "MATH 120B", "COMM 105A", "RPW 304", "ACCT 213",
					 "ECON 221", "LAW 308", "MGT 321", "MKT 331", "PHIL 205A!", "PHIL 210B",
					 "CS 105", "CS 116", "CS 146", "CS 216", "CIS 255", "CIS 301", "CIS 311",
					 "CIS 333", "CIS 355", "CIS 366", "CIS 386", "CIS 386", "CIS 422", "CS 345",
					 "CIS 357", "CIS 371", "CIS 425", "CIS 486", "CIS 490"];

// prequisite list, each course had up to 4 prereqs
var prereqs = [
	{course: "CIS 355", prereq: "CIS 255", prereq2: "CS 216", prereq3: "", prereq4: ""},
	{course: "CS 245", prereq: "CS 116", prereq2: "MATH 140", prereq3: "", prereq4: ""},
	{course: "MATH 161", prereq: "MATH 140", prereq2: "", prereq3: "", prereq4: ""},
	{course: "MATH 223", prereq: "MATH 161", prereq2: "", prereq3: "", prereq4: ""},
	{course: "MATH 300", prereq: "MATH 161", prereq2: "", prereq3: "", prereq4: ""},
	{course: "RPW 304", prereq: "ENGL 111", prereq2: "ENGL 212", prereq3: "", prereq4: ""},
	{course: "PHIL 205A!", prereq: "ENGL 111", prereq2: "", prereq3: "", prereq4: ""},
	{course: "PHIL 210B", prereq: "ENGL 111", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 146", prereq: "CS 105", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 216", prereq: "CS 116", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 316", prereq: "CS 216", prereq2: "MATH 300", prereq3: "", prereq4: ""},
	{course: "CS 331", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 401", prereq: "CS 331", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 411", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 446", prereq: "CS 331", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 451", prereq: "CS 316", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 461", prereq: "CS 316", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 255", prereq: "CS 116", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 357", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 301", prereq: "CS 146", prereq2: "CS 216", prereq3: "CS 245", prereq4: ""},
	{course: "CIS 311", prereq: "CS 146", prereq2: "CS 216", prereq3: "", prereq4: ""},
	{course: "CIS 333", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 333", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 366", prereq: "CS 245", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 386", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 422", prereq: "CIS 311", prereq2: "CIS 366", prereq3: "CIS 386", prereq4: ""},
	{course: "CIS 424", prereq: "CIS 422", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 421", prereq: "CIS 355", prereq2: "CIS 357", prereq3: "CS 401", prereq4: "CS 411"},
	{course: "CS 471", prereq: "CS 421", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 345", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 403", prereq: "CIS 355", prereq2: "CS 401", prereq3: "", prereq4: ""},
	{course: "CS 431", prereq: "CS 331", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 476", prereq: "CS 316", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 482", prereq: "CS 216", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 490", prereq: "CS 421", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 371", prereq: "CS 216", prereq2: "CS 245", prereq3: "", prereq4: ""},
	{course: "CIS 425", prereq: "CIS 311", prereq2: "CS 245", prereq3: "", prereq4: ""},
	{course: "CIS 486", prereq: "CIS 386", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CIS 486", prereq: "CIS 386", prereq2: "", prereq3: "", prereq4: ""},
	{course: "CS 116", prereq: "CS 105", prereq2: "", prereq3: "", prereq4: ""}
];

// return true is all prereqs taken, false otherwise -- credits to professor Corser, edited to adapt into previous code
function prereqsTaken (taken,course) {
	var retval = true; // assume true that prereq for course has been taken
	for (var i=0; i < prereqs.length; i++) { // loop through all course prereqs
		if (prereqs[i].course == course) { // if course is in prereqs list
			if ( (taken.indexOf(prereqs[i].prereq) == -1)  // if the first prereq is not in the taken list
				|| ((taken.indexOf(prereqs[i].prereq2) == -1) && (prereqs[i].prereq2 != "")) 
				|| ((taken.indexOf(prereqs[i].prereq3) == -1) && (prereqs[i].prereq3 != "")) 
				|| ((taken.indexOf(prereqs[i].prereq4) == -1) && (prereqs[i].prereq4 != ""))
				)
			{ 
					retval = false; 
					break; // breaks out of for loop if it gets in here
			}
		}
	}
	return retval; //returns the retval which will tell if prereq was taken or not
};
//I changed the name of this function
// function that handles radio button click and generates courses needed for CS,CIS degree into allCoursesNeeded textarea
function handleClick(degreeName) {
	//storing allCoursesNeeded textarea into variable.
	var allCourses = document.getElementById("allCoursesNeeded");
	//declaring empty text to store the courses in it.
	var allCoursesText = "";
	//assigning CoursesArr
	if(degreeName == "CS") 
		CoursesArr = csCoursesArr;
	else 
		CoursesArr = cisCoursesArr;
	//run through the array and add the courses into the text
	for(var i=0; i<CoursesArr.length; i++) {
		if ( i != (CoursesArr.length-1) ) {
			allCoursesText += CoursesArr[i] + ", ";
		} else {
			allCoursesText += CoursesArr[i];
		}
	}
	//show the text in allCoursesNeeded textarea which is the secondbox
	allCourses.innerHTML = allCoursesText;
}

// function to remove options from selectbox, good for clearing options after clicking submit.
function removeOptions(selectbox) {
	var i;
	for(i=selectbox.options.length-1;i>=0;i--) {
		selectbox.remove(i);
	}
}
//I also changed the name of this function
// function that handles submit button. Everything goes here that you need for bottom 2 boxes.
function onSubmit()
{
	//first remove all dropdown options.
	removeOptions(document.getElementById("id02"));
	//assign variables
	takenElement = document.getElementById("coursesTaken");
	coursesForGraduationElement = document.getElementById("allCoursesNeeded");
	taken = takenElement.value;
	coursesForGraduation = coursesForGraduationElement.value;
	//save taken courses and courses for graduation into array, splitting it with ', '
	takenArr = taken.split(', ');
	coursesForGraduationArr = coursesForGraduation.split(', ');
	//make arrays for courses that are eligible and aren't.
	coursesEligible = [];
	coursesNotEligible = [];
	//for loop to fill courses that are eligible and aren't arrays.
	for(var j = 0; j < coursesForGraduationArr.length; j++) {
		//if prerequests are taken and the course not in takenArr, then add it to eligible courses, otherwise add it to not eligible courses.
		if(prereqsTaken(taken,coursesForGraduationArr[j]) && takenArr.indexOf(coursesForGraduationArr[j]) == -1) {
			coursesEligible.push(coursesForGraduationArr[j]);
		} else {
			coursesNotEligible.push(coursesForGraduationArr[j]);
		}
	}
	
	//declaring empty courses available for registeration array.
	coursesEligibleJsonArr = [];
	// for loop to add the courses that are eligiable and available for registeration.
	for(var z=0;z<coursesEligible.length;z++) {
		for(var a=0;a<allCoursesArr.length;a++) {
			// if course eligiable to be taken available in the API, then push it into courses available for registeration array
			if((allCoursesArr[a].prefix + " " + allCoursesArr[a].courseNumber) == coursesEligible[z]) {
				coursesEligibleJsonArr.push(allCoursesArr[a]);
			}
		}
	}
	
	//for loop that handles the making of drop down menu of courses available for registeration. -- credits to prof Corser
	for(var i = 0; i < coursesEligibleJsonArr.length; i++) {
		var newP = document.createElement("option");
		var newText 
			= document.createTextNode(
			  coursesEligibleJsonArr[i].prefix + " " 
			+ coursesEligibleJsonArr[i].courseNumber + " " 
			+ coursesEligibleJsonArr[i].term + " " 
			+ coursesEligibleJsonArr[i].meetingTimes[0].days + " " 
			+ coursesEligibleJsonArr[i].meetingTimes[0].startTime + " " 
			+ coursesEligibleJsonArr[i].instructors[0].name); 
		document.getElementById("id02").appendChild(newP);
		newP.appendChild(newText);
	}
	
	//last but not least: courses that are not eligible.
	//declare variables for element and text for neededButNotEligible in html.
	var coursesNotEligibleElement = document.getElementById("neededButNotEligible");
	var coursesNotEligibleText = "";
	//for loop to generate text that goes into neededButNotEligible element.
	for(var i=0; i<coursesNotEligible.length; i++) {
		// if the course is in coursesNotEligible array and not in taken array, then add it to text
		if(takenArr.indexOf(coursesNotEligible[i]) == -1) {
			if ( i != (coursesNotEligible.length-1) ) {
				coursesNotEligibleText += coursesNotEligible[i] + ", ";
			} else {
				coursesNotEligibleText += coursesNotEligible[i];
			}
		}
	}
	// show text
	coursesNotEligibleElement.innerHTML = coursesNotEligibleText;
}
