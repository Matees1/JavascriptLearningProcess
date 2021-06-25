
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

let rps = ["rock", "papder", "scissors"];

let chosen = false;

let round = 0;
let maxRounds = 3;

let reset = function(){
    gameStarted = false;
    //add all the vars into here and reset them into their original value
}

let startGame = function(){
    gameStarted = true;
    round = 0;
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

    while(round < maxRounds){
        initRound();
        round++;
    }
}

//This will be the logic for the game, making a function just so
//the startGame function will not be full of random things
let initRound = function(){
    // chosen = false;

//computer side of things section 

    //gets a random item from the rps array
    let randomItem = rps[Math.floor(Math.random()*rps.length)];

    switch(randomItem){
        case "rock":
            console.log("The bot chose rock!");
            break;

        case "scissors":
            console.log("The bot chose scissors!");
            break;

        case "paper":
            console.log("The bot chose paper!");
            break;
    }

//computer side of things section end
}



let rockClick = function(){
    if(chosen == false){
        playerPick = "rock";
        console.log(playerPick);
        // chosen = true;
    }
}

let scissorsClick = function(){
    if(chosen == false){
        playerPick = "scissors";
        console.log(playerPick);
        // chosen = true;
    }
}

let paperClick = function(){
    if(chosen == false){
        playerPick = "paper";
        console.log(playerPick);
        // chosen = true;
    }
}

startGameButton.addEventListener("click", startGame);
document.getElementById("rock").addEventListener("click", rockClick);
document.getElementById("scissors").addEventListener("click", scissorsClick);
document.getElementById("paper").addEventListener("click", paperClick)
document.getElementById("reset-btn").addEventListener("click", reset);
