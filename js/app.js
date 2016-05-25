$(document).ready(function() {
    //Creating and loading variables with audio.
    var hadouken = $("#hadouken-audio");
    var sf_theme = $("#sf-theme");
    var ryu_cool = $("#ryu-audio");
    var isKey = null;
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
        sf_theme.animate({ volume: 0 }, 17000);
    });

    //The  next 2 functions handle the x key pressing and releasing.
    $(document).on("keypress", function(e) {
        if (e.which == 120) {
            $(".ryu-still").hide();
            $(".ryu-ready").hide();
            $(".ryu-throwing").hide();
            $(".hadouken").hide();
            $(".ryu-cool").show();
            sf_theme.trigger('pause');
            ryu_cool.trigger('play');
        } else {
            $(".ryu-still").show();
            $(".ryu-ready").hide();
            $(".ryu-throwing").hide();
            $(".hadouken").hide();
            $(".ryu-cool").hide();
        }

    });

    $(document).on("keyup", function() {
        $(".ryu-cool").hide();
        $(".ryu-throwing").hide();
        $(".ryu-ready").hide();
        $(".ryu-still").show();
        ryu_cool.load();
    });

    // 	This swaps the ryu images when the mouse enters and leaves
    // 	the ryu-container div element.
    $(".ryu-container").hover(function() {
            $(".ryu-still").hide();
            $(".ryu-throwing").hide();
            $(".ryu-ready").show();

        })
        .mouseleave(function() {
            $(".ryu-ready").hide();
            $(".ryu-throwing").hide();
            $(".ryu-still").show();
            $(".hadouken").hide();
        });

    // This starts the hadouken throw animation.
    $(".ryu-container").mousedown(function() {
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();

        //This is handling the hadouken animation across the screen.
        $('.hadouken').finish().show()
            .animate({ 'left': '1020px' },
                //1.325 seconds which is timed to the hadouken audio.
                1325,
                function() {
                    $(this).hide();
                    $(this).css('left', '-212px');
                }
            );
        sf_theme.trigger('pause');
        hadouken.load();
        hadouken.trigger('play');
    });

    $(".ryu-container").mouseup(function() {
        $(".ryu-still").hide();
        $(".ryu-ready").show();
        $(".ryu-throwing").hide();
        $(".hadouken").hide();
        hadouken.trigger("pause");
    });
});
