$(document).ready(function() {
	$("#readyMessage").text("Ready.");
	$(".zippydee").text("zippydoo");
	$("#timeDiv").load("currentTime.php");
	console.log($("body").html());
	$("#div1").html("<p>howdy</p>");
	console.log($("#div1 p").html());
	console.log($("#v1").val())
	
	
	var jsLink = document.createElement("a");
	jsLink.href = "http://www.funwebdev.com";
	jsLink.innerHTML = "JS Link";
	jsLink.title = "JS";
	console.log(jsLink);
	
	var jQueryLink = $("<a href='http://funwebdev.com' title = 'jQuery'>jQuery way</a>");
	console.log(jQueryLink);
	
	
	var jQueryVerboseLink = $("<a></a>");
	jQueryVerboseLink.attr("href",'http://funwebdev.com');
	jQueryVerboseLink.attr("title","jQuery verbose");
	jQueryVerboseLink.html("Verbose");
	console.log(jQueryVerboseLink);
	
	$("#div2").append(jsLink);
	$("#div2").append("<br />");
	$("#div2").append(jQueryLink);
	$("#div2").append("<br />");
	$("#div2").append(jQueryVerboseLink);
	$("#div2").append("<br />");
	
	$("a").wrap("<div class='galleryLink'/>");
	
	$("#input1").on("change", function(){
		alert("This input field has changed to: " +$("#input1").val());
		})
	
	
	$("#p1").click(function(){
		$(this).hide();
	});
	var jqxhr = $.get("currentTime.php");
	// example GET request
//	$("#timeDiv").load("http://api.svsu.edu/courses?prefix=CIS&courseNumber=255");
	$.get("currentTime.php", function (data,textStatus,jsxhr) {
		if (textStatus == "success") {
			console.log("success: " + data);
		}
		else {
			console.log("error: "  + jsxhr.status);
		}
		console.log("done.");
	});
	
	//var jqxhr = $.get("currentTime.php");
	console.log(jqxhr.statusCode());
	//var jqxhr = $.post("currentTime.php");
	console.log(jqxhr.statusCode());
	//AJAX Request
	
		var jqxhr = $.ajax(
			{
				url   :"currentTime.php",
				data  :"zippy",
				async:true,
				type  :"POST"
			}
		);	
		console.log(jqxhr.statusCode());
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