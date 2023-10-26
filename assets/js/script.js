var pregameElement = document.getElementById("pre-game");
var timerElement = document.getElementById("timer");
var startButtonElement = document.getElementById("start-button")

var timer = 75;

function startQuiz() {
  pregameElement.hidden = true;
  startTimer();
  showQuiz();
}

function startTimer() {
  var timerInterval = setInterval(function() {
    timerElement.textContent = "Time: " + timer;
    timer--;
    if (timer < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time is up!"
    }
  }, 1000);
}

function showQuiz() {
  var h1El = document.createElement("h1");
  document.body.appendChild(h1El)
  h1El.innerHTML = quizQuestion
  h1El.setAttribute("style", "margin:auto; padding-top:40px; width:50%");
}

var quizQuestion = "Commonly used datatypes DO NOT include:";
/* var quizQuestion = [
{
    question: "Commonly used datatypes DO NOT include:",
    choices: ['1. string', '2. boolean', '3. alerts', '4. numbers'],
    answer: "3. alerts"
},
] */

startButtonElement.addEventListener("click", startQuiz)