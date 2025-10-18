let nextPlayer = 'X'; // 'X' or 'O'

// initialize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

// This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard() {
    // Programatically add a button "[ ]" to each cell c1..c9
    for (let i = 1; i <= 9; i++) {
        const cell = document.getElementById(`c${i}`);
        cell.innerHTML = '<button>[ ]</button>';
    }

    // Add 'takeCell' as an event listener to all board buttons
    const btns = document.querySelectorAll('#gameboard button');
    for (let i = 0; i < btns.length; i++) {
        // Use { once: true } so each button can be clicked only once
        btns[i].addEventListener('click', takeCell, { once: true });
    }
}

// Respond to a click on any board button
function takeCell(event) {
    const btn = event.currentTarget;

    // Fill the space inside the brackets with nextPlayer, e.g. "[X]" or "[O]"
    btn.innerText = `[${nextPlayer}]`;

    // Make sure the button is no longer clickable
    btn.disabled = true;

    // Switch player and update the label
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver()) {
        // Display 'Game Over' inside an <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver() {
    // Return true if all the buttons on the board are disabled
    const btns = document.querySelectorAll('#gameboard button');
    return Array.from(btns).every(btn => btn.disabled);
}