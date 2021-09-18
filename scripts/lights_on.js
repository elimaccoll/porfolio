
$(function () {
    $(".lever_bolt_outer").click(function () {
        $(this).css('animationPlayState', 'running');
        $(".lever_beam").css("cursor", "not-allowed");
        $(".lever_lights").css('animation', 'power_on 3.5s linear 0s 1 normal forwards');
        $(".body").css('animationPlayState', 'running');

        // resume and portfolio container animations (makes them appear)
        $(".content_container").css('animationPlayState', 'running');

        // $("#portfolio_icon").hover(function() {
        //   $(this).attr("src", "assets/portfolio_icon_gif.gif");
        // }, function() {
        //   $(this).attr("src", "assets/portfolio_icon.png");
        // });

        $("#portfolio_link_container").click(function(){
            window.location = 'portfolio.html';
        });
        $("#resume_link_container").click(function(){
            window.location = 'resume.html';
        });
        // resume and portfolio container hover animations
        setTimeout(() => {
          $(".content_container").hover(function() {
            // $(this).css('transform', 'scale(1.05)');
            $(this).css('box-shadow', '0px 0px 30px 5px #4e21ff');
            $(this).css('cursor', 'pointer');
            $(this).css('animation', 'wiggle_container 1.5s ease-in-out 0s infinite normal forwards running');
            $(this).css('background-color', '#7ba9e3');
          }, function() {
            $(this).css('background-color', '#7ba9e3');
            $(this).css('transform', 'scale(1) rotate(0deg)');
            $(this).css('box-shadow', '');
            $(this).css('animation', '');
          });
        }, 3000);
        // resume and portfolio link animations (makes them appear)
        // $(".portfolio_link").css('animationPlayState', 'running');
        // $(".resume_link").css('animationPlayState', 'running');
        $(".content_link").css('animationPlayState', 'running');
        $(".content_icon").css('animationPlayState', 'running');
        $(".instruction_container").fadeOut(300);
        // Find a way to iterate through these instead
        var color = "#132442";

        $(".name_container").css('animationPlayState', 'running');
        $(".lever_container").css('box-shadow', '0 0');

        $(".name_letter1").css('color', color);
        $(".name_letter2").css('color', color);
        $(".name_letter3").css('color', color);
        $(".name_letter4").css('color', color);
        $(".name_letter5").css('color', color);
        $(".name_letter6").css('color', color);
        $(".name_letter7").css('color', color);
        $(".name_letter8").css('color', color);
        $(".name_letter9").css('color', color);
        $(".name_letter10").css('color', color);

        $(".name_letter1").css('animationPlayState', 'running');
        $(".name_letter2").css('animationPlayState', 'running');
        $(".name_letter3").css('animationPlayState', 'running');
        $(".name_letter4").css('animationPlayState', 'running');
        $(".name_letter5").css('animationPlayState', 'running');
        $(".name_letter6").css('animationPlayState', 'running');
        $(".name_letter7").css('animationPlayState', 'running');
        $(".name_letter8").css('animationPlayState', 'running');
        $(".name_letter9").css('animationPlayState', 'running');
        $(".name_letter10").css('animationPlayState', 'running');
    });
});
