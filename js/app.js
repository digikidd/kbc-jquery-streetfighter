$(document).ready(function(){

// USE THIS TO FADE IN OPEING IMAGES??

// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });

// I DID NOT USE THIS FOR MY AUDIO.
// function playHadouken() {
//     $('#hadouken-sound')[0].volume = 0.5;
//     $('#hadouken-sound')[0].load();
//     $('#hadouken-sound')[0].play();
// }

// $(document).keypress(function(e) {
//     if(e.which == 88) {
//     	alert();
//     }
// });


//Creating and loading variables with audio.
var	hadouken = $("#hadouken-audio");
var sf_theme = $("#sf-theme");
var ryu_cool = $("#ryu-audio");


// THIS DOES NOT WORK AND HOW DO YOU MAKE AUDIO PLAY WHEN PAGE LOADS??
// $("#sf-theme").get(0).play();


$(document).on( "keydown", function(e) {
	if(e.which == 88) {
    	$(".ryu-still").hide();
	 	$(".ryu-ready").hide();
	 	$(".ryu-throwing").hide();
	 	$(".hadouken").hide();
	 	$(".ryu-cool").show();
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
	hadouken.trigger('play');
//	THIS DID NOT WORK???
// 	document.getElementById("hadouken");
//	hadouken.play();
});

$(".ryu-container").mouseup(function() {
	$(".ryu-still").show();
	$(".ryu-ready").hide();
	$(".ryu-throwing").hide();
	$(".hadouken").hide();

//	THIS PAUSES THE AUDIO BUT DOES NOT RESET THE AUDIO???
//	hadouken.trigger('pause');
//	hadouken.currentTime=0;

});


});