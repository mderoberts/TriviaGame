$(document).ready(function () {

// Questions
var questions = [{
    question: "What item of the Dude's really tied the room together?",
    choices: ["Photo of Richard Nixon bowling", "Recliner", "Rug", "Liquor cabinet"],
    correctAnswer: 3
}, {
    question: "What was Walter concerned that nobody cares about?",
    choices: ["Shabbos", "The rules", "Pomeranians", "Nihillists"],
    correctAnswer: 2
}, {
    question: "What is the Dude's favorite band?",
    choices: ["Creedance Clearwater Revival", "The Eagles", "Autobahn", "Bob Dylan"],
    correctAnswer: 1
}, {
    question: "To whom does Bunny Lebowski owe money?",
    choices: ["Pacifists", "Donny", "Larry", "Jackie Treehorn"],
    correctAnswer: 4
}, {
    question: "Which fast-food restaurant did the Dude, Walter and Donny visit?",
    choices: ["In-N-Out Burger", "Ralph's", "Wendy's", "McDonald's"],
    correctAnswer: 1
}];

// Timer
var intervalID;
var clockRunning = false;
var timer = {
    time: 0,
    reset: function() {
        timer.time = 0;
    }
    start: function() {
        if (!clockRunning) {
            intervalID = setInterval(timer.count, 15000);
            clockRunning = true;
        },
    stop: function() {
        clearInterval(intervalID);
        clockRunning = false;
    },
    count: function() {
        timer.time--;
    }
    }
};

// Question screen
 
currentQuestion
options
answerMessage
correctResponse
answerImage

var scoreboard = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0
}

// When the game starts, get the first question and choices and load them into the DOM. Start the timer.
function start = {
}

function 

function reset = {

}


});