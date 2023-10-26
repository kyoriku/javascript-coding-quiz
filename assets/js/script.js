// Variable declarations
var pregameElement = document.getElementById('pre-game');
var timerElement = document.getElementById('timer');
var startButtonElement = document.getElementById('start-button')
var timer = 75;

// Function to start the quiz
function startQuiz() {
  hideElement(pregameElement);
  startTimer();
  showQuiz();
}

// Function to start the timer
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

function showQuiz() {
  var h1El = document.createElement('h1');
  document.body.appendChild(h1El)
  h1El.innerHTML = quizQuestion
  h1El.setAttribute('style', 'margin:auto; padding-top:40px; width:50%');
}

var quizQuestion = 'Commonly used datatypes DO NOT include:';

// Quiz questions
var quiz = [
  {
    question: 'Commonly used datatypes DO NOT include:',
    choices: ['1. string', '2. boolean', '3. alerts', '4. numbers'],
    answer: '3. alerts'
  },
  {
    question: 'The condition in an if/else statement is enclosed with ____.',
    choices: ['1. quotes', '2. curly braces', '3. parenthesis', '4. square brackets'],
    answer: '3. parenthesis'
  },
  {
    question: 'Arrays in JavaScript can be used to store ____.',
    choices: ['1. numbers an strings', '2. booleans', '3. other arrays', '4. all of the above'],
    answer: '4. all of the above'
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    answer: '4. console.log'
  },
  {
    question: 'Which property can you use in order to implement event delegation?',
    choices: ['1. event.target', '2. event.preventDefault()', '3. event.stopPropagation()', '4. event.addEventListener()'],
    answer: '1. event.target'
  }
] 

// Function to hide an element
function hideElement(element) {
  element.setAttribute('class', 'hide');
}

// Event listeners
startButtonElement.addEventListener('click', startQuiz)