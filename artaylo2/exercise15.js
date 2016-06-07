$().ready(function() {
// slides:ch15 slide 6
var oneDie = {color: "FF0000",
			faces: [1,2,3,4,5,6]
}
console.log(oneDie.color);
console.log(oneDie.faces[3]);

function Die(col) {
		this.color=col;
		this.faces=[1,2,3,4,5,6];
		
		// define method randomRoll as an anonymous function
		this.randomRoll = function() {
			var randNum = Math.floor((Math.random() * this.faces.length)+ 1);
			return this.faces[randNum-1];
		}
}
var oneDie = new Die("0000FF");
console.log(oneDie.color);
console.log(oneDie.randomRoll() + " was rolled");

Die.prototype.randomRoll2 = function()	{
	var randNum = Math.floor((Math.random() * this.faces.length)+ 1);
	return this.faces[randNum-1];
}
console.log(oneDie.randomRoll2() + " was rolled");

console.log("second die...")
var twoDie = new Die("00FF00");
console.log(twoDie.color);
console.log(twoDie.randomRoll() + " was rolled");

// --------------------------slide 17------------------------------
String.prototype.countChars = function (c){
	var count=0;
	for (var i=0; i<this.length; i++) {
		if (this.charAt(i) == c)
			count++;
	}
	return count;
}
var hel = new String("Hello");
console.log(hel.countChars("l"));

console.log(document.getElementById("topic1").innerHTML);
console.log($("#topic1").text());
console.log($("#h1").text());

var singleElement = $("#topic1");
console.log(singleElement);

var multipleElements = $("#h1");
console.log(multipleElements);

// ---------------------jquery changes styling-----------------------
$("h1:first-child").css("color","red");
$("h1:first-child").text("TOPIC 1!!!!!!!!!!");
$("ul li").css("color","green");

$("#celsius").keyup(function() {
	//alert("Handler for .keyup() called.");
	console.log($("#celsius").val());
	$("#Fahrenheit").val($("#celsius").val() * 1.8 + 32);
});

//calculation wrong 
$("#Fahrenheit").keyup(function() {
	//alert("Handler for .keyup() called.");
	console.log($("#Fahrenheit").val());
	$("#celsius").val($("#Fahrenheit").val() -32 / 1.8);
});

/* does not work
function convert() {
	console.log($("#celsius").val());
};
*/

$("[type = 'text']").css("color","orange");

// make background yellow on link if hovering over
$("a:hover").css("background-color","red");


});

$("a href:hover").css("background-color","yellow");

$("ol li+").css("background-color","yellow");

var jack = $(".jack");
jack.prop("hidden");


var theBox = $(".meh");
theBox.prop("checked");
theBox.attr("checked");a

