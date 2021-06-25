
const startGameButton = document.getElementById("btn-startgame");
const pointsRatio = document.getElementById("game-status-text");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let gameStarted = false;
let playerPoints = 0;
let computerPoints = 0;

//These values can either be [nothing, rock, scissors, paper]
let computerPick = "nothing";
let playerPick = "nothing";

let startGame = function(){
    gameStarted = true;
    
    //Reseting the game points
    playerPoints = 0;
    computerPoints = 0;

    //Teaching the user about the game *kinda*
    alert("Keep in mind that the score ratio is plr:cpu")
    
    //Puting the points and then showing the points
    pointsRatio.innerHTML = playerPoints + " : " + computerPoints;
    pointsRatio.style.visibility = "visible";

    //Hiding the "Start game" button
    startGameButton.style.visibility = "hidden";
}

//This will be the logic for the game, making a function just so
//the startGame function will not be full of random things
let initRound = function(){

}

startGameButton.addEventListener("click", startGame);