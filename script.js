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
    //Prompt for Initials 
    //Save initials to localStorage
    //Render initials and score
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
var playerTime = 0;
var timer;
var counter = 60;
var playerInitials ="";
 


//var highscorers = [];//not sure yet about this
//var playerData = {};
//var quizResultData = {}; //For storing multiple quiz scores
var endOfQuiz = 1; //when no time is left


function displayQuestion() {
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
    
    function endQuiz() {
      //alert("Ended")
      //return
      //var quizEndScreen = document.getElementById("quizSection");
      //var quizInstructions = document.getElementById("quizDirections");
      //var timeRemaining = document.getElementById("timerText");
        endOfQuiz = 0;
        playerTime = counter;
        console.log(playerTime);
        alert("All Done! Your final score is "+ playerTime);
        let playerInitials = prompt("Enter initials:");
        //If (playerInitials != null) 
        document.getElementById("promptForInitials").textContent = playerInitials;
        
        /*localStorage.setItem("playerScore",JSON.stringify(playerTime));
        document.getElementById("here").textContent = playerTime;
        var history = JSON.parse(localStorage.getItem('scores'));
        history.push(playerScore);
        localStorage.setItem('scores',JSON.stringify(history));
        document.getElementById("hereB").textContent = history;*/
      }
        //let playerInitials = prompt("Enter initials:");
        //If (playerInitials != null) 
         // document.getElementById("promptForInitials");
        
    
        //document.getElementsByClassName("countDown");
        //quizInstructions.classList.add("invisible");
        
        //quizScreen.classList.add("invisible");
        //document.getElementById("result").innerHTML = ("All Done! Your final score is "+ playerScore);
        //timeRemaining.classList.add("invisible");
      //}
function countdown(){
  document.getElementById("counter").innerHTML = counter;
  timer = setInterval(function (){counter--;
  document.getElementById("counter").innerHTML = counter;
if (counter === 0 || endOfQuiz === 0){
  console.log("does this work");
  clearInterval(timer);
   //endQuiz();
   }
  }, 1000);
}


function nextQuestion(){
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

/*function displayQuestion() { //displays each question and the four multiple choice options
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
 //validating answers to questions as either "correct" or "wrong".
 
  document.getElementById("answer-0").addEventListener("click", function () {
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
  
  
  document.getElementById("answer-1").addEventListener("click", function () {
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
  
  
  
  document.getElementById("answer-2").addEventListener("click", function () {
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
  
  
  
  document.getElementById("answer-3").addEventListener("click", function () {
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
  
    

    document.getElementById("startButton").addEventListener("click",startQuiz);
    document.getElementById("startButton").addEventListener("click",countdown);
    //document.getElementById("startButton").addEventListener("click",resetTimer);
  
    function saveLastScore() {
      var playerEvent = {
        playerInitials: playerInitials.valueOf,
        playerTime: playerTime.valueOf,
      };
      localStorage.setItem("playerEvent", JSON.stringify(playerEvent));
      document.getElementById("playerEvent").textContent = playerEvent;
      console.log(playerEvent);
    }
    saveLastScore()
    Object.keys(playerEvent)
    //console.log(playerEvent);
    //document.getElementById("playerEvent").textContent = playerEvent;

    /*function saveToStorage(playerScore){
      var history = JSON.parse(localStorage.getItem('scores')) || []
      console.log(history);
      if(history.includes(playerScore)){
        console.log("Score already exists") //Avoid duplicates
        return
      }
      console.log(playerScore)
      history.push(playerScore)
      localStorage.setItem('scores',JSON.stringify(history))
   }
    saveToStorage()

    /*var history = JSON.parse(localStorage.getItem('scores'))
    for (const score of history) {
      document.getElementById("hereB").textContent = ('scores')*/

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

    renderHistory()*/
    
