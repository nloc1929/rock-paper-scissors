
// VARIABLES TO COUNT SCORES
let playerScore = 0;
let compScore = 0;
let gameScore = 0;


// VARIABLES TO CAPTURE CLICK EVENT FROM BUTTON ID'S
  //ROCK
let userRock = document.getElementById('userRock');
userRock.addEventListener('click', () => game('Rock'));
  //PAPER
let userPaper = document.getElementById('userPaper');
userPaper.addEventListener('click', () => game('Paper'));
  //SCISSORS
let playerScissors = document.getElementById('userScissors');
userScissors.addEventListener('click', () => game('Scissors'));


// FUNCTION TO GENERATE RANDOM COMPUTER GUESSES
function computerPlay() {
  let randInt = Math.floor(Math.random() * 3) + 1;
  if (randInt === 1) {
    document.getElementById('compImg').src="images/stone.png";
    return 'Rock';
  } else if (randInt === 2) {
    document.getElementById('compImg').src="images/paper.png";
    return 'Paper';
  } else if (randInt === 3) {
    document.getElementById('compImg').src="images/scissors.png";
    return 'Scissors';
  }
};


// FUNCTION TO PLAY A SINGLE ROUND
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    let result = 'Draw';
    document.getElementById('resultImg').src="images/arm-wrestling.gif";
    document.getElementById("resultDiv").style.backgroundColor = "goldenrod";
    gameScore++;
    return result;
  } else if ((computerSelection === 'Rock' && playerSelection === 'Paper') || (computerSelection === 'Paper' && playerSelection === 'Scissors') || (computerSelection === 'Scissors' && playerSelection === 'Rock')) {
    let result = 'Player Wins';
    document.getElementById('resultImg').src="images/viking.gif";
    document.getElementById("resultDiv").style.backgroundColor = "mediumseagreen";
    playerScore++;
    gameScore++;
    return result;
  } else if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || (computerSelection === 'Paper' && playerSelection === 'Rock') || (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
    let result = 'Computer Wins';
    document.getElementById('resultImg').src="images/computer.gif";
    document.getElementById("resultDiv").style.backgroundColor = "brown";
    compScore++;
    gameScore++;
    return result;  
    }
};


// MAIN FUNCTION TO PLAY MULTIPLE GAMES
function game(playerSelection) {
let computerSelection = computerPlay();                       // HELPER FUNCTION TO GENERATE COMPUTER PLAY
let result = playRound(computerSelection, playerSelection);   // HELPER FUNCTION TO PLAY SINGLE ROUND
  // DISPLAY SINGLE ROUND RESULTS OF COMPUTER AND PLAYER
  /*
  if (playerSelection === 'Rock') {          
    document.getElementById("playerSelect").innerHTML = "PLAYER: <br>" + playerSelection;
    document.getElementById('playerImg').src="images/stone.png";
  } else if (playerSelection === 'Paper') {
    document.getElementById("playerSelect").innerHTML = "PLAYER: <br>" + playerSelection;
    document.getElementById('playerImg').src="images/paper.png";
  } else if (playerSelection === 'Scissors') {
    document.getElementById("playerSelect").innerHTML = "PLAYER: <br>" + playerSelection;
    document.getElementById('playerImg').src="images/scissors.png";
  }*/
  document.getElementById("compSelect").innerHTML = "COMPUTER: <br>" + computerSelection;
  document.getElementById("result").innerHTML = "ROUND " + gameScore + ": <br>" + result;

  // IF 5 GAMES HAVE BEEN PLAYED DISPLAY GAME OVER AND RESULTS
  if (gameScore >= 5) {
    gameOver();
    console.log("GAME OVER");
  }
};


// FUNCTION TO DISPLAY FINAL RESULTS IN MODAL
function gameOver() {
  if (playerScore > compScore) {
    successSound.play();
    document.getElementById("finalResult").style.animation = "fadeIn 2s forwards";
    document.getElementById("finalResultImg").style.animation = "fadeIn 2.5s forwards";
    document.getElementById("playerScore").style.animation = "fadeIn 3s forwards";
    document.getElementById("compScore").style.animation = "fadeIn 4s forwards";

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("compScore").innerHTML = compScore;
    document.getElementById('finalResultImg').src="images/viking.gif";
    let finalResult = "You Win!";
    document.getElementById("finalResult").innerHTML = finalResult;
    document.getElementById("modalScreen").style.backgroundColor = "mediumseagreen";
    document.getElementById("myModal").style.backgroundColor = "black";
    openModal();
  } else if (compScore > playerScore) {
    failureSound.play();
    document.getElementById("finalResult").style.animation = "fadeIn 2s forwards";
    document.getElementById("finalResultImg").style.animation = "fadeIn 2.5s forwards";
    document.getElementById("playerScore").style.animation = "fadeIn 3s forwards";
    document.getElementById("compScore").style.animation = "fadeIn 4s forwards";

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("compScore").innerHTML = compScore;
    document.getElementById('finalResultImg').src="images/computer.gif";
    let finalResult = "Computer Wins!";
    document.getElementById("finalResult").innerHTML = finalResult;
    document.getElementById("modalScreen").style.backgroundColor = "brown";
    document.getElementById("myModal").style.backgroundColor = "black";
    openModal();
  } else {
    drawAudio.play();
    document.getElementById("finalResult").style.animation = "fadeIn 2s forwards";
    document.getElementById("finalResultImg").style.animation = "fadeIn 2.5s forwards";
    document.getElementById("playerScore").style.animation = "fadeIn 3s forwards";
    document.getElementById("compScore").style.animation = "fadeIn 4s forwards";

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("compScore").innerHTML = compScore;
    document.getElementById('finalResultImg').src="images/arm-wrestling.gif";
    let finalResult = "Draw!";
    document.getElementById("finalResult").innerHTML = finalResult;
    document.getElementById("modalScreen").style.backgroundColor = "goldenrod";
    document.getElementById("myModal").style.backgroundColor = "black";
    openModal();
  }
};


// FUNCTION TO RESET ALL VALUES AND RESTART GAME
function restartGame() {
  playerScore = 0;
  compScore = 0;
  gameScore = 0;
  //document.getElementById("playerSelect").innerHTML = "";
  document.getElementById("compSelect").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  modal.style.display = "none";
  document.getElementById("modalScreen").style.backgroundColor = "white";
  document.getElementById('compImg').src="images/rock-paper-scissors.png";
  //document.getElementById('playerImg').src="images/rock-paper-scissors.png";
  document.getElementById('resultImg').src="images/rock-paper-scissors.png";
  document.getElementById("resultDiv").style.backgroundColor = "rgb(30, 30, 30)";
};

let buttonClick = document.getElementById("buttonAudio");
let successSound = document.getElementById("successAudio");
let failureSound = document.getElementById("failureAudio");
let drawSound = document.getElementById("drawAudio");


// FUNCTION TO PLAY BUTTON CLICK AUDIO
function playAudio() {
  buttonClick.play();
};


  // Get the modal
var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
  
// OPEN END OF GAME MODAL SCREEN
function openModal() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  restartGame();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    restartGame();
  }
}
