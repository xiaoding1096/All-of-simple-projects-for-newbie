const guessButton = document.getElementById("guess-btn");
const guessTitle = document.getElementById("guess-title");
const userGuessInput = document.getElementById("user-guess-input");
const announceRemainingTimes = document.getElementById(
  "announce-remaining-times"
);
const retryButton = document.getElementById("retry-btn");

let randomNumber = Math.floor(Math.random() * 101);
let userGuess = "";
let remainingTimes = 5;
console.log(`RandomNumber is : ${randomNumber}`);
guessButton.addEventListener("click", () => {
  userGuess = parseInt(userGuessInput.value);
  console.log(`UserGuessNumber is : ${userGuess}`);

  if (isNaN(userGuess) || userGuessInput.value === null) {
    announceRemainingTimes.textContent = "Please just give me a number";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    announceRemainingTimes.textContent =
      "Please give me a number from 1 to 100";
    return;
  }

  if (userGuess >= 1 && userGuess <= 100) {
    remainingTimes -= 1;
    console.log(remainingTimes);
    if (remainingTimes <= 0) {
      announceRemainingTimes.textContent = "Game Over!!";
      retryButton.style.setProperty("display", "block");
      guessButton.textContent = remainingTimes;
      guessButton.style.setProperty("font-size", "3rem");
      userGuessInput.value = "";
      return;
    }
    if (userGuess === randomNumber) {
      announceRemainingTimes.textContent = "Excellent, You Guessed It !";
      userGuessInput.value = "";
      guessButton.textContent = remainingTimes;
      guessButton.style.setProperty("font-size", "3rem"); // change font=size for guessbutton
      retryButton.style.setProperty("display", "block");
    } else if (userGuess < randomNumber) {
      announceRemainingTimes.textContent = "Try a higher number";
      guessButton.textContent = remainingTimes;
      guessButton.style.setProperty("font-size", "3rem"); // change font-size for guessbutton
    } else {
      guessButton.textContent = remainingTimes;
      guessButton.style.setProperty("font-size", "3rem"); // change font-size for guessbutton
      announceRemainingTimes.textContent = "Try a higher number";
    }
    userGuessInput.value = "";
  }
});

retryButton.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 101);
  userGuessInput.value = "";
  remainingTimes = 5;
  guessButton.textContent = "Guess";
  guessButton.style.setProperty("font-size", "1.5rem"); // reset font size
  announceRemainingTimes.textContent = "You have 5 times to try !";
  retryButton.style.setProperty("display", "none");
  console.log(`retry randomnumber ${randomNumber}`);
});
