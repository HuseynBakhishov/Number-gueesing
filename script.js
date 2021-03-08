'use strict';

//Random number generation
//Check if input value exists
//Check if input value is between 1 and 20
//Compare randomNum and inputNum
//wrong guess, score--. Message - guess lower/higher than correct number
//right guess, highscore = score, background-color: green, ? = inputNum
//again btn

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const message = message =>
  (document.querySelector(`.message`).textContent = message);

document.querySelector(`.again`).addEventListener(`click`, restart);
document.querySelector(`.check`).addEventListener(`click`, play);

function restart() {
  score = 20;
  message(`Start guessing...`);
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
}

function play() {
  let inputNum = Number(document.querySelector(`.guess`).value);
  if (score === 0) {
    message(`You lost the game`);
    document.querySelector(`body`).style.backgroundColor = `red`;
  } else {
    //Checking rules
    if (!inputNum) {
      message(`Enter your guess`);
    } else if (inputNum < 1 || inputNum > 20) {
      message(`Guees has to be between 1 and 20`);
    } //correct guess
    else if (inputNum === secretNum) {
      message(`Correct number!`);
      document.querySelector(`body`).style.backgroundColor = `rgb(12, 184, 89)`;
      document.querySelector(`.number`).textContent = inputNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector(`.highscore`).textContent = score;
      } else {
        document.querySelector(`.highscore`).textContent = highScore;
      }
    } //wrong guess
    else if (inputNum !== secretNum) {
      message(
        `Your guess is ${
          inputNum > secretNum ? `higher` : `lower`
        } than correct number`
      );
      document.querySelector(`.score`).textContent = score;
      score--;
    }
  }
}
