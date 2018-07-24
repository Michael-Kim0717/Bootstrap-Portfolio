$(document).ready(function(){

    /* Currently selected project to view. */
    var selectedProject = "";

    /* Set widths of experience bars accordingly. 
       When icons and bars come on the page, animate accordingly.
    */
    var slideInLeftObject = {
        classToAdd: 'visible slideInLeft',
        offset: 100,
        repeat: false  
    };
    var slideInRightObject = {
        classToAdd: 'visible slideInRight',
        offset: 100,
        repeat: false
    };
    var fadeInLeftObject = {
        classToAdd: 'visible fadeInLeft',
        offset: 100,
        repeat: false
    }

        /* About Page */
        $("#about-me").viewportChecker(slideInLeftObject);
        $(".intro").viewportChecker(slideInRightObject);

        /* Experience Page */
        $("#experience").viewportChecker(slideInRightObject);
        $(".percent-bar").viewportChecker(slideInLeftObject);
        $(".lang-icon").viewportChecker(fadeInLeftObject);
        $(".language").viewportChecker(fadeInLeftObject);

        /* Portfolio Page */
        $("#portfolio").viewportChecker(slideInLeftObject);
        $("#project-cards").viewportChecker(slideInRightObject);
        $("#project-pic-carousel").viewportChecker(slideInLeftObject);

        /* Contact Page */
        $("#contact-header").viewportChecker(slideInRightObject);
        $(".social-media").viewportChecker(slideInRightObject);
        $(".contact-me-form").viewportChecker(slideInRightObject);

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

    /* Card on click */
    $(".card").on("click", function(){
        selectedProject = $(this).attr("data");
        
        // Add indicators for what sliding page you are on.
        $(".carousel-indicators").html(
            "<li data-target='#project-pic-carousel' data-slide-to='0' class='active'></li>" +
            "<li data-target='#project-pic-carousel' data-slide-to='1'> </li>" +
            "<li data-target='#project-pic-carousel' data-slide-to='2'> </li>"
        );

        // Add arrows to each side to the carousel.
        $("#project-pic-carousel").append(
            "<a class='carousel-control-prev' href='#project-pic-carousel' role='button' data-slide='prev'>" + 
                "<span class='carousel-control-prev-icon' aria-hidden='true'></span>" +
                "<span class='sr-only'>Previous</span>" +
            "</a>" +
            "<a class='carousel-control-next' href='#project-pic-carousel' role='button' data-slide='next'>" +
                "<span class='carousel-control-next-icon' aria-hidden='true'></span>" +
                "<span class='sr-only'>Next</span>" +
            "</a>"
        );

        // Add pictures and descriptions for the project.
        $(".carousel-inner").empty();
        switch (selectedProject) {
            case "geography-hangman" :
                $(".carousel-inner").append(
                    "<div class='carousel-item active'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/word-guess-game-pics/start-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> A short and simple hangman-esque game that uses keypress listeners to listen to user input. </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='carousel-item'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/word-guess-game-pics/in-game-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> Users have 5 chances to guess the given country. For every right letter, it will populate the corresponding values and for every wrong letter, lower the amount of guesses they have. </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='carousel-item'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/word-guess-game-pics/loss-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> For every correct answer, you will continue a streak for correct answers. For each loss, you will break this streak and will have to start over. </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>"
                );
                break;
            case "speed-trivia" :
                $(".carousel-inner").append(
                    "<div class='carousel-item active'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/speed-trivia-pics/home-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> A quick 10 question quiz that uses intervals that tests the users knowledge in topics such as Science, History, Sports, Geography, and more. </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='carousel-item'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/speed-trivia-pics/in-game-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> With 10 seconds to answer each question, the user's main goal is to answer each question accurately and swiftly in order to beat their own high score. </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='carousel-item'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/speed-trivia-pics/results-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> Users will be able to see how many questions were correct, incorrect, and unanswered. Upon restarting the quiz, users will continuously be prompted with a set of 10 new questions. </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>"
                );
                break;
            case "pokemon-rpg" :
                $(".carousel-inner").append(
                    "<div class='carousel-item active'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/pokemon-rpg-pics/selection-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas obcaecati, fugit quae, dolorum vero sit corrupti adipisci expedita reprehenderit quasi ex molestiae nostrum? Corrupti, fugiat asperiores unde doloremque voluptas commodi! </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='carousel-item'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/pokemon-rpg-pics/battle-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas obcaecati, fugit quae, dolorum vero sit corrupti adipisci expedita reprehenderit quasi ex molestiae nostrum? Corrupti, fugiat asperiores unde doloremque voluptas commodi! </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='carousel-item'>" +
                        "<div class='row'>" +
                            "<div class='col-12'>" +
                                "<img class='project-ex-img' src='assets/images/pokemon-rpg-pics/results-screen.png'>" +
                            "</div>" +
                            "<div class='col-12'>" +
                                "<p class='project-ex-text'> Users will be able to see how many questions were correct, incorrect, and unanswered. Upon restarting the quiz, users will continuously be prompted with a set of 10 new questions. </p>" +
                            "</div>" +
                        "</div>" +
                    "</div>"
                );
                break;
            default :
                break;
        }
        
    });

    /* On Navigation, when 'About', 'Portfolio', 'Contact' are clicked accordingly,
        Pull up screen, and change window location.
     */
    $("#about-me-nav").on("click", function(){
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
            
            window.location = "#about";
        }, 1000);
    });

    $("#projects-nav").on("click", function(){
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
            
            window.location = "#projects";
        }, 1000);
    });

    $("#contact-me-nav").on("click", function(){
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
            
            window.location = "#contact-me";
        }, 1000);
    });

})