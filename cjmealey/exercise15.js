$( document ).ready(function() {

// JavaScript Document
var oned6={color: "FF0000",faces: [1,2,3,4,5,6]};
console.log(oned6.color);
console.log(oned6.faces[3]);









// DICE PSUEDOCLASS FUNCTIONS
	// function "d4" acts as psuedoclass
	function d4(col)
	{
		this.color=col;
		this.faces=[1,2,3,4];
		this.randomRoll=function(){
			var randNum=Math.floor((Math.random()*this.faces.length)+1);
			return this.faces[randNum-1];};
	}
			
	function d6(col)
	{
		this.color=col;
		this.faces=[1,2,3,4,5,6];
		this.randomRoll=function(){
			var randNum=Math.floor((Math.random()*this.faces.length)+1);
			return this.faces[randNum-1];};
	}
	
	// "proto" function -- auto included in every new d6
		d6.prototype.randomRoll2=function(){
			var randNum=Math.floor((Math.random()*this.faces.length)+1);
			return this.faces[randNum-1];};
			
			
	function d8(col)
	{
		this.color=col;
		this.faces=[1,2,3,4,5,6,7,8];
		this.randomRoll=function(){
			var randNum=Math.floor((Math.random()*this.faces.length)+1);
			return this.faces[randNum-1];};
	}
			
	function d10(col)
	{
		this.color=col;
		this.faces=[1,2,3,4,5,6,7,8,9,10];
		this.randomRoll=function(){
			var randNum=Math.floor((Math.random()*this.faces.length)+1);
			return this.faces[randNum-1];};
	}
	
	
	
	
	
	
	
// THE FORBIDDEN PROTOTYPE IN STRING CLASS DO NOT TRY AT HOME
	String.prototype.countChars=function (c){
		var count=0;for(var i=0;i<this.length;i++){if(this.charAt(i) === c){count++;}}return count;
	};
	
	var hel = new String("Hello World");
	console.log("hel chCount = " + hel.countChars("l"));	
// THE FORBIDDEN PROTOTYPE IN STRING CLASS DO NOT TRY AT HOME
	
	
	
	
	
	
	
var singleElement = $("#topic01");
console.log(singleElement);
var multipleElements = $("h1");
console.log(multipleElements);

$("h1:first-child").css("color","red");
$("h1:first-child").text("TOPIC ONE!!!!");
$("ul li").css("color","green");
	
	
	
	
	
	
	

//RANDOM OUTPUTS 
	oned6=new d6("0000FF");
	var twod6=new d6("00FF00");
	
	console.log(oned6.color);
	console.log(oned6.randomRoll() + " was rolled");
	console.log(oned6.randomRoll2() + " was rolled from RR2");
	console.log(twod6.randomRoll2() + " was rolled from 2D.RR2");
	
	console.log(document.getElementById("topic01").innerHTML);
	
	console.log($("#topic01").text());
	console.log($("h1").text());








// WEATHER CODE

	$("#Celsius").keyup	(function() {
		console.log($("#Celsius").val());
		$("#Fahrenheit").val($("#Celsius").val() * 1.8 + 32);
	});
	
	$("#Fahrenheit").keyup	(function() {
		console.log($("#Fahrenheit").val());
		$("#Celsius").val(($("#Fahrenheit").val() - 32) * 0.556);
	});
		
		
		
		
		

// Hover code from W3S

	$("a").hover(function()
	{
		$(this).css("background-color", "yellow");
		}, function(){
		$(this).css("background-color", "white");
	});
		
		
		
		
$("[type='text']").css("color", "orange");
$("ol li+").css("background-color", "yellow");


var chk = $(".meh");
console.log(chk.prop("checked"));
console.log(chk.attr("checked"));
chk.attr("checked", false);
console.log(chk.prop("checked"));
console.log(chk.attr("checked"));


});









function convert()
{
	console.log($("Celsius").val());
}
	
$("a:hover").css("background-color","yellow");

