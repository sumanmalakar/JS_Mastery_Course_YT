let randomNumber, maxRange, attempts, maxAttempts;

let message = document.getElementById("message");
let startGameButton = document.getElementById("startGameButton");

// sound
const winSound = document.getElementById("winSound");
const tryAgainSound = document.getElementById("tryAgainSound");
const gameOverSound = document.getElementById("gameOverSound");

let showMessage = (text, success) => {
  message.textContent = text;
};

let setRange = () => {
  maxRange = parseInt(document.getElementById("range").value);
  randomNumber = Math.floor(Math.random() * maxRange) + 1;
  maxAttempts = Math.ceil(Math.log2(maxRange)) + 3;

  attempts = 0;

  showMessage(
    `Guess a number between 1 and ${maxRange}. You have ${maxAttempts} attemts left`,
    true
  );
  startGameButton.style.display = "none";
};

let makeGuess = () => {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > maxRange) {
    showMessage(
      `Please enter a valid number between 1 and ${maxRange}.
         Attempts left: ${maxAttempts - attempts}`,
      false
    );
    return;
  }

  if (attempts > maxAttempts) {
    gameOverSound.play();
    showMessage(
      `Game Over ! You Lose , You 've used all ${maxAttempts}. The number was  ${randomNumber}`,
      false
    );

    startGameButton.style.display = "block";
    return;
  }

  if (guess === randomNumber) {
    winSound.play();
    showMessage(
      `🎉 You guessed it! You Win ! The number was ${randomNumber}. You used ${attempts} attempts.`,
      true
    );
    startGameButton.style.display = 'block'
    return;
  } else if (guess < randomNumber) {
    tryAgainSound.play();
    showMessage(`🔼 Too low! Attempts left: ${maxAttempts - attempts}`, false);
  } else {
    tryAgainSound.play();
    showMessage(`🔼 Too high! Attempts left: ${maxAttempts - attempts}`, false);
  }

  if (attempts === maxAttempts && guess !== randomNumber) {
    gameOverSound.play();
    showMessage(
      `Game Over! You 've used all ${maxAttempts} attempts. The number was ${randomNumber}`,
      false
    );
  }
};

let startGame = () => {
  setRange();
  document.getElementById("guessInput").value = " ";
};

document.getElementById("guessInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    makeGuess();
    document.getElementById("guessInput").value = " ";
  }
});
