$( document ).ready(function() {
	//Slides ch15 Slide 6
	var oneDie = {
			color: "FF0000",
			faces: [1, 2, 3, 4, 5, 6]
	}
	console.log(oneDie.color);
	console.log(oneDie.faces[3]);

	function Die(col) {
		this.color = col;
		this.faces = [1, 2, 3, 4, 5, 6];
		this.randomRoll = function (){
			var randNum = Math.floor((Math.random() * this.faces.length)+ 1);
			return this.faces[randNum-1];
		};
	}

	var oneDie = new Die("0000FF");
	console.log(oneDie.color);
	console.log(oneDie.randomRoll() + " was rolled");

	Die.prototype.randomRoll2 = function (){
			var randNum = Math.floor((Math.random() * this.faces.length)+ 1);
			return this.faces[randNum-1];
		};
	console.log(oneDie.randomRoll2() + " was rolled");

	console.log("second die.....................")
	var twoDie = new Die("00FF00");
	console.log(twoDie.color);
	console.log(twoDie.randomRoll() + " was rolled");

	String.prototype.countChars = function(c) {
		var count = 0;
		for(var i = 0; i < this.length; i++){
			if(this.charAt(i) == c){
				count++;
			}
		}
		return count;
	}

	var hel = new String("Hello");
	console.log(hel.countChars("l"));

	console.log(document.getElementById("topic1").innerHTML);
	
	console.log($("#topic1").text());
	
	console.log($("#topic1").text());
	
	var singleElement = $("#topic1");
	console.log(singleElement);
	
	var multipleElements = $("h1");
	console.log(multipleElements);
	
	$("h1:first-child").css("color","orange");
	$("h1:first-child").text("TOPIC ONE!!!!");
	$("ul li").css("color","green");
	$("ol li").css("color","aqua");
	
	$("#Celsius").keyup	(function() {
		console.log($("#Celsius").val());
		$("#Fahrenheit").val($("#Celsius").val() * 1.8 + 32);
	});
	
	$("#Fahrenheit").keyup	(function() {
		console.log($("#Celsius").val());
		$("#Celsius").val($("#Fahrenheit").val() * .556 + 32);
	});
	
	$("[type='text']").css("color","orange");
	
	
	$("a").hover(function(){
		$(this).css("background-color", "yellow");
		}, function(){
		$(this).css("background-color", "white");
	});
	
	
	$("ul li+").css("background-color", "aqua");
	$("ol li+").css("background-color", "purple");
	
	var chk = $(".meh");
	console.log(chk.prop("checked"));
	console.log(chk.attr("checked"));
	chk.attr("checked", false);
	console.log(chk.prop("checked"));
	console.log(chk.attr("checked"));
	
    $("body").click(function(){
        $(this).hide();
	});
});

function convert1() {
	console.log($("#Celsius").val());
};
convert1();
$("a:hover").css("background-color","yellow");

var hoverlinks = $("a:hover");
