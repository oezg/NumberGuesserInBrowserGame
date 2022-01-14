let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (a, b) => {
    return Math.abs(a - b);
}

const compareGuesses = (user, computer, target) => {
    if (user > 9 || user < 0) {
        alert("Your guess is out of range.");
        return;
    } 
    let distanceUser = getAbsoluteDistance(user, target);
    let distanceComputer = getAbsoluteDistance(computer, target);
    if (distanceUser > distanceComputer) {
        return false;
    } else {
        return true;
    }
}

const updateScore = winner => {
    switch(winner) {
        case "human":
            humanScore++;
            break;
        case "computer":
            computerScore++;
            break;
        default:
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}