// jQuery

$(document).ready(function(){
  
  // draggable

  $( "#draggable" ).draggable();

  // accordion

  $( "#accordion" ).accordion({
    collapsible: true
  });

  //autocomplete

  var data = [ 
    "HTML",
    "CSS",
    "javaScript"

  ];

  $( "#c_name" ).autocomplete({
      source: data
    });

  //selectable

    $( "#selectable" ).selectable();

  //sortable

    $( "#sortable" ).sortable();

  //droppable

    $( "#dragg" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
      }
    });

  // resizable

    $( "#resizable" ).resizable();

  //progressbar

    $( "#progressbar" ).progressbar({
      value: 37
    });  

  //tabs

    $( "#tabs" ).tabs();  

  //datepicker

    $( "#datepicker" ).datepicker();

  //dialog

    var bootstrapButton = $.fn.button.noConflict()
    $.fn.bootstrapBtn = bootstrapButton;

    $( "#dialog" ).dialog();

  //slider

     $( "#slider" ).slider();

  //sortable_display_as_grid

     $( "#sortable2" ).sortable();
     $( "#sortable2" ).disableSelection();

  //tootip

     $( document ).tooltip();

});