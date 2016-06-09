$( document ).ready(function(){
//slides chapter 15, slide 06
var oneDie ={
	color: "FF0000",
	faces: [1,2,3,4,5,6]
}
console.log(oneDie.color);
console.log(oneDie.faces[3]);
function Die(col){
	this.color = col;
	this.faces = [1,2,3,4,5,6];
	
	this.randomRoll = function () {
		var randNum = Math.floor((Math.random() * this.faces.length)+1);
		return this.faces[randNum - 1];
	};
}
var oneDie = new Die("0000FF");
console.log(oneDie.color);
console.log(oneDie.randomRoll() + " was rolled.");

Die.prototype.randomRoll2 = function(){
		var randNum = Math.floor((Math.random() * this.faces.length)+1);
		return this.faces[randNum - 1];
};
console.log(oneDie.randomRoll2() + " was rolled.")

console.log("Second Die:")
var twoDie = new Die("00FF00");
console.log(twoDie.color);
console.log(twoDie.randomRoll() + " was rolled.");

String.prototype.countChars = function (c) {
	var count = 0;
	for (var i=1; i<this.length; i++){
		if (this.charAt(i) == c)count++;
		}
	return count;
}
//theses two lines are the same
console.log(document.getElementById("topic1").innerHTML);
console.log($("#topic1").text());

console.log($("h1:first-child").text());

var singleElement=$("topic1");
console.log(singleElement);

var multipleElements = $("h1");
console.log(multipleElements);

$("h1:first-child").css("color","red");
$("h1:first-child").text("TOPIC ONE!");
$("ul li").css("color","green");


//Conversion form.
$("#Celsius").keyup(function() {
	$("#Farenheit").val($("#Celsius").val() * 1.8 + 32);
});
$("#Farenheit").keyup(function() {
	$("#Celsius").val(($("#Farenheit").val() - 32) / 1.8);
});

$("[type='text']").css("color","orange");
$("ol li+").css("background-color","yellow");

var chk = $(".meh");
console.log(chk.prop("checked")); 
console.log(chk.attr("checked")); 
chk.attr("checked", false);  
console.log(chk.prop("checked")); 
console.log(chk.attr("checked")); 

});
function convert() {
	console.log($("#Celsius").val())
	return 0;
};
