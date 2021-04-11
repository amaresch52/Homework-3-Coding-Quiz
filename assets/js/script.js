var startButton = document.getElementById("startButton");
var countdownTimer = document.getElementById("countdownTimer");
var timer = 0;
var score = 0;
var questionIndex = 0;
var createUl = document.createElement("ul");
var timerCount = 45;
var createScore = document.getElementById("score");

var questionPool = [{
    question: "The condition in an if/else statement is enclosed within ____?",
    choices: ["parentheses","curly brackets","square brackets","an envelope"],
    correctAnswer: "parentheses",
    

},
{
    question: "Inside which HTML element do you link the JavaScript?",
    choices: ["<p>","<JS>","<script>","<scripts>"],
    correctAnswer: "<script>",
    

},
{
    question: "Commonly used data types do not include?",
    choices: ["strings","alerts","booleans","numbers"],
    correctAnswer: "alerts",
    

},
{
    question: "The first index of an array is?",
    choices: ["0","1","2","3"],
    correctAnswer: "0",
    

},
{
    question: "When is localStorage data cleared?",
    choices: ["No expiration time","Page reload","Browser close","First of the Month"],
    correctAnswer: "No expiration time",
    

}]

function startQuiz() {
    
   
    countdownTimer.setAttribute("value",timerCount);

    timer = setInterval(function() {
        timerCount--;
        countdownTimer.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            gameOver();
            questionPage();
        }

    }, 1000);
  containerPage();
  questionPage();
  render(questionIndex);
}

function questionPage(){
    var questions = document.getElementById('quizQuestions');
    if (questions.style.display === "none") {
        questions.style.display = "block";
    } else {
        questions.style.display = "none";
    }
}

function containerPage() {
    var container = document.getElementById('container');
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

function render(questionIndex) {
    createUl.innerHTML = "";
    for (var i =0; i < questionPool.length; i++) {
        var userQuestion = questionPool[questionIndex].question;
        var userChoices = questionPool[questionIndex].choices;
        quizQuestions.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizQuestions.appendChild(createUl);
        createUl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}


function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        
        if (element.textContent == questionPool[questionIndex].correctAnswer) {
            score += 5;
            createDiv.textContent = "Correct!" ; 
           
        } else {
            
            timerCount = timerCount - 10;
            createDiv.textContent = "Wrong! The correct answer is:  " + questionPool[questionIndex].correctAnswer;
        }

    }
   
    questionIndex++;

    if (questionIndex >= questionPool.length) {
        gameOver();
        createDiv.textContent = "Game Over";
    } else {
        render(questionIndex);
    }
    quizQuestions.appendChild(createDiv);

}

function gameOver() {
    clearInterval(timer);

    var endGame = document.getElementById('endGame');
    if (endGame.style.display === "none") {
        endGame.style.display = "block";
    } else {
        endGame.style.display = "none";
    }

    if (timerCount >= 0) {
        var timeRemaining = timerCount;
        
    createScore.innerHTML = "Final Score: "+ score + timeRemaining;
}

questionPage();
   
}

startButton.addEventListener("click", startQuiz);