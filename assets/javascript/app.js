$(document).ready(function () {

    // Questions
    var questions = [{
        question: "What item of the Dude's really tied the room together?",
        choices: ["Photo of Richard Nixon bowling", "Recliner", "Rug", "Liquor cabinet"],
        correctAnswer: 2
    }, {
        question: "What was Walter concerned that nobody cares about?",
        choices: ["Shabbos", "The rules", "Pomeranians", "Nihillists"],
        correctAnswer: 1
    }, {
        question: "What is the Dude's favorite band?",
        choices: ["Creedance Clearwater Revival", "The Eagles", "Autobahn", "Bob Dylan"],
        correctAnswer: 0
    }, {
        question: "To whom does Bunny Lebowski owe money?",
        choices: ["Pacifists", "Donny", "Larry", "Jackie Treehorn"],
        correctAnswer: 3
    }, {
        question: "Which fast-food restaurant did the Dude, Walter and Donny visit?",
        choices: ["In-N-Out Burger", "Ralph's", "Wendy's", "McDonald's"],
        correctAnswer: 0
    }];

    // Timer
    var intervalId;
    var clockRunning;
    var timer = {
        time: 44,
        start: function() {
            if (!clockRunning) {
                intervalId = setInterval(timer.count, 1000);
                clockRunning = true;
                }
            },
        stop: function() {
            clearInterval(intervalId);
            clockRunning = false;
        },
        count: function() {
            $("#timer").html("Time Remaining: " + timer.time);
            timer.time--;
        }
    };

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var currentQuestion;
    var answers;
    var correctChoice;

    $("#startbtn").on("click", function(){
        $("#start-button").hide();
        displayQuiz();
    });

    //Quiz
    function displayQuiz() {
        $("#timer").html("Time Remaining: 45");
        $("#done").html("<button id='donebtn' style='width:200px; margin-top: 30px;'><b>Done</b></button>");
        for (var i = 0; i < questions.length; i++) {
            timer.start();
            currentQuestion = questions[i].question;
            answers = questions[i].choices;
            correctChoice = questions[i].correctAnswer;
            var newDiv = $("<div>");
            newDiv.append("<p>" + currentQuestion + "</p>");
                for (var j = 0; j < answers.length; j++) {
                    var option = answers[j];
                    var name = "radiobtn" + i;
                    newDiv.append($('<li style="list-style: none;"><input type="radio" value=' + j + ' name="radiobtn' + i + '">' + option + '</li>'));
                    $("#quiz").append(newDiv);
                    console.log($("#quiz"));
                }
        }
        setTimeout(endGame, 45000);
        $("#donebtn").on("click", function() {
            endGame();
        });
    }

    //Scoring
    function checkAnswers() {
        for (var i = 0; i < questions.length; i++) {
            var choices = document.getElementsByName('radiobtn' + i);
            for (var j = 0; j < choices.length; j++) {
                var choice = choices[j];
                if (choice.checked && choice.value == questions[i].correctAnswer) {
                    correctAnswers++;
                }
                else if (choice.checked && choice.value != questions[i].correctAnswer) {
                    wrongAnswers++;
                }
            }
        }
        unanswered = 5 - (correctAnswers + wrongAnswers);
    }

    //End Game
    function endGame() {
        timer.stop();
        checkAnswers();
        $("#quiz").hide();
        $("#timer").hide();
        $("#donebtn").hide();
        var stats = $("<p>Correct Answers: " + correctAnswers + "</p>" +
            "<p>Incorrect Answers: " + wrongAnswers + "</p>" +
            "<p>Unanswered: " + unanswered + "</p>");
        $("#message").html("<h2>All Done!</h2>");
        $("#results").append(stats);
    }

});

// Question screen

    // $("#question").append(" <h3>" + questions[i].question + "</h3>");
    // $("#choice").append(questions[i].choices);

 
// currentQuestion
// options
// answerMessage
// correctResponse
// answerImage

// var scoreboard = {
//     correctAnswers: 0,
//     incorrectAnswers: 0,
//     unanswered: 0
// };

// When the game starts, get the first question and choices and load them into the DOM. Start the timer.
// function start = {
// }

// function 

// function reset = {

// }

// function currentQuestion() {
//     for (i = 0; i < questions.length; i++) {
//         $("#question").html(questions.question[i]);
//         $("#choices").html(questions.choices[i]);
//         console.log(currentQuestion);

//     }


