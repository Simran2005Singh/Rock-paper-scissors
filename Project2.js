let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const generateCompChoice = () => {
const options = ["rock","paper","scissors"];
const randIdx= Math.floor(Math.random()*3);
return options[randIdx];
}

const playGame=(userChoice)=>{
console.log("userchoice is", userChoice)
const compChoice= generateCompChoice();
console.log("compchoice is " ,compChoice)
}

choices.forEach((choice)=> {
  choice.addEventListener("click",()=>{
 const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
}) ;
//jab bhi koi number 0se 1 se2 kii 
// range m hota h to usse 3 se multiply krke 0
// se 2 ke range m laa skyte h 
const checkWinner=()=>{

}






