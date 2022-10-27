//preliminary thinking:..
//const question = Array of objects
//loop through it with a user keydown and a fcn to verify user answer something like:
//document.addEventListener["keydown",function(tbd){
    
   // console.log();
    //tbd.key === question[i];
    //hiddenAnswer[i] =tbd.key;
    //question.textContent = hiddenAnswer;
    //}];

    //Issues:
    //counter continues when quiz ends
    //Create form to Enter initials 
    //Save initials and score to localStorage
    //Format answer buttons stacked to the left
    //How to get button color to more closely match mock up


    
  let questions = [
  { question: "Commonly used data types DO NOT include?", answers: ["strings", "booleans", "alerts", "numbers"], correct: "alerts" },

  { question: "The condition in an If/Else statement is enclosed by?", answers: ["quotes", "curly brackets", "parenthesis", "square brackets"], correct: "parenthesis" },

  { question: "Arrays in javascript can be used to store?", answers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correct: "all of the above" },

  { question: "String values must be enclosed within ________ when being assigned to variables?", answers: ["commas", "curly brackets", "quotes", "parenthesis"], correct: "quotes" },

  { question: "A very useful tool used during development and debugging for printing content to the debugger is", answers: ["javascript", "terminal bash", "for loops", "console log"], correct: "console log" },
];

//Here are the variables we need to keep track of. I'm thinking keep them in an object called playerData
var questionLog = 0; //records the user's answer choice for each question
var playerScore = 0;
var timer;
var counter = 60;
var playerInitials ="";
//var highscorers = [];//not sure yet about this
//var playerData = {};
//var quizResultData = {}; //For storing multiple quiz scores
var endOfQuiz = 0; //when no time is left


function startQuiz() {
  var quizScreen = document.getElementById("quizSection");
     var quizInstructions = document.getElementById("quizDirections");
     var timerTime = document.getElementById("timerText");
         timerTime.classList.remove("invisible");
         quizInstructions.classList.add("invisible");
         quizScreen.classList.remove("invisible");
         quizScreen.classList.add("startScreen");
         displayQuestion();
}

function countdown(){
  document.getElementById("counter").innerHTML = counter;
  timer = setInterval(function (){counter--;
  document.getElementById("counter").innerHTML = counter;
if (counter === 0 && endOfQuiz === 0){
  clearInterval(timer);
  endQuiz();
   }
  }, 1000);
}

 function displayQuestion() {
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

function countdown(){
  document.getElementById("counter").innerHTML = counter;
  timer = setInterval(function (){counter--;
  document.getElementById("counter").innerHTML = counter;
if (counter === 0 && endOfQuiz === 0){
  clearInterval(timer);
  endQuiz();
   }
  }, 1000);
}


// only need nextQuestion fcn if you can figure out displayQuestion fcn
/*function nextQuestion(){
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

/*function displayQuestion() { //displays each question and the four multiple choice options
  document.getElementById("question").innerHTML =questions[questionLog].question;
  for(let i=0; i< questions[questionLog].answers.length; i++){
    document.getElementById(`answer-${i+1}`).innerHTML = questions[questionLog].answers[i];
    document.getElementById(`answer-${i+1}`).addEventListener("click", function (event) {
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

 //validating answers to questions as either "correct" or "wrong".
 
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
  
  function endQuiz() {
    alert("Ended")
    //return
    //var quizEndScreen = document.getElementById("quizSection");
    var quizInstructions = document.getElementById("quizDirections");
    var timeRemaining = document.getElementById("timerText");
      endOfQuiz = 1;
      playerScore = counter;
      console.log(playerScore);
      alert("All Done! Your final score is "+ playerScore);
      //document.getElementsByClassName("countDown");
      //quizInstructions.classList.add("invisible");
      
      //quizScreen.classList.add("invisible");
      //document.getElementById("result").innerHTML = ("All Done! Your final score is "+ playerScore);
      //timeRemaining.classList.add("invisible");
    }
    

    document.getElementById("startButton").addEventListener("click",startQuiz);
    document.getElementById("startButton").addEventListener("click",countdown);
    //document.getElementById("startButton").addEventListener("click",resetTimer);
  


    function saveToStorage(playerScore){
      var history = JSON.parse(localStorage.getItem('scores')) || []
      console.log(history);
      if(history.includes(playerScore)){
        console.log("Score already exists") //Avoid duplicates
        return
      }
      console.log(playerScore)
      history.push(playerScore)
      localStorage.setItem('scores',JSON.stringify(history))
      saveToStorage()
      //renderHistory()
    }

    /*function renderHistory(){
      console.log("rendering")
      var history = JSON.parse(localStorage.getItem('scores')) || []
      if (!history.length){
            document.getElementById("here").innerHTML+= <h2>No Past Scores</h2>
      }
      for (const score of history) {
        console.log(score)
        var playerInitials = score.split(";")[0]
        var playerScores = score.split(";")[1]
        console.log(initials)
      }
    }

    renderHistory()
    saveToStorage()*/
