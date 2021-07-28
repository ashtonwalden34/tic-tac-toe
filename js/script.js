var markers = ["X", "O"];

var playerTurn = 0;

function gameMove(selectedDiv) {
    selectedDiv.innerText = markers[playerTurn];

    if (playerTurn ==0) {
        playerTurn = 1;
    } else {
        playerTurn = 0;
    }
}