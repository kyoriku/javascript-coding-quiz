// Variable declarations
var timerElement = document.getElementById('timer');
var pregameElement = document.getElementById('pre-game');
var startButtonElement = document.getElementById('start-button');
var quizContentElement = document.getElementById('quiz-content');
var questionsElement = document.getElementById('questions');
var choicesElement = document.getElementById('choices');
var timer = 75;
var availableQuestions = [];
var currentQuestion = {};
var currentQuestionIndex = 0;

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
  var timerInterval = setInterval(function() {
    timerElement.textContent = 'Time: ' + timer;
    timer--;
    if (timer < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = 'Time is up!'
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
    choicesElement.appendChild(button);
  }
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
    choices: ['1. console.write("Hello, World!");', '2. print("Hello, World!");', '3. console.log("Hello, World!");', '4. alert("Hello, World!");'],
    answer: '3. console.log("Hello, World!")'
  },
  {
    question: 'The condition in an if/else statement is enclosed with _____',
    choices: ['1. "quotes"', '2. {curly braces}', '3. (parenthesis)', '4. [square brackets]'],
    answer: '3. (parenthesis)'
  },
  {
    question: 'What is the correct way to comment a single line of code in JavaScript?',
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
] 

/* // Function to hide an element
function hideElement(element) {
  element.setAttribute('class', 'hide');
}

// Function to show an element
function showElement(element) {
  element.removeAttribute('class', 'hide');
} */

// Event listeners
startButtonElement.addEventListener('click', startQuiz)