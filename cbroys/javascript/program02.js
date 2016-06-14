//Declaring an empty array that will hold our json objects from svsu api custom made json file. (Dr. Corser & Zaiter)
allCoursesArr = [];
var xmlhttp = new XMLHttpRequest();
var url = "./courses.json";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.responseText);
		//after parsing the json into array, save it to allCoursesArr due to scope issues, myArr will be gone.
		myFunction(myArr);
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//function to save passed array into allCoursesArr
function myFunction(arr) {
	allCoursesArr = arr;
}

// Courses for CS
var cs = ["CS 105", "MATH 300", "CS 116", "CS 216", "CS 245", "MATH 161", "MATH 140",
"MATH 223", "COMM 105A", "RPW 304", "PHIL 205A!", "PHIL 210B", "CS 146",
"CS 316", "CS 331", "CS 401", "CS 411", "CS 421", "CS 446", "CS 451", "CS 461"
, "CS 471", "CIS 255", "CIS 355", "CIS 357", "CIS 311", "CS 345", "CS 403",
"CS 431", "CS 476", "CS 482", "CS 490"];

// Courses for CIS
var cis = ["CS 245", "MATH 120B", "COMM 105A", "RPW 304", "ACCT 213",
"ECON 221", "LAW 308", "MGT 321", "MKT 331", "PHIL 205A!", "PHIL 210B",
"CS 105", "CS 116", "CS 146", "CS 216", "CIS 255", "CIS 301", "CIS 311",
"CIS 333", "CIS 355", "CIS 366", "CIS 386", "CIS 386", "CIS 422", "CS 345",
"CIS 357", "CIS 371", "CIS 425", "CIS 486", "CIS 490"];

// prequisite list
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

// return true is all prereqs taken, false otherwise (Dr. Corser)
function prereqsTaken (taken,course) {
	var retval = true; // assume true that prereq for course has been taken
	for (var i=0; i < prereqs.length; i++) { // loop through all course prereqs
		if (prereqs[i].course == course) { 
			if ( (taken.indexOf(prereqs[i].prereq) == -1)  
				|| ((taken.indexOf(prereqs[i].prereq2) == -1) && (prereqs[i].prereq2 != "")) 
				|| ((taken.indexOf(prereqs[i].prereq3) == -1) && (prereqs[i].prereq3 != "")) 
				|| ((taken.indexOf(prereqs[i].prereq4) == -1) && (prereqs[i].prereq4 != ""))
				)
			{ 
					retval = false; // retval set to false if the prereq isn't in the list
					break;
			}
		}
	}
	return retval;
};

// function that handles radio button click and generates courses needed for CS,CIS degree into allCoursesNeeded textarea (Jennifer Bobber)
function course(degreeName)
{
	var allCourses = document.getElementById("allCoursesNeeded");
	var allCoursesText = "";
	if(degreeName == "CS") 
		CoursesArr = cs;
	else 
		CoursesArr = cis;
	for(var i=0; i<CoursesArr.length; i++) 
	{
		if ( i != (CoursesArr.length-1) )
		{
			allCoursesText += CoursesArr[i] + ", ";
		}
		else
		{
			allCoursesText += CoursesArr[i];
		}
	}
	allCourses.innerHTML = allCoursesText;
}

// function to remove options from selectbox, good for clearing options after clicking submit. (Zaiter)
function removeOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		selectbox.remove(i);
	}
}

// function that handles submit button. all the magic goes here. (Zaiter)
function scheduleSubmit()
{
	removeOptions(document.getElementById("id02")); //first remove all dropdown options.
	takenElement = document.getElementById("coursesTaken"); //assign variables to needed elements.
	coursesForGraduationElement = document.getElementById("allCoursesNeeded");
	taken = takenElement.value;
	coursesForGraduation = coursesForGraduationElement.value;
	takenArr = taken.split(', '); //save taken courses and courses for graduation into array.
	coursesForGraduationArr = coursesForGraduation.split(', ');
	
	//make arrays for courses that are eligible and aren't.
	coursesEligible = [];
	coursesNotEligible = [];
	
	for(var j = 0; j < coursesForGraduationArr.length; j++) //for loop to fill courses that are eligible and aren't arrays.
	{
		//if prerequests are taken and the course not in takenArr, then add it to eligible courses, otherwise add it to not eligible courses.
		if(prereqsTaken(taken,coursesForGraduationArr[j]) && takenArr.indexOf(coursesForGraduationArr[j]) == -1)
		{
			coursesEligible.push(coursesForGraduationArr[j]);
		}
		else
		{
			coursesNotEligible.push(coursesForGraduationArr[j]);
		}
	}
	
	//declaring empty courses available for registeration array.
	coursesEligibleJsonArr = [];
	// for loop to add the courses that are eligiable and available for registeration (With Help from Zaiter)
	for(var z=0;z<coursesEligible.length;z++)
	{
		for(var a=0;a<allCoursesArr.courses.length;a++)
		{
			// if course eligiable to be taken available in the API, then push it into courses available for registeration array
			if((allCoursesArr.courses[a].prefix + " " + allCoursesArr.courses[a].courseNumber) == coursesEligible[z])
			{
				coursesEligibleJsonArr.push(allCoursesArr.courses[a]);
			}
		}
	}
	
	//for loop that handles the making of drop down menu of courses available for registeration. (Dr. Corser)
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
	
	// checking for course elegibility
	// declare variables for element and text for neededButNotEligible in html.
	var coursesNotEligibleElement = document.getElementById("neededButNotEligible");
	var coursesNotEligibleText = "";
	// for loop to generate text that goes into neededButNotEligible element.
	for(var i=0; i<coursesNotEligible.length; i++) 
	{
		// if the course is in coursesNotEligible array and not in taken array, then add it to text
		if(takenArr.indexOf(coursesNotEligible[i]) == -1)
		{
			if ( i != (coursesNotEligible.length-1) )
			{
				coursesNotEligibleText += coursesNotEligible[i] + ", ";
			}
			else
			{
				coursesNotEligibleText += coursesNotEligible[i];
			}
		}
	}
	// show it up on the html element.
	coursesNotEligibleElement.innerHTML = coursesNotEligibleText;
}