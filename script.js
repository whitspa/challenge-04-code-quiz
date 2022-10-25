//preliminary thinking:..
//const question = Array of objects
//loop through it with a user keydown and a fcn to verify user answer something like:
//document.addEventListener["keydown",function(tbd){
    
   // console.log();
    //tbd.key === question[i];
    //hiddenAnswer[i] =tbd.key;
    //question.textContent = hiddenAnswer;
    //}];
    
  let questions = [
  { question: "Commonly used data types DO NOT include?", answers: ["strings", "booleans", "alerts", "numbers"], correct: "alerts" },

  { question: "The condition in an If/Else statement is enclosed by?", answers: ["quotes", "curly brackets", "parenthesis", "square brackets"], correct: "parenthesis" },

  { question: "Arrays in javascript can be used to store?", answers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correct: "all of the above" },

  { question: "String values must be enclosed within ________ when being assigned to variables?", answers: ["commas", "curly brackets", "quotes", "parenthesis"], correct: "quotes" },

  { question: "A very useful tool used during development and debugging for printing content to the debugger is", answers: ["javascript", "terminal bash", "for loops", "console log"], correct: "console log" },
];


var questionLog = 0;
var playerScore = 0;
var timer,
counter = 60;
//Need to flesh out the timer fcn and scoring fcn

function displayQuestion() { //displays each question and the four multiple choice options
  document.getElementById("question").innerHTML =
    questions[questionLog].question;
  document.getElementById("answer-1").innerHTML =
    questions[questionLog].answers[0];
  document.getElementById("answer-2").innerHTML =
    questions[questionLog].answers[1];
  document.getElementById("answer-3").innerHTML =
    questions[questionLog].answers[2];
  document.getElementById("answer-4").innerHTML =
    questions[questionLog].answers[3];
}

//click to start quiz
document.getElementById("startButton").addEventListener("click",startQuiz);
//need to add start counter

//Need a fcn to list scores and an object to store game results/scores
 
  //function to start quiz. need to add start counter
function startQuiz() {
   var quizScreen = document.getElementById("quizSection");
   var quizInstructions = document.getElementById("quizDirections");
       quizInstructions.classList.add("invisible");
       quizScreen.classList.remove("invisible");
       quizScreen.classList.add("startScreen");
     displayQuestion();
   }
 
 //validating answers to questions as either "correct" or "wrong".
 //Still working on the 10 second penalty for wrong answers.
  document.getElementById("answer-1").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
      console.log("correct");
      
      document.getElementById("result").innerHTML ="CORRECT!"
    } else {
      console.log("Wrong!");
      
      document.getElementById("result").innerHTML ="Wrong!"
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
    
      document.getElementById("result").innerHTML ="Correct!"
    } else {
      console.log("wrong");
    
      document.getElementById("result").innerHTML ="Wrong!"
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
      
      document.getElementById("result").innerHTML ="Correct!"
    } else {
      console.log("Wrong!");
      
      document.getElementById("result").innerHTML ="Wrong!"
  
      counter = counter - 10;
    }
    questionLog++;
    if (questionLog === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  });
  
  
  
  document.getElementById("answer-4").addEventListener("click", function () {
    if (this.textContent === questions[questionLog].correct) {
      console.log("correct");
    
      document.getElementById("result").innerHTML ="Correct!"
    } else {
      console.log("wrong");
     
      document.getElementById("result").innerHTML ="Wrong!"
  
      counter = counter - 10;
    }
    questionLog++;
    if (questionLog === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  });

    
      