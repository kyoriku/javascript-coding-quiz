var pregameEl = document.getElementById("pregame");
var timerEl = document.getElementById("timer");
var startButtonEl = document.getElementById("start-button")

var timer = 75;

function startQuiz() {
  pregameEl.hidden = true;
  timerStart();
  showQuiz();
}

function timerStart() {
  var timerInterval = setInterval(function() {
    timerEl.textContent = "Time: " + timer;
    timer--;
    if (timer < 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Time is up!"
    }
  }, 1000);
}

function showQuiz() {
  var h1El = document.createElement("h1");
  document.body.appendChild(h1El)
  h1El.innerHTML = quizQuestion
  h1El.setAttribute("style", "margin:auto; padding-top:40px; width:50%");
}

var quizQuestion = "Commonly used datatypes DO NOT include:"
/* var quizQuestion = [
{
    question: "Commonly used datatypes DO NOT include:",
    choices: ['1. string', '2. boolean', '3. alerts', '4. numbers'],
    answer: "3. alerts"
},
] */

startButtonEl.addEventListener("click", startQuiz)