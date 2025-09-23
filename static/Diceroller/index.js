let playerScore = 0;
let computerScore = 0;
const maxScore = 2;
function rollDice(){
    if (playerScore >= maxScore || computerScore >=maxScore){
        return;
    }
    const playerValue = Math.floor(Math.random() * 6) + 1;
    const compValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceImages").innerHTML = `<img src="dice_images/${playerValue}.png" width="60">`;
    document.getElementById("computerImages").innerHTML = `<img src="dice_images/${compValue}.png" width="60">`;
    document.getElementById("playerTitle").textContent = `Player Dice Roll: ${playerValue}`;
    document.getElementById("computerTitle").textContent = `Computer Dice Roll: ${compValue}`;
    if (playerValue > compValue) {
        playerScore++;
    } else if (compValue > playerValue) {
        computerScore++;
    }
    document.getElementById("score").textContent = `${playerScore} : ${computerScore}`;
    if (playerScore === maxScore) {
        document.getElementById("winnerMessage").textContent = "PLAYER WINS!";
        document.getElementById("winnerMessage").style.color = "green";
    } else if (computerScore === maxScore) {
        document.getElementById("winnerMessage").textContent = "COMPUTER WINS!";
        document.getElementById("winnerMessage").style.color = "red";
}
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("score").textContent = `0 : 0`;
    document.getElementById("winnerMessage").textContent = '';
    document.getElementById("diceImages").innerHTML = '';
    document.getElementById("computerImages").innerHTML = '';
    document.getElementById("playerTitle").textContent = 'Player Dice Roll:';
    document.getElementById("computerTitle").textContent = 'Computer Dice Roll:';
}

window.onload = rollDice;