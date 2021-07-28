var markers = ["X", "O"];

var players = []

players[0] = prompt("Enter player 1");
players[1] = prompt("Enter player 2");

var playerTurn = 0;

function gameMove(selectedDiv) {
    // selects div clicked and adds correct marker inside
    selectedDiv.innerText = markers[playerTurn];

    // alternates values of player turn and changes marker
    if (playerTurn ==0) {
        playerTurn = 1;
    } else {
        playerTurn = 0;
    }

    // sets on click to be empty so the div can't be changed after it's been clicked
    selectedDiv.onclick = '';

    document.getElementById("turn-message").innerText = players[playerTurn] + "'s Turn."
}

function startGame() {
        // grabs player from players array and displays message showing it's their turn
        document.getElementById("turn-message").innerText = players[playerTurn] + "'s Turn."
}