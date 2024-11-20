// script.js
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
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


// for rock

btn1.onclick = () => humanchoice = 'rock';
btn1.onmousedown = () => console.log(humanchoice)
btn1.click = ( ) => console.log(computerchoice())
btn1.addEventListener('click', () => {
    console.log(computerchoice());
  });
  btn1.addEventListener('click', () => {
    console.log(findwinner());
  });
  

// for paper
btn2.onclick = () => humanchoice = 'paper';
btn2.onmousedown = () => console.log(humanchoice)
btn2.click = ( ) => console.log(computerchoice())
btn2.addEventListener('click', () => {
    console.log(computerchoice());
  });
btn2.addEventListener('click', () => {
    console.log(findwinner());
  });

  //scissors
  btn3.onclick = () => humanchoice = 'scissors';
  btn3.onmousedown = () => console.log(humanchoice)
  btn3.click = ( ) => console.log(computerchoice())
  btn3.addEventListener('click', () => {
      console.log(computerchoice());
    });
  btn3.addEventListener('click', () => {
      console.log(findwinner());
    });






