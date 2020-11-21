
var instructions = document.getElementById('instructions');
var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('quiz-question');
var answerEl = document.getElementById('quiz-answers');
var startBtn = document.getElementById('start');
var timeLeft = ""

var questionObj = [
    {
        question: "Commonly used data types do NOT include:",
        answer: "C",
        optionA: "Strings",
        optionB: "Booleans",
        optionC: "Alerts",
        optionD: "Numbers"
    },
    {
        question: "Arrays in JavaScript can be used to store ______",
        answer: "D",
        optionA: "Other Arrays",
        optionB: "Numbers and Strings",
        optionC: "Booleans",
        optionD: "All of the Above"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        answer: "B",
        optionA: "Quotes",
        optionB: "Parenthesis",
        optionC: "Square Brackets",
        optionD: "Curly Brackets"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer: "A",
        optionA: "Quotes",
        optionB: "Curly Brackets",
        optionC: "Commas",
        optionD: "Parenthesis"
    },
    {
        question: "A useful tool used during development/debugging for printing content to the debugger is:",
        answer: "D",
        optionA: "JavaScript",
        optionB: "terminal/bash",
        optionC: "for loops",
        optionD: "console.log"
    },
]

questionObj.forEach(element => {
    console.log(element.question);
});

// Timer function set at 60 seconds
function timer() {
    timeLeft = 60;

    var timeInterval = setInterval(function () {
        // While timer is running
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft; // Display timer on page
            startBtn.setAttribute("style", "display: none"); // Hide start button on start
            instructions.setAttribute("style", "display: none"); // Hide instructions on start
            timeLeft--;
        }
        // After timer hits zero
        else {
            timerEl.textContent = 'Times Up!'; // Display times up message
            startBtn.removeAttribute("style", "display: unset"); // Show start button
            instructions.removeAttribute("style", "display: unset"); // show instructions
            clearInterval(timeInterval); // Reset Timer
        }
    }, 1000);

}

startBtn.onclick = timer;