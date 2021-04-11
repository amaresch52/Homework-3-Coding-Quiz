var startButton = document.getElementById("startButton");
var countdownTimer = document.getElementById("countdownTimer");
//var container = document.getElementById('container')
var timer;
//var timerCount;
var score;
var questionIndex = 0;
var createUl = document.createElement("ul");
var timerCount = 45;

var questionPool = [{
    question: "ipsum",
    choices: ["69","72","89","98"],
    correctAnswer: "69",
    

},
{
    question: "ire",
    choices: ["69","72","89","98"],
    correctAnswer: "89",
    

},
{
    question: "ipole",
    choices: ["69","72","89","98"],
    correctAnswer: "98",
    

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
            score++;
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

questionPage();
   
}

startButton.addEventListener("click", startQuiz);