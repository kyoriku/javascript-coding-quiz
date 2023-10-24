document.getElementById("start-button").addEventListener(
  "click",
  () => {
    document.getElementById("pregame").hidden = true;
  }
);

document.getElementById("start-button").addEventListener("click", function(){
  var timeleft = 75;

  var downloadTimer = setInterval(function function1(){
  document.getElementById("countdown").innerHTML = "Time: " + timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
  }
  }, 1000);
});