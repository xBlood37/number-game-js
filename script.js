'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  if (!guessingNumber) {
    displayGuessMessage('Введите число!');
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }

    // number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game Over');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      displayGuessMessage('Слишком мало!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
