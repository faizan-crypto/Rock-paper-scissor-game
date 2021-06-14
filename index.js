var userScore=0;
var computerScore=0;
let userScore_span=document.getElementById("user-score");
let computerScore_span=document.getElementById("computer-score");
let result_p=document.querySelector(".result > p");
let rock_div=document.getElementById("r");
let paper_div=document.getElementById("p");
let scissor_div=document.getElementById("s");

function convertToLetter(letter){
  if(letter==="p") return "Paper";
  if(letter==="r") return "Rock";
  return "Scissor";
}

function win(userChoice , computerChoice){
  const smallUserWord="user".fontsize(3).sub(); //sup
  const smallCompWord="comp".fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_p.innerHTML=`${convertToLetter(userChoice)}${smallUserWord}  beats  ${convertToLetter(computerChoice)}${smallCompWord}. You win✨ `;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},500);
}
function lose(userChoice , computerChoice){
  const smallUserWord="user".fontsize(3).sub();
  const smallCompWord="comp".fontsize(3).sub();
  computerScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_p.innerHTML=`${convertToLetter(userChoice)}${smallUserWord}  loses to  ${convertToLetter(computerChoice)}${smallCompWord}. You lost! ☹ `;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);
}
function draw(userChoice , computerChoice){
  const smallUserWord="user".fontsize(3).sub(); //sup
  const smallCompWord="comp".fontsize(3).sub();
  result_p.innerHTML=`${convertToLetter(userChoice)}${smallUserWord}  equals  ${convertToLetter(computerChoice)}${smallCompWord}. Its a draw,try again hon!🤦‍♂️  `;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},500);
}
function getComputerChoice(){
  const choices=['r', 'p' , 's'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function game(userChoice){
  const computerChoice =getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs" :
    case "pr":
    case "sp":
      win(userChoice , computerChoice);
      break;
      case "rp" :
      case "ps":
      case "sr":
      lose(userChoice , computerChoice);
        break;
        case "rr" :
        case "pp":
        case "ss":
          draw(userChoice , computerChoice);
          break;
}
}

function main(){
  rock_div.addEventListener("click",function(){
  game("r");
  })
  paper_div.addEventListener("click",function(){
    game("p");
  })
  scissor_div.addEventListener("click",function(){
    game("s");
  })
}
main();
