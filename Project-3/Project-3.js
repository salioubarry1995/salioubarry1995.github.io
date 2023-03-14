const btnEl = document.querySelector(".btn");
let input = document.querySelector("input");
let guessEl = document.querySelector(".guessHistory");
let winOrLose = document.querySelector(".winLose");
let commentEl = document.querySelector(".comment");
let scoreEl = document.querySelector(".score");
let bestEl = document.querySelector(".best");
let showNum = document.querySelector(".show");
let howClose = document.querySelector(".howClose");
let reset = document.querySelector(".reset");
let score = 10;
let best = 0;


let num = Math.floor(Math.random() * 100) + 1;

function guessNum() {
  let userNum = Number(input.value);
  

  if (score === 10) {
    guessEl.textContent = 'Guess History: ';
  }
  guessEl.textContent += `${userNum}, `;

  if (userNum === num) {
    winOrLose.textContent = "Congratulations!";
    commentEl.textContent = `Your guess was correct ${num} is my secret number`;
    scoreEl.textContent = `Score: ${score}`;
    bestEl.textContent = `Best: ${best}`;
    howClose.textContent = '';
    gameOver();
  } else if (score === 1) {
    winOrLose.textContent = "Unfortunately You Lost The Game";
    commentEl.textContent = "Don't give up and Try Again. You can win next time";
    showNum.textContent = `My number was: ${num}`;
    howClose.textContent = '';
    gameOver();
  } else {
    if (userNum < num) {
      howClose.textContent = "Your Guess Is Too Low";
    } else if (userNum > num) {
      howClose.textContent = "Your Number Is Too High";
    }
  }
  score--;
  input.value = '';
  input.focus();

  scoreEl.textContent = `Score: ${score}`;
  bestEl.textContent = `High Score: ${best}`;
}

if (score < best) {
  best = score;
  bestEl.textContent = `High Score: ${best}`;
}


btnEl.addEventListener('click', guessNum);


function gameOver() {
  input.disabled = true;
  btnEl.disabled = true;
}


function resetGame() {1
  window.location.reload()
}





