			var coursePrefixes = ["CS","CIS","MATH","COMM","RPW","PHIL","ACCT","ECON","LAW","MGT","MKT"];
			// Initialize array of http requests
			var requests = new Array(coursePrefixes.length);
			
			allCoursesArr = [];
			for (var i = 0; i < coursePrefixes.length; i++) {
				requests[i] = new XMLHttpRequest();

				
				// Specify Callback function
				requests[i].onreadystatechange = function(index) {
					return function () {
					if (requests[index].readyState == 4 && requests[index].status == 200) {
						var myArr = JSON.parse(requests[index].responseText);
						myFunction(myArr);
						myFunction2(myArr);
					}
				}
			}(i);

				var url = "https://api.svsu.edu/courses?prefix=" + coursePrefixes[i];
				// Execute requests
				requests[i].open("get", url, true);
				requests[i].send();
		}
			
			function cisRequired() {
				// courses for CIS
				var cisReqCourses = ["CS 245", "MATH 120B", "COMM 105A", "RPW 304", "ACCT 213",
				"ECON 221", "LAW 308", "MGT 321", "MKT 331", "PHIL 205A!", "PHIL 210B",
				"CS 105", "CS 116", "CS 146", "CS 216", "CIS 255", "CIS 301", "CIS 311",
				"CIS 333", "CIS 355", "CIS 366", "CIS 386", "CIS 386", "CIS 422", "CS 345",
				"CIS 357", "CIS 371", "CIS 425", "CIS 486", "CIS 490"];
				cisReqCourses.toString();
				document.getElementById("reqPrint").innerHTML = cisReqCourses;
			}
			
			function csRequired() {
				// courses for CS
				var csReqCourses = ["CS 105", "MATH 300", "CS 116", "CS 216", "CS 245", "MATH 161",
				"MATH 223", "COMM 105A", "RPW 304", "PHIL 205A!", "PHIL 210B", "CS 146",
				"CS 316", "CS 331", "CS 401", "CS 411", "CS 421", "CS 446", "CS 451", "CS 461"
				, "CS 471", "CIS 255", "CIS 355", "CIS 357", "CIS 311", "CS 345", "CS 403",
				"CS 431", "CS 476", "CS 482", "CS 490"];
				csReqCourses.toString();
				document.getElementById("reqPrint").innerHTML = csReqCourses;
				}
			
			function determineCourses() {
				

			}
			
			function preReq() {
				
			}

			function myFunction(arr) {
				var out = "";
				var i;
				for(i = 0; i < arr.courses.length; i++) {
					if (arr.courses[i].prefix == "COMM" && arr.courses[i].courseNumber != "105A")
						{continue;}
					if (arr.courses[i].prefix == "RPW" && arr.courses[i].courseNumber != "304")
						{continue;}
					if (arr.courses[i].prefix == "PHIL" && (arr.courses[i].courseNumber != "205A!" && arr.courses[i].courseNumber != "210B"))
						{continue;}
					if (arr.courses[i].prefix == "ACCT" && arr.courses[i].courseNumber != "213")
						{continue;}
					if (arr.courses[i].prefix == "ECON" && arr.courses[i].courseNumber != "221")
						{continue;}
					if (arr.courses[i].prefix == "LAW" && arr.courses[i].courseNumber != "308")
						{continue;}
					if (arr.courses[i].prefix == "MGT" && arr.courses[i].courseNumber != "321")
						{continue;}
					if (arr.courses[i].prefix == "MKT" && arr.courses[i].courseNumber != "331")
						{continue;}
					if (arr.courses[i].prefix == "MATH" && arr.courses[i].courseNumber != "120B"
						&& arr.courses[i].courseNumber != "161" && arr.courses.courseNumber != "223"
						&& arr.courses[i].courseNumber != "300")
						{continue;}
					
					var newP = document.createElement("option");
					newP.setAttribute("value", i);
					var newText 
						= document.createTextNode(arr.courses[i].prefix + " " 
						+ arr.courses[i].courseNumber + " " 
						+ arr.courses[i].term + " " 
						+ arr.courses[i].meetingTimes[0].days + " " 
						+ arr.courses[i].meetingTimes[0].startTime + " " 
						+ arr.courses[i].meetingTimes[0].instructor); 
					document.getElementById("id01").appendChild(newP);
					newP.appendChild(newText);
					// out += arr.courses[i].prefix + " " + arr.courses[i].courseNumber + "<br />";
				}
				// document.getElementById("id01").innerHTML = out;
			}
			
			function myFunction2(arr) {
				var out = "";
				var i;
				for(i = 0; i < arr.courses.length; i++) {
					if (arr.courses[i].prefix == "COMM" && arr.courses[i].courseNumber != "105A")
						{continue;}
					if (arr.courses[i].prefix == "RPW" && arr.courses[i].courseNumber != "304")
						{continue;}
					if (arr.courses[i].prefix == "PHIL" && (arr.courses[i].courseNumber != "205A!" && arr.courses[i].courseNumber != "210B"))
						{continue;}
					if (arr.courses[i].prefix == "ACCT" && arr.courses[i].courseNumber != "213")
						{continue;}
					if (arr.courses[i].prefix == "ECON" && arr.courses[i].courseNumber != "221")
						{continue;}
					if (arr.courses[i].prefix == "LAW" && arr.courses[i].courseNumber != "308")
						{continue;}
					if (arr.courses[i].prefix == "MGT" && arr.courses[i].courseNumber != "321")
						{continue;}
					if (arr.courses[i].prefix == "MKT" && arr.courses[i].courseNumber != "331")
						{continue;}
					if (arr.courses[i].prefix == "MATH" && arr.courses[i].courseNumber != "120B"
						&& arr.courses[i].courseNumber != "161" && arr.courses.courseNumber != "223"
						&& arr.courses[i].courseNumber != "300")
						{continue;}
					
					var newP = document.createElement("option");
					newP.setAttribute("value", i);
					var newText 
						= document.createTextNode(arr.courses[i].prefix + " " 
						+ arr.courses[i].courseNumber + " " 
						+ arr.courses[i].term + " " 
						+ arr.courses[i].meetingTimes[0].days + " " 
						+ arr.courses[i].meetingTimes[0].startTime + " " 
						+ arr.courses[i].meetingTimes[0].instructor); 
					document.getElementById("id02").appendChild(newP);
					newP.appendChild(newText);
					// out += arr.courses[i].prefix + " " + arr.courses[i].courseNumber + "<br />";
				}
				// document.getElementById("id01").innerHTML = out;
			}
//		<select id="id02"><option value="0">CS 101 16/FA TR 02:30 PM ryerion</option><option value="1">CS 101 16/WI TR 01:00 PM ryerion</option><option value="2">CS 101 17/WI TR 01:00 PM ryerion</option><option value="3">CS 105 16/FA T 10:30 AM staff1</option><option value="4">CS 105 16/WI MW 02:30 PM mislam14</option><option value="5">CS 105 17/WI MW 02:30 PM staff1</option><option value="6">CS 105 16/WI MW 12:30 PM mislam14</option><option value="7">CS 105 17/WI MW 12:30 PM cmdewey</option><option value="8">CS 105 16/FA MW 10:30 AM cmdewey</option><option value="9">CS 105 16/WI TR 02:30 PM jmzito</option><option value="10">CS 105 16/SU M 08:00 AM cmdewey</option><option value="11">CS 105 16/FA undefined undefined jmzito</option><option value="12">CS 105 17/WI undefined undefined jmzito</option><option value="13">CS 116 16/FA MW 10:30 AM bidgoli</option><option value="14">CS 116 16/WI TR 08:30 AM gpcorser</option><option value="15">CS 116 17/WI TR 08:30 AM cmdewey</option><option value="16">CS 116 16/FA TR 08:30 AM bidgoli</option><option value="17">CS 116 16/WI MW 12:30 PM gpcorser</option><option value="18">CS 116 17/WI MW 12:30 PM gpcorser</option><option value="19">CS 146 16/FA M 07:00 PM rbeyers</option><option value="20">CS 146 16/WI TR 04:30 PM rbeyers</option><option value="21">CS 146 17/WI TR 04:30 PM rbeyers</option><option value="22">CS 146 16/FA MW 12:30 PM nas</option><option value="23">CS 146 16/WI MW 10:00 AM nas</option><option value="24">CS 146 17/WI MW 08:30 AM nas</option><option value="25">CS 146 16/FA TR 04:30 PM rbeyers</option><option value="26">CS 146 16/WI T 07:00 PM rbeyers</option><option value="27">CS 146 17/WI T 07:00 PM rbeyers</option><option value="28">CS 146 16/SU TR 08:00 AM icho</option><option value="29">CS 150 16/FA W 09:30 AM mdstackh</option><option value="30">CS 150 16/WI T 10:30 AM ryerion</option><option value="31">CS 150 17/WI T 12:30 PM staff1</option><option value="32">CS 150 16/FA W 08:30 AM mdstackh</option><option value="33">CS 150 16/WI T 11:30 AM jmzito</option><option value="34">CS 150 17/WI T 01:20 PM staff1</option><option value="35">CS 160 16/FA TR 01:00 PM staff1</option><option value="36">CS 160 16/WI MW 08:30 AM cmdewey</option><option value="37">CS 160 17/WI MW 08:30 AM ryerion</option><option value="38">CS 160 16/WI TR 11:30 AM cmdewey</option><option value="39">CS 160 17/WI TR 11:30 AM mdstackh</option><option value="40">CS 160 16/SU T 12:30 PM krahman</option><option value="41">CS 160 16/FA undefined undefined eschenk</option><option value="42">CS 160 16/WI undefined undefined eschenk</option><option value="43">CS 160 17/WI undefined undefined eschenk</option><option value="44">CS 160 16/FA undefined undefined eschenk</option><option value="45">CS 216 16/FA MW 08:30 AM staff1</option><option value="46">CS 216 16/WI MW 10:30 AM krahman</option><option value="47">CS 216 17/WI MW 10:30 AM krahman</option><option value="48">CS 232 16/FA TR 12:30 PM cmdewey</option><option value="49">CS 233 17/WI TR 08:30 AM gpcorser</option><option value="50">CS 245 16/FA T 10:30 AM krahman</option><option value="51">CS 245 16/SU MW 12:30 PM krahman</option><option value="52">CS 316 16/FA MW 12:30 PM krahman</option><option value="53">CS 331 16/WI MW 08:30 AM mislam14</option><option value="54">CS 331 17/WI MW 08:30 AM staff1</option><option value="55">CS 333 16/FA MW 08:30 AM krahman</option><option value="56">CS 345 16/SP T 08:00 AM james</option><option value="57">CS 401 16/FA TR 10:30 AM staff1</option><option value="58">CS 403 16/FA MW 02:30 PM gpcorser</option><option value="59">CS 411 16/WI MW 02:30 PM grmcnish</option><option value="60">CS 411 17/WI MW 02:30 PM staff1</option><option value="61">CS 421 16/FA TR 12:30 PM icho</option><option value="62">CS 433 17/WI TR 12:30 PM krahman</option><option value="63">CS 434 16/FA T 03:00 PM staff1</option><option value="64">CS 446 16/WI TR 10:30 AM krahman</option><option value="65">CS 446 17/WI TR 10:30 AM krahman</option><option value="66">CS 451 16/WI MW 10:30 AM icho</option><option value="67">CS 451 17/WI MW 08:30 AM icho</option><option value="68">CS 461 16/FA TR 08:30 AM gpcorser</option><option value="69">CS 471 16/WI MW 12:30 PM icho</option><option value="70">CS 471 17/WI MW 12:30 PM icho</option></select>