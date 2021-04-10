var startButton = document.getElementById("startButton");
var countdownTimer = document.getElementById("countdownTimer");
//var container = document.getElementById('container')
var timer;
var timerCount;

function startQuiz() {
    var timerCount = 60;
    countdownTimer.setAttribute("value",timerCount);

    timer = setInterval(function() {
        timerCount--;
        countdownTimer.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }

    }, 1000);
  containerPage()
}

function containerPage() {
    var container = document.getElementById('container');
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

startButton.addEventListener("click", startQuiz);