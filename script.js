const winMesagge = document.getElementById("win-message");
const playerLifes = document.getElementById("player-lifes");
const enemyLifes = document.getElementById("enemy-lifes");

const resultPlayer = document.getElementById("result-player");
const resultEnemy = document.getElementById("result-enemy");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const restarBtn = document.getElementById("restar-btn");

restarBtn.addEventListener("click", () => {
  playerLifes.textContent = "❤️❤️❤️❤️❤️";
  enemyLifes.textContent = "❤️❤️❤️❤️❤️";

  resultEnemy.src = "./img/question-sign.png";
  resultPlayer.src = "./img/question-sign.png";
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function chooseEnemy(play) {
  if (play == 1) {
    resultEnemy.src = "./img/rock.png";
  } else if (play == 2) {
    resultEnemy.src = "./img/paper.png";
  } else if (play == 3) {
    resultEnemy.src = "./img/scissors.png";
  }
  return;
}
function choosePlayer(play) {
  if (play == 1) {
    resultPlayer.src = "./img/rock.png";
  } else if (play == 2) {
    resultPlayer.src = "./img/paper.png";
  } else if (play == 3) {
    resultPlayer.src = "./img/scissors.png";
  }
  return;
}

function juego(j_player, j_pc) {
  let resultado_final = "";
  if (j_pc == j_player) {
    resultado_final = "EMPATE";
  } else if (j_player == 1 && j_pc == 3) {
    resultado_final = "GANASTE";
    wins += 1;
    removeLife("enemy");
  } else if (j_player == 2 && j_pc == 1) {
    resultado_final = "GANASTE";
    wins += 1;
    removeLife("enemy");
  } else if (j_player == 3 && j_pc == 2) {
    resultado_final = "GANASTE";
    wins += 1;
    removeLife("enemy");
  } else {
    resultado_final = "PERDISTE";
    losses += 1;
    removeLife();
  }
  return resultado_final;
}
// 1 es piedra, 2 es papel, 3 es tijera
let player = 0;
let enemy = 0;
let wins = 0;
let losses = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      playerLifes.textContent.length > 2 &&
      enemyLifes.textContent.length > 2
    ) {
      enemy = random(1, 3);
      player = button.dataset.num;

      chooseEnemy(enemy);
      choosePlayer(player);

      winMesagge.innerText = juego(player, enemy);
      restarBtn.styles.display = "none";
    } else {
      if (playerLifes.textContent.length > 2) {
        winMesagge.innerText = "Felicidadess Ganasteee";
        removeLife("enemy");
        restart();
      } else {
        winMesagge.innerText = "Lo lamento tu pierdes";
        removeLife();
        restart();
      }
    }
  });
});

function removeLife(player = "player") {
  const currentHeartsP = playerLifes.textContent;
  const currentHeartsE = enemyLifes.textContent;

  if (player == "enemy") {
    if (currentHeartsE.length > 0) {
      const newHearts = currentHeartsE.slice(0, -2);

      enemyLifes.textContent = newHearts;
    }
  } else {
    if (currentHeartsP.length > 0) {
      const newHearts = currentHeartsP.slice(0, -2);

      playerLifes.textContent = newHearts;
    }
  }
}

function restart() {
  restarBtn.style.display = "flex";
}
