// script.js

let computeresult = 0
let humanchoice = 0

function computerchoice (randint) {
   if ( Math.random < 0.300 ) {
    computeresult = "rock";
    
   }

   if ( Math.random < 0.600 && Math.random > 0.300) {
    computeresult = "scissors";
    
   }

   if ( Math.random > 0.600) {
    computeresult ="paper";
    
   }
   //this function helps find the outcome of the computer
   return(computeresult)
}

function gethumanchoice (choice) {
    
    if ( humanchoice == "rock", "paper", "scissors") {
        return (humanchoice)
    }
}

humanchoice = parseInt(prompt("Enter either Rock, Paper or Scissors. Rock= 1 Paper= 2 Scissors= 3"))
gethumanchoice(0)
computerchoice(0)
console.log(humanchoice)
console.log(computeresult)
