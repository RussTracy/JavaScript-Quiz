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

