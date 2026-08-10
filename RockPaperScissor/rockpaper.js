// console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;


getComputerChoice = () => {
    const randomNumber = Math.random()
    if (randomNumber <= 0.33) {
        return "Rock";
    }
    else if (0.33 < randomNumber && randomNumber < 0.66) {
        return "Paper";
    }

    else if (0.66 < randomNumber && randomNumber <= 1) {
        return "Scissors";
    }
}

// console.log(getComputerChoice())






getHumanChoice = () => prompt();


//console.log(getHumanChoice())


playRound = (humanChoice, computerChoice) => {
    const humanChoiceUpper = humanChoice.toUpperCase();
    if (humanChoice === computerChoice) {
        return `Draw ${humanChoice} never beats ${computerChoice}`;
    }
    else if (humanChoiceUpper === "Rock" && computerChoice === "Scissors") {
        return `Human Wins ${humanChoiceUpper} beats ${computerChoice}`;
    }
    else if (humanChoiceUpper === "Paper" && computerChoice === "Rock") {
        return `Human Wins ${humanChoiceUpper} beats ${computerChoice}`;
    }
    else if (humanChoiceUpper === "Scissors" && computerChoice === "Paper") {
        return `Human Wins ${humanChoiceUpper} beats ${computerChoice}`;
    }
    else {
        return `Computer Wins ${computerChoice} beats ${humanChoice}`;
    }
}



const playGame = () => {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(`Round 1: ${result}`);
    if (result.includes("Human")) {
        humanScore++;
    } else if (result.includes("Computer")) {
        computerScore++;
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    console.log(`Round 2: ${result}`);
    if (result.includes("Human")) {
        humanScore++;
    } else if (result.includes("Computer")) {
        computerScore++;
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    console.log(`Round 3: ${result}`);
    if (result.includes("Human")) {
        humanScore++;
    } else if (result.includes("Computer")) {
        computerScore++;
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    console.log(`Round 4: ${result}`);
    if (result.includes("Human")) {
        humanScore++;
    } else if (result.includes("Computer")) {
        computerScore++;
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    console.log(`Round 5: ${result}`);
    if (result.includes("Human")) {
        humanScore++;
    } else if (result.includes("Computer")) {
        computerScore++;
    }

    console.log(`Final score — You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
};

playGame();







