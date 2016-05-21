//Is there a simpler way to script anything I have here?
//
//How can I improve my workflow?
//
//What would you do differently?
//
//What if I coded this so if an event is running, other events would be unavailable?
//
//
//For example, right now you can press the x key while the intro is playing.
$(document).ready(function(){
//Creating and loading variables with audio.
var	hadouken = $("#hadouken-audio");
var sf_theme = $("#sf-theme");
var ryu_cool = $("#ryu-audio");
// This load function plays the opening theme music and handles animations for
// logo/game images.
$(window).load(function() {
	sf_theme.load();
	sf_theme.trigger('play');
	$(".sf-logo").show();
  	$(".sf-logo").animate({
    opacity: 0.0,
  	}, 8000, function() {
  		$(".sf-logo").hide();
  		$(".jquery-logo").show();
  			$(".jquery-logo").animate({
    	opacity: 0.0,
  		}, 8000, function() {
  			$(".jquery-logo").hide();
  			$(".game-rules").show();
  	});
  		});
  	sf_theme.animate ({volume: 0}, 17000);
});

//The  next 2 functions handle the x key pressing and releasing.
$(document).on( "keydown", function(e) {
	if(e.which == 88) {
    	$(".ryu-still").hide();
	 	$(".ryu-ready").hide();
	 	$(".ryu-throwing").hide();
	 	$(".hadouken").hide();
	 	$(".ryu-cool").show();
	 	sf_theme.trigger('pause');
	 	ryu_cool.trigger('play');
	 }
	 	else{}
    });
$(document).on( "keyup", function(e) {
	 	$(".ryu-cool").hide();
	 	$(".ryu-still").show();
	 	ryu_cool.load();
    });

// 	This swaps the ryu images when the mouse enters and leaves
// 	the ryu-container div element.
$(".ryu-container").mouseenter(function() {
	$(".ryu-still").hide();
	$(".ryu-ready").show();

})
.mouseleave(function() {
 	$(".ryu-still").show();
 	$(".ryu-ready").hide();
 	$(".ryu-throwing").hide();
 	$(".hadouken").hide();
});

// This starts the hadouken throw animation.
$(".ryu-ready").mousedown(function(){
	$(".ryu-ready").hide();
	$(".ryu-throwing").show();

//This is handling the hadouken animation across the screen.
	$('.hadouken').finish().show()
	.animate(
		{'left': '1020px'},
		//1.325 seconds which is timed to the hadouken audio.
	    1325,
	    function() {
	    //CAN WE PLEASE DISCUSS (THIS) IN MORE DETAIL???
	      	$(this).hide();
	      	$(this).css('left', '-212px');
	    }
  	);
  	sf_theme.trigger('pause');
	hadouken.trigger('play');
});

$(".ryu-container").mouseup(function() {
	$(".ryu-still").show();
	$(".ryu-ready").hide();
	$(".ryu-throwing").hide();
	$(".hadouken").hide();
});
});