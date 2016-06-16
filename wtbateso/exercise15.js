$( document ).ready(function() {
	// slides: ch15, slide06
	var oneDie = {
		color: "FF0000",
		faces: [1, 2, 3, 4, 5, 6]
	}
	console.log(oneDie.color);
	console.log(oneDie.faces[3]);

	function Die(col) {
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

	Die.prototype.randomRoll2 = function (){
			var randNum = Math.floor((Math.random() * this.faces.length) + 1);
			return this.faces[randNum - 1]
	};
	console.log(oneDie.randomRoll2() + " was rolled");

	console.log("second die...");
	var twoDie = new Die("00FF00");
	console.log(twoDie.color);
	console.log(twoDie.randomRoll() + " was rolled")

	String.prototype.countChars = function (c) {
		var count = 0;
		for (var i = 0; i < this.length; i++) {
			if (this.charAt(i) == c) count++;
		}
		return count;
	}
	var hel = new String("Hello");
	console.log(hel.countChars("l"));

	// output: Topic 1 (heading)
	console.log(document.getElementById("topic1").innerHTML);

	// output: Topic 1 (heading)
	console.log($("#topic1").text());

	// output: Topic 1 (heading)
	console.log($("h1:first-child").text());

	var singleElement = $("#topic1");
	console.log(singleElement);

	var multipleElements = $("h1");
	console.log(multipleElements);

	$("h1:first-child").css("color","red");
	$("h1:first-child").text("TOPIC ONE!!!");
	$("ul li").css("color","green");

	$("#Celsius").keyup	(function() {
		// alert( "Handler for .keyup() called." );
		console.log($("#Celsius").val());
		$("#Fahrenheit").val($("#Celsius").val() * 1.8 + 32);
	});
	
	$("[type='text']").css("color","orange");
	
	$("ol li+").css("background-color","yellow");
	
	var chk = $(".meh");
	console.log(chk.prop("checked")); 
	console.log(chk.attr("checked")); 
	chk.attr("checked", false);  
	console.log(chk.prop("checked")); 
	console.log(chk.attr("checked")); 


}); // end ready function

function convert1() {
	console.log($("#Celsius").val());
};
convert1();
$("a:hover").css("background-color","yellow");

var hoverlinks = $("a:hover"); 



	