/* ------------------------------------------------------------------------
filename  : DragDrop.js
author    : Alexander King
date      : 2016-06-12
email     : aiking@svsu.edu
course    : CIS-255
link      : csis.svsu.edu/~gpcorser/cis255/aiking/DragDrop/DragDrop.js
backup    : github.com/cis255/cis255
purpose   : This file serves as Alexander King's Program 3,
			JQuery Drag and Drop Javascript file,
			at Saginaw Valley State University (SVSU)
copyright : GNU General Public License (http://www.gnu.org/licenses/)
			This program is free software: you can redistribute it and/or modify
			it under the terms of the GNU General Public License as published by
			the Free Software Foundation, either version 3 of the License, or
			(at your option) any later version.
			This program is distributed in the hope that it will be useful,
			but WITHOUT ANY WARRANTY; without even the implied warranty of
			MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.   
external code used in this file: 
			Drag and Drop Numbers Game Tutorial from Elated.
			URL: http://www.elated.com/articles/drag-and-drop-with-jquery-your-essential-guide/
------------------------------------------------------------------------- 
*/

$( init );

function init() {

  // Reset the classes
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );
  $('#year1Fall').html( '<h3><u>Fall:</u></h3>' );
  $('#year2Fall').html( '<h3><u>Fall:</u></h3>' );
  $('#year3Fall').html( '<h3><u>Fall:</u></h3>' );
  $('#year4Fall').html( '<h3><u>Fall:</u></h3>' );
  $('#year1Winter').html( '<h3><u>Winter:</u></h3>' );
  $('#year2Winter').html( '<h3><u>Winter:</u></h3>' );
  $('#year3Winter').html( '<h3><u>Winter:</u></h3>' );
  $('#year4Winter').html( '<h3><u>Winter:</u></h3>' );

  // Create the pile of shuffled cards
  var numbers = [ "CS 105", "CS 116", "CS 216", "CIS 146", "CIS 255", "CIS 355", "CS 316", "RPW 304", "PHIL 210B", "CS 245" ];

  $('<h2><u>Class List</u></h2>').appendTo('#cardPile')
  
  for ( var i=0; i<10; i++ ) {
    $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  } 

  // Create the card slots  
  
   var words = [ 'Year 1: Fall', 'Year 1: Winter', 'Year 2: Fall', 'Year 2: Winter', 'Year 3: Fall', 'Year 3:Winter', 'Year 4: Fall', 'Year 4: Winter'];
   $('<h2><u>Schedule</u></h2>').appendTo('#cardSlots')
  
  for ( var i=1; i<=8; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
	var slotNumber = $(this).data( 'number' );
	var cardNumber = ui.draggable.data( 'number' );

    ui.draggable.position( { of: $(this), my: 'left bottom', at: 'left bottom' } );
    ui.draggable.draggable( 'option', 'revert', false );
	
	if (slotNumber == 1) {$('<p>' + cardNumber + '</p>').appendTo('#year1Fall');};
	if (slotNumber == 2) {$('<p>' + cardNumber + '</p>').appendTo('#year1Winter');};
	if (slotNumber == 3) {$('<p>' + cardNumber + '</p>').appendTo('#year2Fall');};
	if (slotNumber == 4) {$('<p>' + cardNumber + '</p>').appendTo('#year2Winter');};
	if (slotNumber == 5) {$('<p>' + cardNumber + '</p>').appendTo('#year3Fall');};
	if (slotNumber == 6) {$('<p>' + cardNumber + '</p>').appendTo('#year3Winter');};
	if (slotNumber == 7) {$('<p>' + cardNumber + '</p>').appendTo('#year4Fall');};
	if (slotNumber == 8) {$('<p>' + cardNumber + '</p>').appendTo('#year4Winter');};

}
