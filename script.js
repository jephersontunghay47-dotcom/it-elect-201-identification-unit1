/*
=====================================================
QUESTION BANK
=====================================================

ADD NEW QUESTIONS HERE.

Example:

{
    question: "What is a blueprint for creating objects?",
    answers: [
        "class"
    ]
},

If there are multiple acceptable answers:

{
    question: "What is another name for an attribute?",
    answers: [
        "field",
        "variable"
    ]
}

=====================================================
*/

const questionBank = [

    {
        question:
            "What do we call one thing built from a class, holding its own values?",
        answers: [
            "object"
        ]
    },

    {
        question:
            "Which keyword actually creates an object from a class?",
        answers: [
            "new"
        ]
    },

    {
        question:
            "What does a reference variable hold while it refers to no object at all?",
        answers: [
            "null"
        ]
    },

    {
        question:
            "Enumerate the four pillars of object-oriented programming.",
        answers: [
            "encapsulation, abstraction, inheritance, polymorphism",
        ]
    },

    {
        question:
            "Every object made from a class gets its own copy of each variable the class declares, and each  such variable is called an ――――――.",
        answers: [
            "attribute"
        ]
    },

    {
        question:
            "A water-refilling station registers each household once, with a name and an address. Every delivery records the date, the gallons taken, the price per gallon on that day, and which household ordered it. Name the two classes implicit in this description.",
        answers: [
            "Household, Delivery"
        ]
    },

    {
        question:
            "Should the price per gallon sit on the household or on the delivery?",
        answers: [
            "the delivery"
        ]
    },

    {
        question:
            "Which pillar is at work when a setter refuses to accept a negative age?",
        answers: [
            "encapsulation"
        ]
    },

    {
        question:
            "In procedural programming the unit of organization is the procedure, so what is it in object-oriented  programming? ",
        answers: [
            "the object"         
        ]
    },

    {
        question:
            "What do we call a block that runs once at creation, carries the class's own name, and declares no  return type? ",
        answers: [
            "constructor"         
        ]
    },

    {
        question:
            "Enumerate the three advantages of OOP named in this unit.",
        answers: [
            "reusability, maintainability, scalability"
        ]
    },

    {
        question:
            "Assigning one reference variable to another copies the ――――――, not the object itself.",
        answers: [
            "reference"
        ]
    },

    {
        question:
            "The values an object's attributes hold at one moment are its ――――――, while what its methods let it do is its behavior.",
        answers: [
            "state"
        ]
    },

    {
        question:
            "Should the fare sit on the driver or on the trip?",
        answers: [
            "the trip"
        ]
    },

    {
        question:
            "Would putting the fare on the driver still record last week's trip correctly",
        answers: [
            "no"
        ]
    },    

     {
        question:
            "Which access modifier makes a member reachable only inside its own class?",
        answers: [
            "private"
        ]
    },    

     {
        question:
            "Which access modifier opens a member to subclasses as well?",
        answers: [
            "protected"
        ]
    },    

    {
        question:
            "What is the other word for an object, used when you want to stress which class it came from?",
        answers: [
            "instance"
        ]
    },    

    {
        question:
            "What do we call a variable declared inside a method rather than inside the class body?",
        answers: [
            "local variable"
        ]
    },    

    {
        question:
            "Enumerate the three practical guarantees object-oriented programming provides.",
        answers: [
            "one rule, one place, nobody can reach in, new kinds cost nothing"
        ]
    },    

    {
        question:
            "The act of creating an object from a class, using new, is called ――――――.",
        answers: [
            "instantiation"
        ]
    },    

    {
        question:
            "this restates the unit's own definition of instantiation: creating an object from a class using  new. A photocopy shop registers each regular customer once, with a name and a contact number. Every job records the number of pages, the paper size, and the customer who ordered it. Should the page count sit on the customer or on the job?",
        answers: [
            "the job"
        ]
    },   

    {
        question:
            "Would the customer's contact number change from one job to the next? ",
        answers: [
            "no"
        ]
    },   

    {
        question:
            "Which pillar lets you call a ready-made method without ever seeing how it works inside? ",
        answers: [
            "abstraction"
        ]
    },   

    {
        question:
            "What do we call the whole set of methods a class offers? ",
        answers: [
            "behavior"
        ]
    },   

    {
        question:
            "Which error is thrown when a method is called through a reference that holds null?",
        answers: [
            "NullPointerException"
        ]
    },   

    {
        question:
            "Enumerate the three things new does when it creates an object. ",
        answers: [
            "sets aside memory, runs the constructor, returns a reference "
        ]
    },   

    {
        question:
            "A variable that holds an object's location rather than the object itself is a ――――――.",
        answers: [
            "reference"
        ]
    },   

    {
        question:
            "Keeping an object's data private and letting the outside reach it only through methods the class  chooses is called ――――――.",
        answers: [
            "encapsulation"
        ]
    },   

    {
        question:
            "Should the quantity sit on the vendor or on the sale? ",
        answers: [
            "the sale"
        ]
    },   

    {
        question:
            "Would two sales made by the same vendor always carry the same quantity? ",
        answers: [
            "no"
        ]
    },   
]
/* ==============================
   QUIZ VARIABLES
============================== */

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;


/* ==============================
   NORMALIZE ANSWER
============================== */

function normalizeAnswer(answer) {
    return answer
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}


/* ==============================
   SHUFFLE
============================== */

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


/* ==============================
   START QUIZ
============================== */

function startQuiz() {

    questions = shuffle(questionBank);

    currentQuestion = 0;
    score = 0;
    answered = false;

    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";

    showQuestion();
}


/* ==============================
   SHOW QUESTION
============================== */

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("progressBar").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    const input = document.getElementById("answerInput");

    input.value = "";
    input.disabled = false;

    document.getElementById("checkButton").style.display =
        "inline-block";

    document.getElementById("nextButton").style.display =
        "none";

    const feedback = document.getElementById("feedback");

    feedback.className = "feedback";
    feedback.style.display = "none";
    feedback.innerHTML = "";

    answered = false;

    input.focus();
}


/* ==============================
   CHECK ANSWER
============================== */

function checkAnswer() {

    if (answered) {
        return;
    }

    const input = document.getElementById("answerInput");

    const userAnswer = normalizeAnswer(input.value);

    if (userAnswer === "") {
        alert("Please type your answer first.");
        input.focus();
        return;
    }

    const question = questions[currentQuestion];

    const isCorrect = question.answers.some(
        answer => normalizeAnswer(answer) === userAnswer
    );

    const feedback = document.getElementById("feedback");

    if (isCorrect) {

        score++;

        feedback.className = "feedback correct";

        feedback.innerHTML =
            `<strong>Correct!</strong><br>
             Your answer: ${input.value}`;

    } else {

        feedback.className = "feedback wrong";

        feedback.innerHTML =
            `<strong>Incorrect.</strong><br>
             Correct answer:
             <strong>${question.answers[0]}</strong>`;
    }

    feedback.style.display = "block";

    input.disabled = true;

    document.getElementById("checkButton").style.display =
        "none";

    document.getElementById("nextButton").style.display =
        "inline-block";

    answered = true;
}


/* ==============================
   NEXT QUESTION
============================== */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


/* ==============================
   SHOW RESULT
============================== */

function showResult() {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;

    const percentage =
        (score / questions.length) * 100;

    let message;

    if (percentage === 100) {

        message =
            "Perfect! You got everything correct.";

    } else if (percentage >= 80) {

        message =
            "Great job! Review the questions you missed.";

    } else if (percentage >= 60) {

        message =
            "Good effort. Keep reviewing the lesson.";

    } else {

        message =
            "Keep practicing and try the quiz again.";
    }

    document.getElementById("resultMessage").textContent =
        message;
}


/* ==============================
   ENTER KEY
============================== */

document.getElementById("answerInput").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            if (!answered) {
                checkAnswer();
            } else {
                nextQuestion();
            }
        }
    }
);


/* ==============================
   START
============================== */

startQuiz();
