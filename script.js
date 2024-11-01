// script.js

let computeresult = 0
let humanchoice = 0
let winner = 0

function computerchoice (randint) {
    randint = Math.random()

    if (randint <= 0.300) {
        randint="rock";
        computeresult= randint
        return(computeresult)
    }

    if (randint <= 0.600 && randint > 300) {
        randint="paper";
        computeresult = randint
        return(computeresult)
    }

    if (randint  > 0.600) {
        randint="scissors";
        computeresult = randint
        return(computeresult)
    }
}

function gethumanchoice (choice) {
    
    if ( humanchoice == "1", "2", "3") {
        if (humanchoice == "1") {
            humanchoice = "rock"
        }

        if (humanchoice == "2") {
            humanchoice = "paper"
        }

        if (humanchoice == "3") {
            humanchoice = "scissors"
        }
    
    }
}



function findwinner (rice){
if (computeresult == humanchoice) {
    return("it's a tie")
} else if (computeresult == "scissors" && humanchoice == "paper" || computeresult == "rock" && humanchoice == "scissors" || computeresult == "paper" && humanchoice == "rock" ) {
    return("computer won")
} else if (humanchoice == "scissors" && computeresult == "paper" || humanchoice == "rock" && computeresult == "scissors" || humanchoice == "paper" && computeresult == "rock" ) {
    return "you won"
}
   
    } 



    

   
    
   



  
humanchoice = parseInt(prompt("Enter either Rock, Paper or Scissors. Rock= 1 Paper= 2 Scissors= 3"))
gethumanchoice(0)

console.log(humanchoice)
console.log(computerchoice(0))
console.log(findwinner(0))

