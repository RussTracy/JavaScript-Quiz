var formEl = document.querySelector("#highscore");
var highscoreEl = document.querySelector("#highscore-panel")
var instructionsEl = document.querySelector('#instructions');
var timerEl = document.querySelector('#countdown');
var questionEl = document.querySelector('#quiz-question');
var quizEl = document.querySelector('#quiz-body');
var statusEl = document.querySelector('#status')
var startBtn = document.querySelector('#start');
var timeLeft = 0;

quizEl.textContent = "Try to answer the following code-related questions withn the time limit. Keep in mind that incorrect answers will penalize your score / time by ten seconds!";

var questionObj = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ______",
        options: ["Other Arrays", "Numbers and Strings", "Booleans", "All of the Above"],
        answer: "4"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        options: ["Quotes", "Parenthesis", "Square Brackets", "Curly Brackets"],
        answer: "2",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["Quotes", "Curly Brackets", "Commas", "Parenthesis"],
        answer: "1"
    },
    {
        question: "A useful tool used during development/debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "4"
    },
]


// Timer function set at 60 seconds
function timer() {
    timeLeft = 60;
    startBtn.setAttribute("style", "display: none"); // Hide start button on start

    var timeInterval = setInterval(function () {
        // While timer is running
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft; // Display timer on page
            timeLeft--;
        }
        // After timer hits zero
        else {
            timerEl.textContent = 'Times Up!'; // Display times up message
            clearInterval(timeInterval); // Reset Timer
            highScores(timeLeft, timeInterval);
        }
    }, 1000);
    questions();
}

var highScores = function (timeLeft) {
    quizEl.innerHTML = "<h2>All Done!</h2><h3>Your final score is " + timeLeft + "</h3>";
    var highscoreEl = document.querySelector('#highscore-panel');
    highscoreEl.setAttribute("style", "display: block; margin-top: -250px");
}

var questions = function () {
    quizEl.textContent = "";
    for (let i = 0; i < questionObj.length; i++) {
        var panelEl = document.createElement("section");
        panelEl.className = "question-panel";
        panelEl.setAttribute("id", "panel" + [i + 1]);
        quizEl.appendChild(panelEl);

        var questionEl = document.createElement("h3");
        questionEl.className = "quiz-question";
        questionEl.textContent = questionObj[i].question;
        panelEl.appendChild(questionEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "1");
        answerEl.setAttribute("data-answer-id", questionObj[i].answer);
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]);
        answerEl.className = "answer-choice";
        answerEl.textContent = "1. " + questionObj[i].options[0];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "2");
        answerEl.setAttribute("data-answer-id", questionObj[i].answer);
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]);
        answerEl.className = "answer-choice";
        answerEl.textContent = "2. " + questionObj[i].options[1];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "3");
        answerEl.setAttribute("data-answer-id", questionObj[i].answer);
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]);
        answerEl.className = "answer-choice";
        answerEl.textContent = "3. " + questionObj[i].options[2];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "4");
        answerEl.setAttribute("data-answer-id", questionObj[i].answer);
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]);
        answerEl.className = "answer-choice";
        answerEl.textContent = "4. " + questionObj[i].options[3];
        panelEl.appendChild(answerEl);

        var statusEl = document.createElement("div");
        statusEl.setAttribute("id", "answer-status");
        statusEl.className = "status";
        panelEl.appendChild(statusEl);
    }
}

var checkAnswer = function (questionId, answerId, panelId) {

    var panel1El = document.querySelector('#panel1');
    var panel2El = document.querySelector('#panel2');
    var panel3El = document.querySelector('#panel3');
    var panel4El = document.querySelector('#panel4');
    var statusEl = document.querySelector("#status");




    switch (panelId) {
        case 'panel1':
            console.log("Panel 1");
            if (questionId === answerId) {
                statusEl.textContent = "Correct!"
                statusEl.className = "status-correct"
                panel1El.setAttribute("style", "display: none");
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Wrong!"
                statusEl.className = "status-wrong"
                panel1El.setAttribute("style", "display: none");
            };
            break;
        case 'panel2':
            console.log("Panel 2");
            if (questionId === answerId) {
                statusEl.textContent = "Excellent!"
                statusEl.className = "status-correct"
                panel2El.setAttribute("style", "display: none");
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Wrong Again!"
                statusEl.className = "status-wrong"
                panel2El.setAttribute("style", "display: none");
            };
            break;
        case 'panel3':
            console.log("Panel 3");
            if (questionId === answerId) {
                statusEl.textContent = "You Got It!"
                statusEl.className = "status-correct"
                panel3El.setAttribute("style", "display: none");
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Ouch!"
                statusEl.className = "status-wrong"
                panel3El.setAttribute("style", "display: none");
            };
            break;
        case 'panel4':
            console.log("Panel 4");
            if (questionId === answerId) {
                statusEl.textContent = "Well Done!"
                statusEl.className = "status-correct"
                panel4El.setAttribute("style", "display: none");
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Totally Wrong."
                statusEl.className = "status-wrong"
                panel4El.setAttribute("style", "display: none");
            };
            break;
        case 'panel5':
            console.log("Panel 5");
            if (questionId === answerId) {
                statusEl.textContent = "Awesome!"
                statusEl.className = "status-correct"
                highScores(timeLeft);
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Not Correct."
                statusEl.className = "status-wrong"
                highScores(timeLeft);
            };
            break;
    }
}

var taskFormHandler = function () {
    event.preventDefault();
    var playerInput = document.querySelector("input[name='player-initials']").value;
    // Check if input values are empty strings
    if (!playerInput) {
        alert("Please enter your initals!");
        return false;
    }

    localStorage.setItem(playerInput, timeLeft)
    highscoreEl.textContent = "";
    quizEl.textContent = "";
    statusEl.textContent = "";



};

var answerHandler = function (event) {
    var targetEl = event.target;

    if (targetEl.matches(".answer-choice")) {
        var questionId = targetEl.getAttribute("data-question-id");
        var answerId = targetEl.getAttribute("data-answer-id");
        var panelId = targetEl.getAttribute("data-panel-id");
        checkAnswer(questionId, answerId, panelId);
    }
}

startBtn.onclick = timer;
quizEl.addEventListener("click", answerHandler);
formEl.addEventListener("submit", taskFormHandler);