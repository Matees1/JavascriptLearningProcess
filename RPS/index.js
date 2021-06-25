
const startGameButton = document.getElementById("btn-startgame");
const gameStatusH3 = document.getElementById("game-status-text");
const pointsRatio = document.getElementById("game-status-text");
let gameStarted = false;
let playerPoints = 0;
let computerPoints = 0;

let startGame = function(){
    gameStarted = true;
    alert("Keep in mind that the score ratio is plr:cpu")
    pointsRatio.style.visibility = "visible";
}

startGameButton.addEventListener("click", startGame);