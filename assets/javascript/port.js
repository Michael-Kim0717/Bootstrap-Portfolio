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
    };
    var visibleObject = {
        classToAdd: 'visible',
        offset: 100,
        repeat: false
    };

    /* Objects for clicking on projects */
    var liri = {
        type: "web",
        imageLinks: 
        ['assets/images/liri-pics/movie-this.png',
        'assets/images/liri-pics/spotify-this.png',
        'assets/images/liri-pics/my-tweets.png'],
        imageDesc:
        ["Giving movie-this as a command to LIRI will provide the user with details to their searched movie including the movie's name, year, ratings, countries where the movie was produced, languages that the movie is in, plot, and list of actors.",
        "Asking LIRI to spotify-this-song with a song title will provide the user with the song's artist, title, preview link, and album.",
        "LIRI will read out the last twenty tweets you have posted on your twitter when giving it the instructions, my-tweets sorted by the most recently posted tweets."]
    }
    var foogle = {
        type: "web",
        imageLinks:
        ['assets/images/foogle-pics/tinder-page.png',
        'assets/images/foogle-pics/favorites.png',
        'assets/images/foogle-pics/details.png'],
        imageDesc:
        ['We wanted to give Foogle a Tinder-like feel where if the user likes what they see from the image and short nutritional description, they can like it to add to their favorites or dislike it to find another dish.',
        'The favorites page is a collection of all dishes that the user has liked. Here users will be able to return to a certain dish if they liked it in the past and view it again at another time.',
        'Since not much information can be gained from an image, clicking an image on the favorites page will give the user a more detailed listing of the dish including where to find it, its distance, whether or not the restaurant does takeout/delivery, and more.']
    }
    var geographyHangman = {
        type: "web",
        imageLinks:
        ['assets/images/word-guess-game-pics/start-screen.png',
        'assets/images/word-guess-game-pics/in-game-screen.png',
        'assets/images/word-guess-game-pics/loss-screen.png'],
        imageDesc:
        ['A short and simple hangman-esque game that uses keypress listeners to listen to user input.',
        'Users have 5 chances to guess the given country. For every right letter, it will populate the corresponding values and for every wrong letter, lower the amount of guesses they have.',
        'For every correct answer, you will continue a streak for correct answers. For each loss, you will break this streak and will have to start over.']
    }
    var speedTrivia = {
        type: "web",
        imageLinks:
        ['assets/images/speed-trivia-pics/home-screen.png',
        'assets/images/speed-trivia-pics/in-game-screen.png',
        'assets/images/speed-trivia-pics/results-screen.png'],
        imageDesc:
        ['A quick 10 question quiz that uses intervals that tests the users knowledge in topics such as Science, History, Sports, Geography, and more.',
        "With 10 seconds to answer each question, the user's main goal is to answer each question accurately and swiftly in order to beat their own high score.",
        'Users will be able to see how many questions were correct, incorrect, and unanswered. Upon restarting the quiz, users will continuously be prompted with a set of 10 new questions.']
    }
    var pokemonRPG = {
        type: "web",
        imageLinks:
        ['assets/images/pokemon-rpg-pics/selection-screen.png',
        'assets/images/pokemon-rpg-pics/battle-screen.png',
        'assets/images/pokemon-rpg-pics/results-screen.png'],
        imageDesc:
        ['Each Pokemon has a different set of statistics (generated randomly) with some Pokemon excelling at one statistic more than the others. Making the choice of who to start with along with the order of who to battle is highly important.',
        "Each time the user attacks, the starter Pokemon's attack will increase by its base attack, while the enemy will strike with consistent damage. Being able to stack your attack value wisely will make or break the outcome of the battles.",
        'Every Pokemon has a chance in victory, however the choices that the user makes will determine the outcome of the rest of the game.']
    }
    var passwordJournal = {
        type: "mob",
        imageLinks:
        ['assets/images/password-pics/home.png',
        'assets/images/password-pics/details.png',
        'assets/images/password-pics/pin.png'],
        imageDesc:
        ["The home page shows a list of user entered accounts in alphabetical order that may be viewed upon entering the user's PIN number.",
        "A simple details page will provide the user with the account's title, username, and password.",
        'The settings screen gives the user the option to add a new PIN number or edit their current PIN number. This PIN number is what the user will enter in to view any of their entered accounts.']
    }
    var byg = {
        type: "mob",
        imageLinks:
        ['assets/images/byg-pics/announcements.png',
        'assets/images/byg-pics/directory.png',
        'assets/images/byg-pics/logs.png',
        'assets/images/byg-pics/response-cards.png'],
        imageDesc:
        ['The goal for this page is to allow staff to update the announcements on a weekly basis so that all students will be able to view them upon entering the application.',
        "A page only for the staff that allows each teacher to view a list of their current students. General staff will be able to view a list of all students from each grade.",
        "Usually a weekly task performed by teachers using a Google Form, logs are a way for teachers to keep track of the progression of students.",
        'A method of students being able to reach out to staff on Sundays exclusively, this page on the application aims to provide a 24/7 communication bridge between staff and students.']
    }
    var budgetWallet = {
        type: "mob",
        imageLinks:
        ['assets/images/budget-pics/home.png',
        'assets/images/budget-pics/methods.png',
        'assets/images/budget-pics/transactions.png',
        'assets/images/budget-pics/statistics.png'],
        imageDesc:
        ["As the hub for the user to add transactions, users can easily map where their money goes, account by account.",
        "For anyone with multiple methods of payment, this application aims to help users manually keep track of balances across all accounts.",
        "With access to viewing transactions across any and all accounts, the user is able to view transaction details over the course of their spending period.",
        "The statistics screen is mainly here to show minor statistics about where the user's money is going including largest payments, money spent overall, and place that the most money was spent at."]
    }

        /* About Page */
        $("#about-me").viewportChecker(slideInLeftObject);
        $(".intro").viewportChecker(slideInRightObject);

        /* Experience Page */
        $("#experience").viewportChecker(slideInRightObject);
        $(".experience-bar").viewportChecker(visibleObject);
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
            case 'liri' :
                addCarousel(liri);
                break;
            case 'foogle' :
                addCarousel(foogle);
                break;
            case "geography-hangman" :
                addCarousel(geographyHangman);
                break;
            case "speed-trivia" :
                addCarousel(speedTrivia);
                break;
            case "pokemon-rpg" :
                addCarousel(pokemonRPG);
                break;
            case 'password-journal' :
                addCarousel(passwordJournal);
                break;
            case 'BYG' :
                addCarousel(byg);
                break;
            case 'budget-wallet' :
                addCarousel(budgetWallet);
                break;    
            default :
                $(".carousel-indicators").empty();
                $(".carousel-inner").append(
                    "<div class='carousel-item active'>" +
                        "<h4> Nothing to see here yet :( </h4>" +
                    "</div>"
                );
                break;
        }
        
    });

    /* On Navigation, when 'About', 'Portfolio', 'Contact' are clicked accordingly,
        Pull up screen, and change window location.
     */
    $(".nav-list-item").on("click", function(){
        var thisData = $(this).attr("data");
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
            
            window.location = thisData;
        }, 1000);
    });

    var addCarousel = function(projectObject) {
        var length = projectObject.imageLinks.length;

        // Add indicators for what sliding page you are on and populate the carousel items.
        $(".carousel-indicators").empty();
        for (var i = 0; i < length; i++){
            if (projectObject.type == "web"){
                if (i == 0){
                    $(".carousel-indicators").append(
                        "<li data-target='#project-pic-carousel' data-slide-to=" + i + " class='active'></li>"
                    );
                    $(".carousel-inner").append(
                        "<div class='carousel-item active'>" +
                            "<div class='row'>" +
                                "<div class='col-12'>" +
                                    "<img class='project-ex-img' src=" + projectObject.imageLinks[i] + ">" +
                                "</div>" +
                                "<div class='col-12'>" +
                                    "<p class='project-ex-text'>" + projectObject.imageDesc[i] + "</p>" +
                                "</div>" +
                            "</div>" +
                        "</div>"
                    );
                }
                else {
                    $(".carousel-indicators").append(
                        "<li data-target='#project-pic-carousel' data-slide-to=" + i + "> </li>"
                    );
                    $(".carousel-inner").append(
                        "<div class='carousel-item'>" +
                            "<div class='row'>" +
                                "<div class='col-12'>" +
                                    "<img class='project-ex-img' src=" + projectObject.imageLinks[i] + ">" +
                                "</div>" +
                                "<div class='col-12'>" +
                                    "<p class='project-ex-text'>" + projectObject.imageDesc[i] + "</p>" +
                                "</div>" +
                            "</div>" +
                        "</div>"
                    )
                }
            }
            else {
                if (i == 0){
                    $(".carousel-indicators").append(
                        "<li data-target='#project-pic-carousel' data-slide-to=" + i + " class='active'></li>"
                    );
                    $(".carousel-inner").append(
                        "<div class='carousel-item active'>" +
                            "<div class='row'>" +
                                "<div class='col-5'>" +
                                    "<img class='project-ex-img' src=" + projectObject.imageLinks[i] + ">" +
                                "</div>" +
                                "<div class='col-6'>" +
                                    "<p class='mobile-ex-text'>" + projectObject.imageDesc[i] + "</p>" +
                                "</div>" +
                            "</div>" +
                        "</div>"
                    );
                }
                else {
                    $(".carousel-indicators").append(
                        "<li data-target='#project-pic-carousel' data-slide-to=" + i + "> </li>"
                    );
                    $(".carousel-inner").append(
                        "<div class='carousel-item'>" +
                            "<div class='row'>" +
                                "<div class='col-5'>" +
                                    "<img class='project-ex-img' src=" + projectObject.imageLinks[i] + ">" +
                                "</div>" +
                                "<div class='col-6'>" +
                                    "<p class='mobile-ex-text'>" + projectObject.imageDesc[i] + " </p>" +
                                "</div>" +
                            "</div>" +
                        "</div>"
                    )
                }
            }
        }
    }

})