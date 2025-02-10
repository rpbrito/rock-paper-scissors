function getComputerChoice() {
    const data = Math.floor(Math.random() * 3)
    if (data === 0) {
        return "rock"
    } else if (data === 1) {
        return "paper"
    } else {
        return "scissors"
    }
    
}

function getHumanChoice() {
    let humanChoice = prompt("Choose between Rock, Paper & Scissors").toLocaleLowerCase()
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice
    } else {
        alert("Invalid: Chose Rock, Paper or Scissors")
        return getHumanChoice()
    }
    
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    console.log(`Round ${i}`)
    if (humanChoice === computerChoice) {
        console.log(`It's a Draw! Both chose ${humanChoice}`)    
    } else if (humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`)
    } else {
        humanScore += 1
        console.log(`You won this round! ${humanChoice} beats ${computerChoice}`)
    }
    console.log(`Computer Score: ${computerScore}, Player Score: ${humanScore}`)
}

function playGame() { 
    const round = 5
    for (i = 1; i <= round; i++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    }
    const score = () => {
        if(computerScore === humanScore) {
            return `It's a Draw!\nFinal Score: ${computerScore}x${humanScore}`
        } else if(humanScore > computerScore) {
            return `You won the game!\nFinal Score: ${computerScore}x${humanScore}`
        } else {
            return `You lose the game!\nFinal Score: ${computerScore}x${humanScore}`
        }
    }
    console.log(score())
}

playGame()
