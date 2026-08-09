// console.log("Hello World!");


const randomNumber = Math.random()
console.log(randomNumber)


getComputerChoice = (randomNumber) => {
    if `${randomNumber}` <= 0.33 {
        return "Rock";
    };
    else if `${randomNumber}` <= 0.66 {
        return "Paper";
    };
 
    else if `${randomNumber}` > 1 {
        return "Scissors";
    };
}

console.log(getComputerChoice())