var markers = ["X", "O"];
var players = []
    players[0] = prompt("Enter player 1");
    players[1] = prompt("Enter player 2");
var scores = [0, 0];
var winValues = [7, 56, 73, 84, 146, 273, 292, 448];
var playerTurn = 0;


function gameMove(selectedDiv, divValue) {
    // selects div clicked and adds correct marker inside
    selectedDiv.innerText = markers[playerTurn];

    // adds values to each player based on space selected
    scores[playerTurn] += divValue;
    // console.log(players[0] + " score: " + scores[0]);
    // console.log(players[1] + " score: " + scores[1]);
    
    // call win function, checks for win and displays win message if win condition is met
    if (winCondition()){
        document.getElementById("game-message").innerText = players[playerTurn] + " wins!"
        // only continues game based if the win condition is not met
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

function startGame() {
        // grabs player from players array and displays message showing it's their turn
        document.getElementById("game-message").innerText = players[playerTurn] + "'s Turn."
}


// loops through possible win values, &s with current score to check for win condition, returns true if win condition met returns false if not
function winCondition() {
    for (i = 0; i < winValues.length; i++) {
        if ((scores[playerTurn] & winValues[i]) == winValues[i]) {
            return true;
        }
    }
    return false;
}