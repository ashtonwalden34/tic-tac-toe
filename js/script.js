var markers = ["X", "O"];
var players = []
    //  players[0] = prompt("Enter player 1");
    //  players[1] = prompt("Enter player 2");

    // players[0] = document.getElementById("player-one");
    // players[1] = document.getElementById("player-two");
var scores = [];
var winValues = [7, 56, 73, 84, 146, 273, 292, 448];
var playerTurn = 0;
var gameOver;
var restartButton = document.getElementById("restart-button");

var records = [0,0,0];

function start() {
    restartButton.style.display="none";
}

function setUp() {
    restartButton.style.display = "none";

    players[0] = document.getElementById("player-one").value;
    players[1] = document.getElementById("player-two").value;

    console.log(players[1]);

    startGame();
}

function startGame() {
    var playerForm = document.getElementById("player-form");
    playerForm.style.display = "none";
    restartButton.style.display = "none";

    var board = document.getElementById("game-board");
    var innerDivs = "";
    var counter = 1;

    for (i = 1; i <=3; i++) {
        innerDivs += '<tr id="row-' + i + '">'
        for (j = 1; j <=3; j++) {
            innerDivs += '<th onclick="gameMove(this,' +  counter + ')"></th>'
            counter *=2;
        }
        innerDivs += '</tr>';
    }
    board.innerHTML = innerDivs;

    // sets scores array to hold 0, 0
    scores = [0, 0];
    // sets gameOver to false
    gameOver = false;
    // grabs player from players array and displays message showing it's their turn
    document.getElementById("game-message").innerText = players[playerTurn] + "'s Turn."
}


function gameMove(selectedDiv, divValue) {
    // if gameOver is not true then run function
    if (!gameOver) {
        // selects div clicked and adds correct marker inside
        selectedDiv.innerText = markers[playerTurn];

        // adds values to each player based on space selected
        scores[playerTurn] += divValue;
        
        // call win function, checks for win and displays win message if win condition is met
        if (winCondition()){
            document.getElementById("game-message").innerText = players[playerTurn] + " wins!"
            // only continues game based if the win condition is not met
        }else if (gameOver) {
            document.getElementById("game-message").innerText = "Tie Game!"
        } else {
            // alternates values of player turn and changes marker
            if (playerTurn ==0) {
                playerTurn = 1;
            } else {
                playerTurn = 0;
            }

            // sets on click to be empty so the div can't be changed after it's been clicked
            selectedDiv.onclick = '';

            // displays message showing current players turn
            document.getElementById("game-message").innerText = players[playerTurn] + "'s Turn."
        } 
    } 
}

// loops through possible win values, &s with current score to check for win condition, returns true if win condition met returns false if not
function winCondition() {
    for (i = 0; i < winValues.length; i++) {
        if ((scores[playerTurn] & winValues[i]) == winValues[i]) {
            gameOver = true;
            // restartButton.innerHTML = '<button id="restart-button" onclick="startGame()">Play Again?</button>'
            restartButton.style.display = "inline-block";
            records[playerTurn] ++;
            console.log(records[0], records[1], records[2]);
            return true;
        }
    }
    // board is filled then gameOver variable is set to true
    if (scores[0] + scores[1] == 511) {
        gameOver = true;
        // restartButton.innerHTML = '<button id="restart-button" onclick="startGame()">Play Again?</button>'
        restartButton.style.display = "inline-block";
        records[2]++;
        console.log(records[0], records[1], records[2]);
    }
    return false;
}


// function recordKeeping() {
//     if (winCondition) {
//         records[playerTurn] ++;
//         console.log(scores[0], scores[1], scores[2]);
    
//     } else if (scores[0] + scores[1] == 511) {
//         records[2]++;
//         console.log(scores[0], scores[1], scores[2]);
//     }
// }




/*
scores array, [0, 1, 2]
    - 0 player 1 score
    - 1 player 2 score
    - 2 ties

increment correct [] on win
*/