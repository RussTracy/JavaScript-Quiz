// Question 1 Elements
var option1A = document.getElementById('option1A')
var option1B = document.getElementById('option1B')
var option1C = document.getElementById('option1C')
var option1D = document.getElementById('option1D')

// Question 2 Elements
var option2A = document.getElementById('option2A')
var option2B = document.getElementById('option2B')
var option2C = document.getElementById('option2C')
var option2D = document.getElementById('option2D')

// Question 3 Elements
var option3A = document.getElementById('option3A')
var option3B = document.getElementById('option3B')
var option3C = document.getElementById('option3C')
var option3D = document.getElementById('option3D')

// Question 4 Elements
var option4A = document.getElementById('option4A')
var option4B = document.getElementById('option4B')
var option4C = document.getElementById('option4C')
var option4D = document.getElementById('option4D')

// Question 5 Elements
var option5A = document.getElementById('option5A')
var option5B = document.getElementById('option5B')
var option5C = document.getElementById('option5C')
var option5D = document.getElementById('option5D')

// Answer Elements
var answerE1 = document.getElementById('quiz-answers1');
var answerE2 = document.getElementById('quiz-answers2');
var answerE3 = document.getElementById('quiz-answers3');
var answerE4 = document.getElementById('quiz-answers4');
var answerE5 = document.getElementById('quiz-answers5');

// Additional Elements
var instructions = document.getElementById('instructions');
var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('quiz-question');
var startBtn = document.getElementById('start');

// Global Time Varible
var timeLeft = ""

// Question Objects
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

// Timer Function
var timer = function () {
    timeLeft = 5;
    startBtn.setAttribute("style", "display: none"); // Hide Start Button
    instructions.setAttribute("style", "display: none"); // Hide Instructions
    timerEl.setAttribute("style", "display: block"); // Show Timer
    timerEl.textContent = 'Time: 60'; // Set Timer Display

    var timeInterval = setInterval(function () {
        if (timeLeft > -1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);

    createQuestion1(); // Dispaly First Question

}
// Create Questions 1 - 5 (This Code is a mess... Need to figure out how to loop this.)
var createQuestion1 = function () {
    answerE1.setAttribute("style", "display: block");
    questionEl.textContent = questionObj[0].question;
    option1A.textContent = questionObj[0].optionA;
    option1B.textContent = questionObj[0].optionB;
    option1C.textContent = questionObj[0].optionC;
    option1D.textContent = questionObj[0].optionD;
}
var createQuestion2 = function () {
    answerE2.setAttribute("style", "display: block");
    questionEl.textContent = questionObj[1].question;
    option2A.textContent = questionObj[1].optionA;
    option2B.textContent = questionObj[1].optionB;
    option2C.textContent = questionObj[1].optionC;
    option2D.textContent = questionObj[1].optionD;
}
var createQuestion3 = function () {
    answerE3.setAttribute("style", "display: block");
    questionEl.textContent = questionObj[2].question;
    option3A.textContent = questionObj[2].optionA;
    option3B.textContent = questionObj[2].optionB;
    option3C.textContent = questionObj[2].optionC;
    option3D.textContent = questionObj[2].optionD;
}
var createQuestion4 = function () {
    answerE4.setAttribute("style", "display: block");
    questionEl.textContent = questionObj[3].question;
    option4A.textContent = questionObj[3].optionA;
    option4B.textContent = questionObj[3].optionB;
    option4C.textContent = questionObj[3].optionC;
    option4D.textContent = questionObj[3].optionD;
}
var createQuestion5 = function () {
    answerE5.setAttribute("style", "display: block");
    questionEl.textContent = questionObj[4].question;
    option5A.textContent = questionObj[4].optionA;
    option5B.textContent = questionObj[4].optionB;
    option5C.textContent = questionObj[4].optionC;
    option5D.textContent = questionObj[4].optionD;
}


// Check Answer Functions 1 - 5 (Again, code is a mess... needs a loop.)
function checkAnswer1(answer) {
    if (answer === questionObj[0].answer) {
        // answer is correct
        timeLeft += 5;
        alert('Correct!');
        answerE1.removeAttribute("style", "display: block");
        createQuestion2();
    }
    else {
        timeLeft -= 10;
        alert('wrong answer!');
        answerE1.removeAttribute("style", "display: block");
        createQuestion2();
    }
}
function checkAnswer2(answer) {
    if (answer === questionObj[1].answer) {
        // answer is correct
        timeLeft += 5;
        alert('Correct!');
        answerE2.removeAttribute("style", "display: block");
        createQuestion3();
    }
    else {
        timeLeft -= 10;
        alert('wrong answer!');
        answerE2.removeAttribute("style", "display: block");
        createQuestion3();
    }
}
function checkAnswer3(answer) {
    if (answer === questionObj[2].answer) {
        // answer is correct
        timeLeft += 5;
        alert('Correct!');
        answerE3.removeAttribute("style", "display: block");
        createQuestion4();
    }
    else {
        timeLeft -= 10;
        alert('wrong answer!');
        answerE3.removeAttribute("style", "display: block");
        createQuestion4();
    }
}
function checkAnswer4(answer) {
    if (answer === questionObj[3].answer) {
        // answer is correct
        timeLeft += 5;
        alert('Correct!');
        answerE4.removeAttribute("style", "display: block");
        createQuestion5();
    }
    else {
        timeLeft -= 10;
        alert('wrong answer!');
        answerE4.removeAttribute("style", "display: block");
        createQuestion5();
    }
}
function checkAnswer5(answer) {
    if (answer === questionObj[4].answer) {
        // answer is correct
        timeLeft += 5;
        alert('Correct!');
        endGame();
    }
    else {
        timeLeft -= 10;
        alert('wrong answer!');
        endGame();
    }
}

// End Game function (code runs twice becasue timer doesn't stop at end of questions.)
function endGame() {
    timerEl.textContent = 'Times Up!';
    startBtn.removeAttribute("style", "display: unset");
    instructions.removeAttribute("style", "display: unset");
    questionEl.textContent = "JavaScript Quiz Challenge";
    timerEl.setAttribute("style", "display: none");
    answerE1.setAttribute("style", "display: none");
    answerE2.setAttribute("style", "display: none");
    answerE3.setAttribute("style", "display: none");
    answerE4.setAttribute("style", "display: none");
    answerE5.setAttribute("style", "display: none");
    clearTimeout(timer);
    alert('Game Over');
}

startBtn.onclick = timer; // Start the game





