// Variable declarations
var viewHighScoresElement = document.getElementById('view-high-scores');
var timerElement = document.getElementById('timer');
var pregameElement = document.getElementById('pre-game');
var startButtonElement = document.getElementById('start-button');
var quizContentElement = document.getElementById('quiz-content');
var questionsElement = document.getElementById('questions');
var choicesElement = document.getElementById('choices');
var answerElement = document.getElementById('answer');
var postGameElement = document.getElementById('post-game');
var scoreElement = document.getElementById('score');
var initialsElement = document.getElementById('initials');
var submitButtonElement = document.getElementById('submit'); 
var scoresElement = document.getElementById('scores');
var noScoreElement = document.getElementById('no-score');
var scoreListElement = document.getElementById("score-list");
var backButtonElement = document.getElementById('back-btn');
var clearButtonElement = document.getElementById('clear-btn');
var footerElement = document.getElementById('copyright');
var timer = 75;  // Initialize timer to 75 seconds
var availableQuestions = [];  // Initialize an array to store quiz questions
var currentQuestion = {};  // Initialize an object to store the current question
var currentQuestionIndex = 0;  // Initialize the index of the current question
var score = 0;  // Initialize the player's score

// Array of quiz questions
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
    question: 'Which operator is used for strict equality comparison in JavaScript?',
    choices: ['1. ==', '2. ===', '3. =', '4. !='],
    answer: '2. ==='
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    answer: '4. console.log'
  },
  {
    question: 'What is the result of the expression: 5 + "3" in JavaScript?',
    choices: ['1. 53', '2. 8', '3. "53"', '4. NaN'],
    answer: '3. "53"'
  },
  {
    question: 'Which keyword is used to declare a variable in JavaScript?',
    choices: ['1. var', '2. int', '3. string', '4. true'],
    answer: '1. var'
  },
] 

// Function to start the quiz
function startQuiz() {
  pregameElement.hidden = true;  // Hide the pre-game section
  footerElement.hidden = true ;  // Hide the footer section
  quizContentElement.hidden = false;  // Show the quiz content section
  availableQuestions = quizQuestions;  // Populate available questions with quizQuestions
  startTimer();  // Start the countdown timer
  displayQuestion();  // Display the first question
}

// Function to start the countdown timer
function startTimer() {
  timerInterval = setInterval(function() {
    timerElement.textContent = 'Time: ' + timer;  // Update the displayed timer
    timer--;  // Decrement the timer
    if (timer < 0) {
      score = 0;  // If time is up, set the score to 0
      postGame();  // End the game
      clearInterval(timerInterval);  // Stop the timer
    }
  }, 1000);
}

// Function to display a question
function displayQuestion() {
  currentQuestion = availableQuestions[currentQuestionIndex];  // Get the current question
  questionsElement.innerText = currentQuestion.question;  // Display the question text
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement('button');  // Create a button for each answer choice
    button.innerText = currentQuestion.choices[i];  // Set the button text
    button.setAttribute("class", "btn");  // Add a CSS class
    button.addEventListener('click', function() {
      checkAnswer(choices);  // Check the selected answer
      nextQuestions();  // Proceed to the next question
    });
    choicesElement.appendChild(button);  // Add the button to the choices section
  }
}

// Function to check the answer
function checkAnswer() {
  var selected = event.target.innerText;  // Get the selected answer
  answerElement.innerHTML = '';  // Clear the answer display
  var resultElement = document.createElement('h4');  // Create an element to display the result
  if (selected === currentQuestion.answer) {
    resultElement.innerText = "Correct!";  // If the answer is correct
    resultElement.style.color = "Limegreen";  // Set text color to green
  } else {
    resultElement.innerText = "Wrong!";  // If the answer is wrong
    resultElement.style.color = "Red";  // Set text color to red
    timer -= 10;  // Subtract 10 seconds from the timer
  }
  answerElement.appendChild(resultElement);  // Display the result
}

// Function to display the next question
function nextQuestions() {
  currentQuestionIndex++;  // Move to the next question
  if (currentQuestionIndex < availableQuestions.length) {
    while (choicesElement.firstChild){
      choicesElement.removeChild(choicesElement.firstChild);  // Remove previous answer choices
    }
    displayQuestion();  // Display the next question
  } else {
    calculateScore();  // Calculate the player's score
    postGame();  // End the game
    clearInterval(timerInterval);  // Stop the timer
  }
}

// Function for the end of the quiz
function postGame() {
  timerElement.hidden = true;  // Hide the timer display
  quizContentElement.hidden = true;  // Hide the quiz content section
  viewHighScoresElement.hidden = true;  // Hide the "View High Scores" link
  postGameElement.hidden = false;  // Show the post-game section
  scoreElement.textContent = score + ".";  // Display the player's final score
}

// Function to calculate and return the player's score
function calculateScore() {
  if (timer < 0) {
    timer = 0;  // Ensure the timer is not negative
  }
  return score = timer;  // Calculate the score based on the remaining time
}

// Function to display the score
function showScore(s) {
  postGameElement.hidden = true;  // Hide the post-game section
  quizContentElement.hidden = true;  // Hide the quiz content section
  scoreElement.textContent = `${s}.`;  // Display the player's score
}
  
// Function to save the player's score
function saveScore(s) {
  postGameElement.hidden = true;  // Hide the post-game section
  scoresElement.hidden = false;  // Show the high scores section
  var scoreData = {
    initials: initialsElement.value,
    score: s,
  };
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  highScores.push(scoreData);  // Add the score to the high scores
  localStorage.setItem('highScores', JSON.stringify(highScores));  // Store the high scores in local storage
  initialsElement.value = '';  // Clear the initials input field
  fetchHighScores();  // Fetch and display high scores
}

// Function to reset the quiz
function resetQuiz() {
  timer = 75;  // Reset the timer to 75 seconds
  currentQuestionIndex = 0;  // Reset the question index
  timerElement.textContent = "Time: " + timer;  // Update the timer display
  scoresElement.hidden = true;  // Hide the high scores section
  noScoreElement.hidden = true;  // Hide the "No scores saved!" message
  pregameElement.hidden = false;  // Show the pre-game section
  viewHighScoresElement.hidden = false;  // Show the "View High Scores" link
  timerElement.hidden = false;  // Show the timer display
  footerElement.hidden = false;  // Show the footer section
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);  // Remove answer choices
  }
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);  // Clear the answer display
  }
}

// Function to fetch and display high scores 
function fetchHighScores() {
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  var sortedScores = highScores.sort((a, b) => b.score - a.score);  // Sort high scores in descending order
  scoreListElement.innerHTML = '';  // Clear the high scores list
  sortedScores.forEach((scoreData) => {
    var scoreLineEl = document.createElement('li');  // Create a list item for each high score
    scoreLineEl.innerText = `${scoreData.initials} - ${scoreData.score}`;  // Display the initials and score
    scoreListElement.appendChild(scoreLineEl);  // Add the list item to the high scores list
  });
  viewHighScoresElement.hidden = true;  // Hide the "View High Scores" link
}

// Function to clear the score list
function clearScore() {
  while (scoreListElement.firstChild) {
    scoreListElement.removeChild(scoreListElement.firstChild);  // Remove all high scores
  }
  noScoreElement.hidden = false;  // Show the "No scores saved!" message
  localStorage.clear();  // Clear high scores from local storage
}

// Function to view high scores
function viewHighScores() {
  pregameElement.hidden = true;  // Hide the pre-game section
  quizContentElement.hidden = true;  // Hide the quiz content section
  pregameElement.hidden = true;  // Hide the pre-game section
  timerElement.hidden = true;  // Hide the timer display
  footerElement.hidden = true ;  // Hide the footer section
  scoresElement.hidden = false;  // Show the high scores section
  fetchHighScores();  // Fetch and display high scores
  clearInterval(timerInterval);  // Stop the timer
}

// Event listeners
startButtonElement.addEventListener('click', startQuiz);
backButtonElement.addEventListener('click', resetQuiz);
clearButtonElement.addEventListener('click', clearScore);
submitButtonElement.addEventListener('click', function() {
  saveScore(score);  // Save the player's score
});
viewHighScoresElement.addEventListener('click', viewHighScores);