
let questions = [ //Quiz questions and answers
  { question: "Commonly used data types DO NOT include?", answers: ["strings", "booleans", "alerts", "numbers"], correct: "alerts" },

  { question: "The condition in an If/Else statement is enclosed by?", answers: ["quotes", "curly brackets", "parenthesis", "square brackets"], correct: "parenthesis" },

  { question: "Arrays in javascript can be used to store?", answers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correct: "all of the above" },

  { question: "String values must be enclosed within ________ when being assigned to variables?", answers: ["commas", "curly brackets", "quotes", "parenthesis"], correct: "quotes" },

  { question: "A very useful tool used during development and debugging for printing content to the debugger is", answers: ["javascript", "terminal bash", "for loops", "console log"], correct: "console log" },
];


var questionLog = 0; //records the user's answer choice for each question
var playerTime = 0;
var timer;
var counter = 60;
var playerInitials = "";
var endOfQuiz = 1; //when no time is left


function displayQuestion() { //displays the question and enables the comparison between correct answer and player choice of answer
  document.getElementById("question").innerHTML =
    questions[questionLog].question;
  document.getElementById("answer-0").innerHTML =
    questions[questionLog].answers[0];
  document.getElementById("answer-1").innerHTML =
    questions[questionLog].answers[1];
  document.getElementById("answer-2").innerHTML =
    questions[questionLog].answers[2];
  document.getElementById("answer-3").innerHTML =
    questions[questionLog].answers[3];
}

function startQuiz() { // This fcn calls the Quiz screen, and then calls the display question fcn when user hits "start quiz" button.
  var quizScreen = document.getElementById("quizSection");
  var quizInstructions = document.getElementById("quizDirections");
  var timerTime = document.getElementById("timerText");
  timerTime.classList.remove("invisible");
  quizInstructions.classList.add("invisible");
  quizScreen.classList.remove("invisible");
  quizScreen.classList.add("startScreen");
  displayQuestion();
}
function saveToStorage(playerEvent) { // A playerEvent is one instance of player initials and player score.
  var history = JSON.parse(localStorage.getItem('scores')) || []
  console.log(history);
  history.push(playerEvent)
  localStorage.setItem('scores', JSON.stringify(history))
  renderHistory()
}

function endQuiz() { 
  endOfQuiz = 0;
  playerTime = counter;
  console.log(playerTime);
  alert("All Done! Your final score is " + playerTime); //displays player's score
  let playerInitials = prompt("Enter initials:");
  const playerEvent = { //load player initials and player time into playerEvent
    playerInitials,
    playerTime,
  }
  console.log(JSON.stringify(playerEvent));
  saveToStorage(playerEvent)
  }


function renderHistory() {
  console.log("rendering")
  var history = JSON.parse(localStorage.getItem('scores')) || []
  console.log(history);
  var pastScores = document.getElementById('quizHistory')
pastScores.innerHTML = ""
  if(pastScores.length >5){ //this is my attempt to limit the score display to 5 iterations but I ran out of time debugging it
  for (let i = pastScores.length-5; i < pastScores.length; i++) {
   const element = array[i];
       }
  }

  for (const score of history) { //writes scores from local storage to screen
    pastScores.innerHTML += `<li>`
    console.log(score)
    for (const key in score) {
      if (Object.hasOwnProperty.call(score, key)) {

        if (key === 'playerInitials') {
          pastScores.innerHTML += `${score[key]} : `
        }
        if (key === 'playerTime') {
          pastScores.innerHTML += `${score[key]}`
        }
        const value = score[key];
        console.log(value)

      }
    }
    pastScores.innerHTML += `</li>`
  }
}

renderHistory()

function countdown() {  // Sets interval, counts down, clears
  document.getElementById("counter").innerHTML = counter;
  timer = setInterval(function () {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    if (counter === 0 || endOfQuiz === 0) {
      clearInterval(timer);
    }
  }, 1000);
}


function nextQuestion() { //calls the next quiz question for the number of quiz questions and then calls the end quiz fcn
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}



//Lines 128 through 209 evaluate the user's choice against the correct answer for each question and penalize wrong answers 10 seconds.
//It works, but I worked long and hard on a more efficiewnt solution which I have left commented in lines 212 -232
//because I ran out of time debugging the more efficient solution
document.getElementById("answer-0").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");

    document.getElementById("result").innerHTML = "CORRECT!"
  } else {
    console.log("Wrong!");

    document.getElementById("result").innerHTML = "Wrong!"
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});


document.getElementById("answer-1").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");

    document.getElementById("result").innerHTML = "Correct!"
  } else {
    console.log("wrong");

    document.getElementById("result").innerHTML = "Wrong!"
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});



document.getElementById("answer-2").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");

    document.getElementById("result").innerHTML = "Correct!"
  } else {
    console.log("Wrong!");

    document.getElementById("result").innerHTML = "Wrong!"

    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});



document.getElementById("answer-3").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");

    document.getElementById("result").innerHTML = "Correct!"
  } else {
    console.log("wrong");

    document.getElementById("result").innerHTML = "Wrong!"

    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});

/*{ Lines 214 through 233 are my attempt to consoldiate the repetitive steps of line 128 through 209 
  with the display question function, but I ran out of time debugging it.
   function displayQuestion() 
  document.getElementById("question").innerHTML =questions[questionLog].question;
  for(let i=0; i< questions.length; i++){
    document.getElementById(`answer-${i}`).innerHTML = questions[questionLog].answers[i];
    document.getElementById(`answer-${i}`).addEventListener("click", function (event) {
      event.preventDefault()
      if (this.textContent === questions[questionLog].correct) {
        console.log("correct");
        document.getElementById("result").innerHTML ="CORRECT!"
      } else {
        console.log("Wrong!");
        document.getElementById("result").innerHTML ="Wrong!"
        counter = counter - 10;
      }
      nextQuestion()

  })
 }
}*/

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("startButton").addEventListener("click", countdown);
   









