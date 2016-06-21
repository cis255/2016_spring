$(document).ready(function() {
	// This is a listener.
	$("#readyMessage").text("Ready.");
	$(".zippydee").text("zippydoo");
	$("#timeDiv").load("currentTime.php");
	
	console.log($("body").html());
	
	$("#div1").html("<p>This is a paragraph</p>");
	console.log($("#v1").val());

	$("#input1").on("change", function() {
	 alert("The input was changed to " + $("#input1").val())
	});
	
	//Slide 44: Listing 15.8
	
	//Pure Javascript way
	var jsLink = document.createElement("a");
	jsLink.href = "http://www.funwebdev.com";
	jsLink.innerHTML = "JavaScript Way";
	jsLink.title = "JS";
	console.log(jsLink);
	
	//JQuery Way
	var jQueryLink = $("<a href='http://www.funwebdev.com' title ='jQuery'>JQuery Way</a>");
	console.log(jQueryLink);
	
	//JQuery Long-Form Way
	//var jQueryVerboseLink = 
	//jQueryVerboseLink.html("");
	
	$("#div2").append(jsLink);
	$("#div2").append("</br>")
	$("#div2").append(jQueryLink);
	
	//Wraps each individual piece into a div.
	$("a").wrap("<div class='galleryLink' />");
	
	//$("#timeDiv").load("http://api.svsu.edu/courses?prefix=CIS&courseNumber=255");
	
	var jqxhr = $.get("currentTime.php");
	console.log(jqxhr.status);
	var jqxhr = $.post("currentTime.php");
	console.log(jqxhr.status);
	
	//Ajax
	
	//JQuery Animation
	$("#p1").click(function(){
		$(this).hide();
	});
	
	$("#div2").click(function() {
		$(this).hide(3000);
	});
	
	$(".zippydee").click(function() {
		$("#p1").show();
		$("#div2").show(3000);
	});
	
	$("#toggle").click(function() {
		$(this).fadeToggle(3000);
	});
	
	$("#animate").click(function() {
		$(this).animate( {left: 300, opacity: .5, 'font-size': "20px", width: 300}, 2000, "easeInQuad" );
		$(this).click(function() {
			$(this).animate( {left: 300, opacity: 1, 'font-size': "14px", width: 300}, 2000, "easeInQuad" );
		});
	});
	
	// example GET request
	$.get("currentTime.php", function (data,textStatus,jsxhr) {
		if (textStatus == "success") {
			console.log("success: " + data);
		}
		else {
			console.log("error: "  + jsxhr.status);
		}
		console.log("done.");
	});
	
});

/* Backbone section requires "publish.php" file not provided! 

		<!-- listing 15.24 (HTML) -->
		<form id="publishAlbums" method="post" action="publish.php">
		  <h1>Publish Albums</h1>
		  <ul id="albums">
			<!-- The albums will appear here -->
		  </ul>
		  <p id="totalAlbums">Count: <span>0</span></p>
		  <input type="submit" id="publish" value="Publish" />
		</form>

// lisitng 15.25

// Create a model for the albums
var TravelAlbum = Backbone.Model.extend({
	defaults:{
	    title: 'NewAlbum',
	    photoCount: 0,
	    published: false
	},
	// Function to publish/unpublish
	toggle: function(){
	    this.set('checked', !this.get('checked'));
	}
});

// listing 15.26

// Create a collection of albums
var AlbumList = Backbone.Collection.extend({
	// Set the model type for objects in this Collection
	model: TravelAlbum,
	// Return an array only with the published albums
	GetChecked: function(){
	    return this.where({checked:true});
	}
    });
// Prefill the collection with some albums.
var albums = new AlbumList([
			    new TravelAlbum({ title: 'Banff, Canada', photoCount: 42}),
			    new TravelAlbum({ title: 'Santorini, Greece', photoCount: 102}),
			    ]);


//listing 15.27 Deriving custom View objects for our model and Collection

var TravelAlbumView = Backbone.View.extend({
	TagName: 'li',
	events:{
	    'click': 'toggleAlbum'
	},
	initialize: function(){
	    // Set up event listeners attached to change
	    this.listenTo(this.model, 'change', this.render);
	},
	render: function(){
	    // Create the HTML
	    this.$el.html('<input type="checkbox" value="1" name="' +
			  this.model.get('title') + '" /> ' +
			  this.model.get('title') + '<span> ' +
			  this.model.get('photoCount') + ' images</span>');
	    this.$('input').prop('checked', this.model.get('checked'));
	    // Returning the object is a good practice
	    return this;
	},
	toggleAlbum: function() {
	    this.model.toggle();
	}
});

//listing 15.28 Defining the main app’s view and making use of the Collections and models defined earlier

// The main view of the entire Backbone application
var App = Backbone.View.extend({
	// Base the view on an existing element
	el: $('body'),
	initialize: function() {
	    // Define required selectors
	    this.total = $('#totalAlbums span');
	    this.list = $('#albums');
	    // Listen for the change event on the collection.
	    this.listenTo(albums, 'change', this. render);
	    // Create views for every one of the albums in the collection
	    albums.each(function(album) {
		    var view = new TravelAlbumView({ model: album });
		    this.list.append(view.render().el);
		}, this); // "this" is the context in the callback
	},
	render: function(){
	    // Calculate the count of published albums and photos
	    var total = 0; var photos = 0;
	    _.each(albums.getChecked(), function(elem) {
		    total++;
		    photos+= elem.get("photoCount");
		});
	    // Update the total price
	    this.total.text(total+' Albums ('+photos+' images)');
	    return this;
	}
    });
new App(); // create the main app

*/