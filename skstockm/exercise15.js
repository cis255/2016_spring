$().ready(function() {
//sliedes: ch 15 slide06
var oneDie = { color : "FF0000",
			   faces : [1,2,3,4,5,6]
};

console.log(oneDie.color);
console.log(oneDie.faces[3]);

function Die(col){
	this.color=col;
	this.faces=[1, 2, 3, 4, 5, 6];
	this.randomRoll = function (){
		var randNum = Math.floor((Math.random() * this.faces.length) + 1);
		return this.faces[randNum - 1];
	};
}

var oneDie = new Die("0000FF");
console.log(oneDie.color);
console.log(oneDie.randomRoll() + " was rolled");

//effects all Dice , prototype itself is an object
Die.prototype.randomRoll2 = function (){
	var randNum = Math.floor((Math.random() * this.faces.length) + 1);
	return this.faces[randNum - 1];
};


console.log(oneDie.randomRoll2() + " was rolled for randomRoll2");

console.log("second die...")
var twoDie = new Die("00FF00");
console.log(twoDie.color);
console.log(twoDie.randomRoll() + " was rolled");

//var hel = new String("Hello");
//console.log(hel.countChars("l"));

String.prototype.countChars = function (c){
	var count = 0;
	for (var i = 0; i < this.length; i++){
		if(this.charAt(i) == c)
			count++;
	}
	return count;
}

var hel = new String("Hello");
console.log(hel.countChars("l"));

console.log(document.getElementById("topic1").innerHTML);

//jquery in javascript  above line is same as below
console.log($("#topic1").text());

//there are 4 h1 so displays all
console.log($("h1").text());

//displays the first h1
console.log($("h1:first-child").text());

//element selector
var singleElement = $("#topic1");
console.log(singleElement);

//an array of objects which are elements, group element selector
var multipleElements = $("h1");
console.log(multipleElements);
$("h1:first-child").css("color", "red");
//text() is a getter and a setter
$("h1:first-child").text("TOPIC ONE!!");

//
$("ul li").css("color", "green");

$("#Celsius").keyup	(function() {
	// alert( "Handler for .keyup() called." );
	console.log($("#Celsius").val());
	$("#Fahrenheit").val($("#Celsius").val() * 1.8 + 32);
	//$("#Celsius").val(($("#Fahrenheit").val() - 32) / 1.8);
});

//brackets mean attribute  
$("[type='text']").css("color","orange");

/*
//make link background yellow if hovering
$("a").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
});
*/

//var zip = $(".zippy");
//zip.prop("hidden");

var theBox =$(".meh");
console.log(theBox.prop("checked"));
console.log(theBox.attr("checked"));
console.log(theBox.attr("checked", false));  //unchecks it  makes it undefined
console.log(theBox.prop("checked"));
console.log(theBox.attr("checked"));

});//end ready function

//$("a href:hover").css("background-color","yellow");

//would work
function convert() {
	console.log($("#Fahrenheit").val());
}

//+ means all the siblings excluding the one selected
$("ol li+").css("background-color","#7FFF00");

//var hoverlinks = $("a:hover");