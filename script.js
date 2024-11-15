let randomNumber;
let attemptsLeft;
let gameOver = false;

document.getElementById('submitGuessButton').addEventListener('click', checkGuess);
document.getElementById('restartButton').addEventListener('click', restartGame);

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attemptsLeft = 10;
    gameOver = false;
    document.getElementById('feedback').textContent = "Enter a number between 1 and 100.";
    document.getElementById('attempts').textContent = `Attempts left: ${attemptsLeft}`;
    document.getElementById('guessInput').value = '';
    document.getElementById('restartButton').style.display = 'none';
}

function checkGuess() {
    if (gameOver) return; // Prevent further guesses if the game is over

    let userGuess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('feedback').textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptsLeft--;
    if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = "Too low!";
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = "Too high!";
    } else {
        document.getElementById('feedback').textContent = "Congratulations, you guessed it!";
        gameOver = true;
        document.getElementById('restartButton').style.display = 'block';
        return;
    }

    if (attemptsLeft === 0) {
        document.getElementById('feedback').textContent = `Game Over! The correct number was ${randomNumber}.`;
        gameOver = true;
        document.getElementById('restartButton').style.display = 'block';
    } else {
        document.getElementById('attempts').textContent = `Attempts left: ${attemptsLeft}`;
    }
}

function restartGame() {
    startGame();
}

// Initialize the game
startGame();
