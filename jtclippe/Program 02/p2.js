/*
	PSEUDOCODE (DIAGRAM):
	
	PRINT all courses needed to TEXTBOX2
	GET courses taken from TEXTBOX1 (user input)
	CALCULATE "next" classes based on courses taken (determined with prerequisites)
	REQUEST available "next" courses from SVSU API
	PRINT request in TEXTBOX3
	DETERMINE courses left (all courses - courses taken - "next" courses)
	PRINT courses left on TEXTBOX4
*/

// courses for CS
var cs = ["COMM105A", "CS105", "CS116", "CS146", "CS216",
			"CS245", "CS316", "CS331", "CS345", "CS401",
			"CS403", "CS411", "CS421", "CS431", "CS446", 
			"CS451", "CS461", "CS471", "CS476", "CS482",
			"CS490", "CIS255", "CIS311", "CIS355", "CIS357",
			"MATH161", "MATH223", "MATH300", "PHIL205A!", 
			"PHIL210B",  "RPW304"];

// courses for CIS
var cis = ["ACCT213", "COMM105A", "CS105", "CS116", "CS146",
			"CS216", "CS245", "CS345", "CIS255", "CIS301",
			"CIS311", "CIS333", "CIS355", "CIS357", "CIS366",
			"CIS371", "CIS386", "CIS422", "CIS424", "CIS425", "CIS486",
			"CIS490", "ECON221", "LAW308", "MATH120B", "MGT321",
			"MKT331", "PHIL205A!", "PHIL210B", "RPW304"];

displayCoursesNeeded(); //Displays courses in Textbox 2

/* 
Adjacency Matrix for Graph (Tree) of CS Courses
**Originally planned to use adjacency matrix as a graph representation
of the tree that holds that data on what classes are prerequisites 
for what classes for building the extra credit course planner, but ran out of time**
*/
var adjCS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
				0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
				0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,
				0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,
				0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


/* 
Adjacency Matrix for Graph (Tree) of CIS Courses
**Originally planned to use adjacency matrix as a graph representation
of the tree that holds that data on what classes are prerequisites 
for what classes for building the extra credit course planner, but ran out of time**
*/
var adjCIS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
				0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
				0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				
var csisBool = true; // Boolean for determining if CS is selected (true) or CIS is selected (false)

/*
A function that takes an array and an x and y to be able to access the adjacency matrix
as if it were a 2d array
*/				
function index2d(arr, x, y)
{
	return arr[(y*Math.sqrt(arr.length))+x];
}
				
var takenCourses = []; //Courses taken from Textbox 1
var youCanTake = []; //Classes that you have not taken, but have prerequisites for

var coursePrefixes = []; //Prefixes for youCanTake courses
var courseNumbers = []; //Course numbers for youCanTake courses

//A function that populates Textboxes 3 and 4
function submitCourses()
{
	var txtTaken = document.getElementById("coursesTaken").value; //txtTaken gets the values in Textbox 1

	takenCourses = txtTaken.split(", "); //splits the values in txtTaken and puts them in the takenCourses array
	removeUselessClasses(takenCourses); //gets classes you have proper prerequisites for (bad name, my apologies. functions purpose changed overtime)
	
	coursePrefixes = splitPrefixFromNumber(youCanTake, true); //Puts all prefixes for youCanTake in coursePrefixes
	courseNumbers = splitPrefixFromNumber(youCanTake, false); //Puts all course numbers for youCanTake in courseNumbers

	populateCourses(); //Populates Textbox 3 with API request from youCanTake
	
	remainingCourses(); //Populates Textbox 4 with courses not in Textbox 1 or youCanTake, but in Textbox 2
	
}

//Populates Textbox 4 with courses not in Textbox 1 or youCanTake, but in Textbox 2
function remainingCourses()
{
	var adj = []; //variable for local adjacency matrix
	var courses = []; //variable for local course list
	
	/*
	sets local adjacency matrix to adjCS and local course list to CS when true
	and sets local adjacency matrix to adjCIS and local course list to CIS when false
	*/
	if (csisBool)
	{
		adj = adjCS;
		courses = cs;
	}
	else
	{
		adj = adjCIS;
		courses = cis;
	}
	
	var coursesLeft = []; //list of courses that a student still needs to take
	coursesLeft = courses; //sets coursesLeft to all of the courses they need
	
	//Removes all the courses that the student has already taken from coursesLeft
	for (var i = 0; i < takenCourses.length; i++)
	{
		coursesLeft.splice(coursesLeft.indexOf(takenCourses[i]), 1);		
	}
	
	//Removes all the courses that the student is eligibile to take from coursesLeft
	for (var i = 0; i < youCanTake.length; i++)
	{
		coursesLeft.splice(coursesLeft.indexOf(youCanTake[i]), 1);		
	}

	var txtCoursesLeft = document.getElementById("coursesLeft"); //txtCoursesLeft gets Textbox 4
	var leftText = ""; //String for output to Textbox 4
	
	/*
	Loops through the entire coursesLeft array and adds
	it to a string for output
	*/
	for(var i=0; i < coursesLeft.length; i++) 
	{
		if (i === coursesLeft.length - 1)
		{
			leftText += coursesLeft[i];
		}
		else
		{
			leftText += coursesLeft[i] + ", ";						
		}
	}
	txtCoursesLeft.innerHTML = leftText; //Outputs leftText string to Textbox 4
}

//gets classes you have proper prerequisites for (bad name, my apologies. functions purpose changed overtime)
function removeUselessClasses(arr)
{	
	var adj = []; //variable for local adjacency matrix
	var courses = []; //variable for local course list
	
	/*
	sets local adjacency matrix to adjCS and local course list to CS when true
	and sets local adjacency matrix to adjCIS and local course list to CIS when false
	*/
	if (csisBool)
	{
		adj = adjCS;
		courses = cs;
	}
	else
	{
		adj = adjCIS;
		courses = cis;
	}
	
	/*
	This loop takes the youCanTake array and adds all the classes
	that have your class as a prerequsite listed
	*/
	for (var i = 0; i < arr.length; i++)
	{
		for (var j = 0; j < Math.sqrt(adj.length); j++)
		{
			if (index2d(adj, courses.indexOf(arr[i]), j))
			{
				if (youCanTake.indexOf(courses[j]) == -1) //This line ensures no course is added twice
				{
					youCanTake.push(courses[j]);
				}
			}			
		}
	}
	
	//Removes classes from youCanTake that have already been taken
	for (var i = 0; i < arr.length; i++)
	{
		if (youCanTake.indexOf(arr[i]) != -1)
		{
			youCanTake.splice(youCanTake.indexOf(arr[i]), 1);			
		}
	}
	
	/*
	Due to how the program is built(bug), youCanTake currently has any course
	that has courses you've taken as a prerequisite whether you have all of
	the courses prerequisites or not. However, my work around is to check
	each value in youCanTake and ensuring you have all of its prerequisites.
	If you don't add to toRemove and removes it.
	*/
	var toRemove = [];
	
	//"Removes" all classes where all prerequisites are not currently met
	for (var i = 0; i < youCanTake.length; i++)
	{
		for (var j = 0; j < Math.sqrt(adj.length); j++)
		{
			if (index2d(adj, j, courses.indexOf(youCanTake[i])))
			{
				if (arr.indexOf(courses[j]) === -1) //This line ensures that nothing is added twice
				{
					toRemove.push(youCanTake[i]);
				}
			}
		}
	}
	
	//Actually uses values in toRemove to remove values
	for (var i = 0; i < toRemove.length; i++)
	{
		youCanTake.splice(youCanTake.indexOf(toRemove[i]), 1);
	}
}

/*
Splits course prefixes from course numbers
if pref is true, it returns the prefixes
if pref is false, it returns the course numbers
*/
function splitPrefixFromNumber(arr, pref)
{
	var newArr = []; //new Array for prefixes or course numbers
	
	if (pref)
	{
		//Removes all course prefixes from each element and adds to new Array
		for (var i = 0; i < arr.length; i++)
		{
			if (isCourse(arr[i], "CS"))
			{
				newArr.push("CS");
			}
			else if (isCourse(arr[i], "CIS"))
			{
				newArr.push("CIS");				
			}
			else if (isCourse(arr[i], "MATH"))
			{
				newArr.push("MATH");				
			}
			else if (isCourse(arr[i], "PHIL"))
			{
				newArr.push("PHIL");				
			}
			else if (isCourse(arr[i], "RPW"))
			{
				newArr.push("RPW");				
			}
			else if (isCourse(arr[i], "ACCT"))
			{
				newArr.push("ACCT");				
			}
			else if (isCourse(arr[i], "ECON"))
			{
				newArr.push("ECON");				
			}
			else if (isCourse(arr[i], "LAW"))
			{
				newArr.push("LAW");				
			}
			else if (isCourse(arr[i], "MKT"))
			{
				newArr.push("MKT");				
			}
			else if (isCourse(arr[i], "COMM"))
			{
				newArr.push("COMM");				
			}
			else
			{
				alert("ERROR WITH SPLITTING PREFIX!");
			}
		}
		return newArr;
	}
	
	for (var i = 0; i < arr.length; i++)
	{
		//Removes all course numbers from each element and adds to new Array
		if (isCourse(arr[i], "CS"))
		{
			newArr.push(arr[i].substring(2, arr[i].length));
		}
		else if (isCourse(arr[i], "CIS"))
		{
			newArr.push(arr[i].substring(3, arr[i].length));
		}
		else if (isCourse(arr[i], "MATH"))
		{
			newArr.push(arr[i].substring(4, arr[i].length));		
		}
		else if (isCourse(arr[i], "PHIL"))
		{
			newArr.push(arr[i].substring(4, arr[i].length));	
		}
		else if (isCourse(arr[i], "RPW"))
		{
			newArr.push(arr[i].substring(3, arr[i].length));	
		}
		else if (isCourse(arr[i], "ACCT"))
		{
			newArr.push(arr[i].substring(4, arr[i].length));	
		}
		else if (isCourse(arr[i], "ECON"))
		{
			newArr.push(arr[i].substring(4, arr[i].length));
		}
		else if (isCourse(arr[i], "LAW"))
		{
			newArr.push(arr[i].substring(3, arr[i].length));
		}
		else if (isCourse(arr[i], "MKT"))
		{
			newArr.push(arr[i].substring(3, arr[i].length));
		}
		else if (isCourse(arr[i], "COMM"))
		{
			newArr.push(arr[i].substring(4, arr[i].length));	
		}
		else
		{
			alert("ERROR WITH SPLITTING NUMBER!");
		}
	}
	return newArr;
}

//Determines if a course's prefix is equal to a specific prefix
function isCourse(course, prefix)
{
	if (course.substring(0, prefix.length) === prefix)
	{
		return true;
	}
	else
	{
		return false;
	}
}


/*
Code taken from: Prof. Corser
with minor alterations.
Code for displaying All Courses Needed
*/
function displayCoursesNeeded()
{
	if (document.getElementById("csRadio").checked)
	{
		// insert CS courses into textarea (id="allCoursesNeeded")
		var allCourses = document.getElementById("allCoursesNeeded");
		var allCoursesText = "";
		for(var i=0; i<cs.length; i++) 
		{
			if (i === cs.length - 1)
			{
				allCoursesText += cs[i];
			}
			else
			{
				allCoursesText += cs[i] + ", ";						
			}

		}
		allCourses.innerHTML = allCoursesText;
		
		csisBool = true;
	}
	else if (document.getElementById("cisRadio").checked)
	{
		// insert CIS courses into textarea (id="allCoursesNeeded")
		var allCourses = document.getElementById("allCoursesNeeded");
		var allCoursesText = "";
		for(var i=0; i<cis.length; i++) 
		{
			if (i === cis.length - 1)
			{
				allCoursesText += cis[i];
			}
			else
			{
				allCoursesText += cis[i] + ", ";						
			}
		}
		allCourses.innerHTML = allCoursesText;
		
		csisBool = false;
	}
}
/*
Code taken from: Prof. Corser.
Code for making requests to the API and populating Textbox 2
with the data.
*/
function populateCourses()
{
	courseArray = [];
	xmlhttp = new Array(coursePrefixes.length);

	for (var i = 0; i < coursePrefixes.length; i++)
	{
		xmlhttp[i] = new XMLHttpRequest();
		var url = "https://api.svsu.edu/courses?prefix=" + coursePrefixes[i] + "&courseNumber=" + courseNumbers[i];
		
		xmlhttp[i].onreadystatechange = function(index) {
		return function() {
				if (xmlhttp[index].readyState == 4 && xmlhttp[index].status == 200) {
					var myArr = JSON.parse(xmlhttp[index].responseText);
					
					for(var m = 0;m < myArr.courses.length; m++)
					{
						courseArray.push(myArr.courses[m]);
					}
					myFunction(courseArray);
				}
			};
		}(i);

		xmlhttp[i].open("GET", url, true);
		xmlhttp[i].send();
	}	
}


function myFunction(arr, newText) {
	newText = "";
	for(var i = 0; i < arr.length; i++) {
		var id02 = document.getElementById("id02");
		newText 
			+= arr[i].prefix + " " 
			+ arr[i].courseNumber + " " 
			+ arr[i].term + " " 
			+ arr[i].meetingTimes[0].days + " " 
			+ arr[i].meetingTimes[0].startTime + "\n";
			
		id02.innerHTML = newText;
	}
}

