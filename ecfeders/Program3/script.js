$(document).ready(function() {
	//All Functions Are From This URL:
	// http://stackoverflow.com/questions/1452866/jquery-drag-and-drop-elements-from-list-into-separate-blocks
	// Modified to match my html
	//Set up the dragables to be able to be dragged, move with cursor
	$('.box-item').draggable({
		cursor: 'move',
		helper: "clone"
	});
	
	//Container 1 contains the dragables so this selects the container and sets up
	// the drop function by getting the itemid then selecting the item append it to the 
	//container it is drop in. This panel is like the other panels it just holds the items
	// but items can be dropped into this panel also.
	$("#container1").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container1");
		}
		});
	}
	});
	
	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container2").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container2");
		}
		});
	}
	});

	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container3").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container3");
		}
		});
	}
	});

	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container4").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container4");
		}
		});
	}
	});
	
	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container5").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container5");
		}
		});
	}
	});
	
	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container6").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container6");
		}
		});
	}
	});
	
	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container7").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container7");
		}
		});
	}
	});
	
	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container8").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container8");
		}
		});
	}
	});
	
	//Each droppable container has their droppable attribute set up for dragable objects.
	//This sets up the drop with a function that sets the attr to a itemid variable.
	// From there for each item dragged it runs an if statment, this attr equals itemid
	// Append it to the container allowing it to be dropped.
	$("#container9").droppable({
	drop: function(event, ui) {
		var itemid = $(event.originalEvent.toElement).attr("itemid");
		$('.box-item').each(function() {
		if ($(this).attr("itemid") === itemid) {
			$(this).appendTo("#container9");
		}
		});
	}
	});

});