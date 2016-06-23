$( document ).ready(function() {
//Slides From CH 15
var oneDie = {color: "FF0000", 
faces: [1,2,3,4,5,6]
 }
console.log(oneDie.color);
console.log(oneDie.faces[3]);

function Die(col) {
	this.color=col;
	this.faces=[1,2,3,4,5,6];
	this.randomRoll = function () {
		var randNum = Math.floor((Math.random() * this.faces.length) + 1);
		return this.faces[randNum -1]
	};
}

var oneDie = new Die("0000FF");

console.log(oneDie.color);
console.log(oneDie.randomRoll() + " was rolled");

Die.prototype.randomRoll2 = function () {
		var randNum = Math.floor((Math.random() * this.faces.length) + 1);
		return this.faces[randNum -1]
	};

console.log(oneDie.randomRoll2() + " was rolled");

console.log("second Die...");
var twoDie = new Die("00FF00")
console.log(twoDie.color);
console.log(twoDie.randomRoll() + " was rolled");


String.prototype.countChars =function (c) {
	var count = 0;
	for (var i=0; i < this.length;i++) {
		if(this.charAt(i) == c)
			count ++;
	}
	return count;
}

var hel =  new String("Hello");
console.log(hel.countChars("l"));
console.log(document.getElementById("topic1").innerHTML);

console.log($("#topic1").text());


console.log($("h1").text());

var singleElement = $("topic1");
console.log(singleElement);
var multipleElement = $("h1");
console.log(multipleElement);

//just stopped working???

$("h1:first-child").css("color","red");
$("h1:first-child").text("TOPIC ONE!!!");
$("ul li").css("color","green");
$("ol").css("background-color","yellow");


// not working ???
$("#Celsius").keyup(function () {
	console.log($("#Celsius").val());
	$("#Fahrenheit").val($("#Celsius").val() * 1.8 + 32)
});

$("[type='text']").css("color","orange");


$("a").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "white");
});
var zip = $(".meh");
zip.prop("checked");
zip.attr("checked", false);
console.log(zip.prop("checked"));
console.log(zip.attr("checked", false));
}); // end ready function

