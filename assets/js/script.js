// Variable declarations
var timerElement = document.getElementById('timer');
var pregameElement = document.getElementById('pre-game');
var startButtonElement = document.getElementById('start-button');
var quizContentElement = document.getElementById('quiz-content');
var questionsElement = document.getElementById('questions');
var choicesElement = document.getElementById('choices');
var answerElement = document.getElementById('answer');
var postGameElement = document.getElementById('post-game');
var submitButtonElement = document.getElementById('submit');
var scoreElement = document.getElementById('score'); 
var scoresElement = document.getElementById('scores');
var backButtonElement = document.getElementById('back-btn');
var scoreListEl = document.getElementById("score-list");
var noScoreEl = document.getElementById('no-score');
var initialsEl = document.getElementById('initials');
var clearButtonElement = document.getElementById('clear-btn');
var viewHighScoresButton = document.getElementById('view-high-scores');
var timer = 75;
var availableQuestions = [];
var currentQuestion = {};
var currentQuestionIndex = 0;
var score = 0;

// Function to start quiz
function startQuiz() {
  pregameElement.hidden = true;
  quizContentElement.hidden = false;
  availableQuestions = quizQuestions;
  startTimer();
  displayQuestion();
}

// Function to start timer
function startTimer() {
  timerInterval = setInterval(function() {
    timerElement.textContent = 'Time: ' + timer;
    timer--;
    if (timer < 0) {
      score = 0;
      postGame();
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Function to display question
function displayQuestion() {
  currentQuestion = availableQuestions[currentQuestionIndex];
  questionsElement.innerText = currentQuestion.question;
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement('button');
    button.innerText = currentQuestion.choices[i];
    button.setAttribute("class", "btn");
    button.addEventListener('click', function() {
      checkAnswer(choices);
      nextQuestions();
    })
    choicesElement.appendChild(button);
  }
}

// Function to check answer
function checkAnswer() {
  var selected = event.target.innerText;
  answerElement.innerHTML = '';
  var resultElement = document.createElement('h4');
  if (selected === currentQuestion.answer) {
    resultElement.innerText = "Correct!";
    resultElement.style.color = "Limegreen";
  } else {
    resultElement.innerText = "Wrong!";
    resultElement.style.color = "Red";
    timer -= 10;
  }
  answerElement.appendChild(resultElement);
}

// Function to display the next question
function nextQuestions() {
  currentQuestionIndex++;
  if (currentQuestionIndex < availableQuestions.length) {
    while (choicesElement.firstChild){
      choicesElement.removeChild(choicesElement.firstChild);
    }
    displayQuestion();  
  } else {
    calculateScore();
    postGame();
    clearInterval(timerInterval);
  }
}

// Function for end of the quiz
function postGame() {
  timerElement.hidden = true;
  quizContentElement.hidden = true;
  postGameElement.hidden = false;
  viewHighScoresButton.hidden = true;
  scoreElement.textContent = score + ".";
}

// Function to calculate and return the score
function calculateScore() {
  if (timer < 0) {
      timer = 0;
  }
  return score = timer;
}

// Function to display the score
function showScore(s) {
  postGameElement.hidden = true;
  quizContentElement.hidden = true;
  scoreElement.textContent = `${s}.`;
}
  
// Function to save the score
function saveScore(s) {
  scoresElement.hidden = false;
  postGameElement.hidden = true;
  var scoreData = {
    initials: initialsEl.value,
    score: s,
  };
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  highScores.push(scoreData);
  localStorage.setItem('highScores', JSON.stringify(highScores));
  initialsEl.value = '';
  fetchHighScores(); 
}

// Function to reset the quiz
function resetQuiz() {
  timer = 75;
  currentQuestionIndex = 0;
  timerElement.textContent = "Time: " + timer;
  scoresElement.hidden = true;
  pregameElement.hidden = false;
  viewHighScoresButton.hidden = false;
  timerElement.hidden = false;
  noScoreEl.hidden = true;
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild)
  }
}

// Function to fetch and display high scores 
function fetchHighScores() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const sortedScores = highScores.sort((a, b) => b.score - a.score); 
  scoreListEl.innerHTML = '';
  sortedScores.forEach((scoreData) => {
    const scoreLineEl = document.createElement('li');
    scoreLineEl.innerText = `${scoreData.initials} - ${scoreData.score}`;
    scoreListEl.appendChild(scoreLineEl);
  });
  viewHighScoresButton.hidden = true;
}

// Function to clear the score list
function clearScore() {
  while (scoreListEl.firstChild) {
    scoreListEl.removeChild(scoreListEl.firstChild);
  }
  noScoreEl.hidden = false;
  localStorage.clear();
}

// Function to view high scores
function viewHighScores() {
  pregameElement.hidden = true;
  quizContentElement.hidden = true;
  pregameElement.hidden = true;
  timerElement.hidden = true;
  scoresElement.hidden = false;
  fetchHighScores()
}

// Quiz questions
var quizQuestions = [
  {
    question: 'Commonly used datatypes DO NOT include:',
    choices: ['1. string', '2. boolean', '3. alerts', '4. numbers'],
    answer: '3. alerts'
  },
  {
    question: 'How do you write "Hello, World!" to the console in JavaScript?',
    choices: ['1. console.log("Hello, World!");', '2. print("Hello, World!");', '3. console.write("Hello, World!");', '4. alert("Hello, World!");'],
    answer: '1. console.log("Hello, World!");'
  },
  {
    question: 'The condition in an if/else statement is enclosed with _____',
    choices: ['1. "quotes"', '2. {curly braces}', '3. (parenthesis)', '4. [square brackets]'],
    answer: '3. (parenthesis)'
  },
  {
    question: 'What is the correct way to comment A SINGLE LINE of code in JavaScript?',
    choices: ['1. <!--Comment-->', '2. // Comment', '3. /* Comment */', '4. # Comment'],
    answer: '2. // Comment'
  },
  {
    question: 'Arrays in JavaScript can be used to store _____.',
    choices: ['1. numbers an strings', '2. booleans', '3. other arrays', '4. all of the above'],
    answer: '4. all of the above'
  },
  {
    question: 'Which property can you use in order to implement event delegation?',
    choices: ['1. event.target', '2. event.preventDefault()', '3. event.stopPropagation()', '4. event.addEventListener()'],
    answer: '1. event.target'
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    answer: '4. console.log'
  },
  {
    question: 'Which keyword is used to declare a variable in JavaScript?',
    choices: ['1. var', '2. int', '3. string', '4. true'],
    answer: '1. var'
  },
] 

// Event listeners
startButtonElement.addEventListener('click', startQuiz);
backButtonElement.addEventListener('click', resetQuiz);
clearButtonElement.addEventListener('click', clearScore);
submitButtonElement.addEventListener('click', () => {
  saveScore(score);
});
viewHighScoresButton.addEventListener('click', viewHighScores);