var input= require('readline-sync'); 
var userName=input.question("What is your name ?") 
console.log("Welcome "+userName+"\nAre you a fan of Tony Stark ?");
var score=0;
function play(question,answer){
  var ans=input.question(question);
  if(ans.toUpperCase()===answer.toUpperCase()){
    console.log("You are correct");
    score+=1;
  }
  else{
    console.log("You are wrong");
  }
  console.log(score);
  console.log("...................");
}

var questions=[{
  question:"Who is the Iron Man?",
  answer: "Tony Stark"
},{
  question: "Who was the Father of Tony Stark?",
  answer: "Howard Stark"
},{
  question: "Who heads the Stark Industry?",
  answer: "Pepper Pots"
},
{
  question:"What was the name of AI of Tony?",
  answer:"Jarvis"
},{
  question:"Who was the Head of Security of Stark Industries?",
  answer:"Happy"
}]
for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}


