var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hi! What's your name: ");
console.log("Welcome " + userName + "! Let's see how well you know me.")

var score = 0;
var questions = [
  {
    question: "How old am I? ",
    answer: "21"
  },
  {
    question: "Where did I grow up? ",
    answer: "Oman"
  },
  {
    question: "Where do I work? ",
    answer: "Urbanhub"
  },
  {
    question: "What's my favorite book I read in 2022? ",
    answer: "Anxious People"
  },
  {
    question: "What's my coder username? ",
    answer: "nosfeeferatu"
  }
];
var scoreList = [
  {
    name: "Nazeem",
    score: 5
  },
  {
    name: "Shenez",
    score: 5
  },
  {
    name: "Arthur",
    score: 4
  }
]

function ask(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("Righty that!");
    score++;
  }
  else{
    console.log("Nope. Not that.");
  }
  console.log("Current Score: ", score);
  console.log("----------------------");
}

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  ask(currentQuestion.question,currentQuestion.answer);
}

console.log("Final score: "+score);
if(score>3){
  console.log("Ah you know me well.");
}
else{
  console.log("Maybe we should catch up a bit.");
}
highScore(score);

function highScore(score){
  for(var i=0; i<scoreList.length; i++){
    if(score>=scoreList[i].score){
      return console.log("Congratulations! You've got a high score!");
    }    
  }
}