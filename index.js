'use strict';

//Because this app is relatively simple, I have set the below 
//variables as globals 

let questionNumber = 0;
let score = 0; 

//listens for when user clicks "Begin", then hides start page renders first question set. The javaScript CSS rule below overrides the rule in the CSS stylesheet which set to "none"
function handleStartButton() {
  $('.startPage').on('click', '.js-start-button', function (event){
    score = 0;
    questionNumber = 0;
    $('.startPage').hide();
    $('.startPageMsg').hide();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
    $('html, body').animate({
      scrollTop: $('.questionAnswerForm').offset().top
    }, 500);
  });
}

//returns template of answer options in radio buttons, updates with question user is currently on
//renders a template string with javascript expressions
function generateQuestionElement(){
  if (questionNumber < STORE.length) {
  return `
    <form class='questionForm'>
    <fieldset role="radiogroup" aria-labelledby="questionText">
      <legend id="questionText">"${STORE[questionNumber].question}"</legend>
      <label for="answer-1" class="answerOption">
      <input id="answer-1" type="radio" role="radio" value="${STORE[questionNumber].answers[0]}" name="answer"   required>
      <span>${STORE[questionNumber].answers[0]}</span>
      </label>
      <label for="answer-2" class="answerOption">
      <input id="answer-2" type="radio" role="radio" value="${STORE[questionNumber].answers[1]}" name="answer"  required>
      <span>${STORE[questionNumber].answers[1]}</span>
      </label>
      <label for="answer-3" class="answerOption">
      <input id="answer-3" type="radio" role="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
      <span>${STORE[questionNumber].answers[2]}</span>
      </label>
      <label for="answer-4" class="answerOption">
      <input id="answer-4" type="radio" role="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
      <span>${STORE[questionNumber].answers[3]}</span>
      </label>
      <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>`;
  }
  else {
    renderFinalScore();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}
//line 52 and 53 renter the final score and then restart the 
//quiz, because questionNumber is as at the end of STORE.length
//therefore the code knows it is at the end of the quiz
//line 54 will put a 10 (hardcode) in question number 
//to show we are still at the end of the quiz 

//below increments question number, when questionNumber is called inside STORE it references whichever question in the STORE the user is currently on
//1 is being added to questionNumber because question index 
//starts at 0 but needs to presented as 1 over that
function changeQuestionNumber() {
    questionNumber ++;
  $('.questionNumber').text(questionNumber + 1);
}

//increment score
function changeScore() {
  score ++;
}

//update score number
function updateScore() {
  changeScore();
  $('.score').text(score);
}

//.html is a method that returns a string parsed into the html
//this renders the question in the DOM
function renderQuestion() {
 $('.questionAnswerForm').html(generateQuestionElement()); 
}

function renderNextQuestion() {
  $('.questionAnswerForm').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
  });
}

//listens for when user hits "Submit" button on answer page, then returns message saying whether it was correct or incorrect along with appropriate image
//classes are added to selected parents for styling purposes


//QUESTION: can i get rid of the logic if I don't need to add classes?
function handleSubmitButton() {
  $('.questionAnswerForm').on('submit', '.questionForm', function (event){
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      ifCorrectAnswer();
  }  else {
      ifWrongAnswer();
  }
    $('html, body').animate({
      scrollTop: $('.correctAnswerMessage').offset().top
      }, 500);
  });
}

function ifCorrectAnswer() {
  userAnswerCorrect();
  updateScore();
}

function ifWrongAnswer() {
  userAnswerWrong();
}
  
//returns message and image to user if submit correct answer
function userAnswerCorrect() {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctAnswerMessage">
  <div class="image">
  <img src="${STORE[questionNumber].image}" alt="${STORE[questionNumber].alt}"/>
  <p class="imageDescription">${STORE[questionNumber].imageDescription}</p>
  <p><span>Correct! The Bhagwan smiles upon you.</span></p>
  <button type=button class="nextButton">Next</button></div>`);
}

//returns message and image to user if submit wrong answer
function userAnswerWrong() {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class = "correctAnswerMessage">
  <div class="image">
  <img src="${STORE[questionNumber].image}" alt ="${STORE[questionNumber].alt}"/>
  <p class="imageDescription">${STORE[questionNumber].imageDescription}</p>
  <p><span>Incorrect. You have made Bhagwan sad.</span></p>
  <button type=button class="nextButton">Next</button></div>`);
}


//denerates score of 0-10 reflecting how well user did. Displays one of 3 images based on "grade" with accompanying message
function renderFinalScore() {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results userAnswerCorrect"><h3>You are well on your way to enlightenment!</h3><img src="https://s3.scoopwhoop.com/anj/sk/85a4b61f-643b-4753-a5a6-8d1f2b11c02f.jpg" alt="Bhagwan praises his devoted disciple"/><p>You got ${score} / 10</p><p>You have proven your loyalty and the Bhagwan would like to take you for a ride in one of his many Rolls Royces</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results userAnswerCorrect"><h3>You are on the right path, grasshopper</h3><img src="https://i.imgur.com/WQfWH7O.jpg" alt="Bhagwan teaching his disciples"/><p>You got ${score} / 10</p><p>Remember to meditate and listen to the Bhagwan's wise words every day and you too will one day reach enlightenment</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results userAnswerCorrect"><h3>You might not be suited for life on the commune after all</h3><img src="https://i.imgur.com/OCsmV4X.jpg" alt="Disciples in a pickup truck"/><p>You got ${score} / 10</p><p>Here, have this drugged beer. When you wake up you'll be somewhere else. We're not sure where, but definitely not here.</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

function restartQuiz() {
  $('.questionAnswerForm').on('click', '.restartButton', (event)=>{
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
    $('.startPage').show();
    $('.startPageMsg').show();
    renderQuestion();
    $('.questionAnswerForm').hide();
  }
  )
}

//this is the callback function. All of these functions are 
//called to build the script of the first page of the app
function handleQuiz() {
  handleStartButton();
  renderQuestion();
  renderNextQuestion();
  handleSubmitButton();
}

//when page loads, call handleQuiz(), used in jQuery 3
//calling in jQuery ensures page will load properly across
//several different internet connections
$(handleQuiz);