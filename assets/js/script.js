var pregameEl = document.getElementById("pregame");
var timerEl = document.getElementById("timer");
var startButtonEl = document.getElementById("start-button")
var startGameEl = document.getElementById("quiz-game")

var timer = 75;

function startQuiz() {
  pregameEl.hidden = true;
  startGameEl.hidden = false;
  timerStart();
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

startButtonEl.addEventListener("click", startQuiz)

/*
document.getElementById("start-button").addEventListener(
  "click",
  () => {
    document.getElementById("pregame").hidden = true;
    document.getElementById("quiz-game").hidden = false;
  },
  false,
);

document.getElementById("start-button").addEventListener("click", function(){
  var timeleft = 75;
  var coundownTimer = setInterval(function function1(){
  document.getElementById("countdown").innerHTML = "Time: " + timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(coundownTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
  }
  }, 1000);
}); */