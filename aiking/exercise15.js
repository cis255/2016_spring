$().ready(function() {
//slides: ch15, ch16
var oneDie = {color: "FF0000",
			  faces: [1, 2, 3, 4, 5, 6]};
			  
console.log(oneDie.color);
console.log(oneDie.faces[3]);

function Die(col) {
	this.color=col;
	this.faces=[1, 2, 3, 4, 5, 6];
	this.randomRoll = function (){
		var randNum = Math.floor((Math.random() * this.faces.length) + 1);
		return this.faces[randNum-1];
	};
};
var oneDie = new Die("0000FF");
console.log("Second die...");
console.log(oneDie.color);
console.log(oneDie.randomRoll() + " was rolled");

var twoDie = new Die("00FF00");
console.log(twoDie.color);
console.log(twoDie.randomRoll() + " was rolled");

Die.prototype.randomRoll2 = function (){
		var randNum = Math.floor((Math.random() * this.faces.length) + 1);
		return this.faces[randNum-1];
	};
console.log(oneDie.randomRoll2() + " was rolled");

String.prototype.countCharacters = function (c) {
	var count = 0;
	for (var i=0;i<this.length;i++) {
		if (this.charAt(i) == c)
			count++;
	};
	return count;
};

var hi = new String("Hello");
console.log(hi.countCharacters("l"));

// The following two lines of code are the same:
console.log(document.getElementById("topic1").innerHTML);
console.log($("#topic1").text());

// CSS selectors are used in a similar way.
console.log($("h1:first-child").text());

// Selects a single element. The object is the element.
var singleElement = $("#topic1");
console.log(singleElement);

// Selects all the elements with the same tag. This is an array of elements.
var multipleElement = $("h1");
console.log(multipleElement);

// Modifies CSS in JQuery
$("h1:first-child").css("color", "red");
$("h1:first-child").text("TOPIC ONE!!!");
$("ul li").css("color", "green");


$("#C").keyup(function() {
	//alert("This is an alert");
	console.log($("#C").val());

	$("#F").val(
		$("#C").val() * 1.8 + 32
		);
	});
	
	$("#F").keyup(function() {
	//alert("This is an alert");
	console.log($("#F").val());

	$("#C").val(
		($("#F").val() - 32)*(5/9)
		);
	}); //End Ready Function

/*
This function is not working...
To make it work, it needs to be placed outside the ready function.
It's a scope problem.

function convert() {
	console.log($("#C").val());
	
	};
*/

//Brackets here mean type.
$("[type='text']").css("color", "orange");

});

//Make link background yellow if hovering. Doesn't work...
//Internet says that this is not possible in JQuery.
//$("a href:hover").css("background-color", "yellow");

$("ol li+").css("background-color", "yellow");

var zip = $(".zip");
zip.prop("hidden", true);


var merp = $(".meh");
merp.prop("checked");
merp.attr("checked", true);