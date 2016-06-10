$( document ).ready(function() {

//object literal
var oneDie ={
	color: "FF0000",
	faces: [1,2,3,4,5,6]
};

console.log(oneDie.color);
console.log(oneDie.faces[3]);

//good way to make objects.
function Die(col){
	this.color=col;
	this.faces=[1,2,3,4,5,6];
	this.randomRoll = function (){
		var randNum = Math.floor((Math.random() * this.faces.length) + 1);
		return this.faces[randNum-1];
	}
}

var oneDie = new Die("CC0000");

console.log(oneDie.color);
console.log(oneDie.faces[3]);
console.log(oneDie.randomRoll() + " was rolled"); 

//intialize this prototype on the fly !!!
Die.prototype.randomRoll2 = function (){
		var randNum = Math.floor((Math.random() * this.faces.length) + 1);
		return this.faces[randNum-1];
	}
console.log(oneDie.randomRoll2() + " was rolled");



var twoDie = new Die("FF0660");

console.log(twoDie.color);
console.log(twoDie.faces[3]);
console.log(twoDie.randomRoll() + " was rolled");

String.prototype.countChars = function (c){
	var count = 0;
	for (var i =0;i < this.length;i++){
		if(this.charAt(i) == c) count++;
	}
	return count;
}


var hel = new String("Hello");

console.log(hel.countChars("l") + " Chars");




	/*JQ*/
	/*
	window.onload = function() {
	 
		alert( "welcome" );
	 
	};
	*/


 
    $( "#para01" ).click(function( event ) {
		$this = $(this);
        //alert( "I'm para01, thanks for clicking me!!!" );
		$this.append(' wow I got added');
    });
	console.log(document.getElementById('topic1').innerHTML);
	console.log($("#topic1").text());
	
	var singleElement = $("#topic1");
	console.log(singleElement);
	var multipleElements = $("h1");
	console.log(multipleElements);
	
	$("h1:first-child").css("color","red");
	$("ul li").css("color","green");
	$("h1:first-child").text("topic ONE!");
	
	
    $( "#cel" ).keyup(function( event ) {
		$this = $(this);
		var converted = $("#cel").val() * 1.8 + 32;
		$("#feh").val(converted);
		console.log("logging function " + $("#cel").val());
    });
    $( "#feh" ).keyup(function( event ) {
		$this = $(this);
		var converted = ($("#feh").val()- 32) / 1.8 ;
		$("#cel").val(converted);
		console.log("logging function " + $("#feh").val());
    });
	/*
    $( "a" ).hover(
	function( event ) {
		$this = $(this);
		$this.css("background-color","yellow");
    },
	function( event ) {
		$this = $(this);
		$this.css("background-color","pink");
    }
	);
	$( ":link" ).css("background-color","yellow");
	$("[type='text']").css("color","blue");
	*/
	
	$("ol li+").css("background-color","grey");
	
	var meh = $(".meh");
	
	meh.attr("checked",false);
	
	console.log(meh.attr("checked"));
	
	console.log("I did everything 'and more', but missed some logs here....");
});

$( "a:hover" ).css("background-color","yellow");