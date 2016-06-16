$(document).ready(function() {
	//animating the body when page loads.
	Animate("flipInY","body");
	//Array that holds 10 CS classes.
	classesArr = ["CS 105", "MATH 300", "CS 116", "CS 216", "CS 245", "MATH 161", "MATH 140","MATH 223", "COMM 105A", "RPW 304"];
	//populating the Courses list with classes objects.
	for(var i=0;i < classesArr.length; i++)
	{
		var elementToAdd = "<li class='ui-state-default draggableClass'>" + classesArr[i] + "</li>";
		$(".Courses").append(elementToAdd);
	};
});

// making sortableItem class connected and able to drag and drop with connectedSortable class.
$(function() {
		$( ".sortableItem" ).sortable({
		  connectWith: ".connectedSortable"
		}).disableSelection();
});

// custom function that animates specefic element.
function Animate(x,element) {
			$(element).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			  $(this).removeClass();
			});
		  };