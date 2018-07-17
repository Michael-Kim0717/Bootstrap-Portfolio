$(document).ready(function(){

    /* Whenever the dropdown menu is pressed */
    $("#dropdown-menu").on("click", function(){
        $(".nav-screen").css("visibility", "visible");
        $(".nav-screen").addClass("animated fadeInDown");
        $(".nav-screen").removeClass("slideOutUp");
        $("#dropdown-menu").css("display", "none");
        $(".footer").css("display", "none");
        $(".content").css("display", "none");

        window.setTimeout(function(){
            $(".about").css("visibility", "visible");
            $(".about").addClass("fadeInLeftBig");
        }, 1000);

        window.setTimeout(function(){
            $(".portfolio").css("visibility", "visible");
            $(".portfolio").addClass("fadeInRightBig");
        }, 1200);

        window.setTimeout(function(){
            $(".contact").css("visibility", "visible");
            $(".contact").addClass("fadeInLeftBig");
        }, 1400);
    });

    /* Whenever the pullup menu is pressed */
    $("#pullup-menu").on("click", function(){
        $(".nav-screen").removeClass("fadeInDown");
        $(".nav-screen").addClass("slideOutUp");

        $(".about").removeClass("fadeInLeftBig");
        $(".portfolio").removeClass("fadeInRightBig");
        $(".contact").removeClass("fadeInLeftBig");
        
        $(".about").css("visibility", "hidden");
        $(".portfolio").css("visibility", "hidden");
        $(".contact").css("visibility", "hidden");
        
        window.setTimeout(function(){
            $(".nav-screen").css("visibility", "hidden");
            $("#dropdown-menu").css("display", "block");
            $(".content").css("display", "block");
            $(".footer").css("display", "block");
        }, 1000);
    });

})