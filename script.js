//First dice random number and image

let diceOne = document.querySelectorAll("img")[0];
let diceTwo = document.querySelectorAll("img")[1];
let userOne = {
  name: "User 1",
  totalScore: 0,
  roundScore: 0,
  wins: 0,
  isTurn: false,
};
let userTwo = {
  name: "User 2",
  totalScore: 0,
  roundScore: 0,
  wins: 0,
  isTurn: false,
};

let game = {
  round: 1,
  currentPlayer: userOne,
};
// function roll() {
//   dice.forEach(function (die) {
//     die.classList.add("shake");
//   });
//   setTimeout(function () {
//     dice.forEach(function (die) {
//       die.classList.remove("shake");
//     });
//     const firstRandomNum = Math.floor(Math.random() * 6) + 1;
//     const firstDiceImage = `assets/dice${firstRandomNum}.png`;
//     document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

//     //Second dice random number and image
//     const secondRandomNum = Math.floor(Math.random() * 6) + 1;
//     const secondDiceImage = `assets/dice${secondRandomNum}.png`;
//     document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//     if (firstRandomNum > secondRandomNum) {
//       userOne.wins++;
//       document.querySelector("h1").innerHTML = "The Winner is " + userOne.name + "!";
//       document.querySelectorAll("h4")[0].innerHTML = "Wins: " + userOne.wins;
//     } else if (firstRandomNum < secondRandomNum) {
//       userTwoWins++;
//       document.querySelector("h1").innerHTML = "The Winner is " + userTwo.name + "!";
//       document.querySelectorAll("h4")[1].innerHTML = "Wins: " + userTwo.wins;
//     } else {
//       document.querySelector("h1").innerHTML = "Draw!";
//     }
//   }, 1000);
// }

function resetPlayerOne() {
  userOne.round = 0;
  userOne.totalScore = 0;
  userOne.isTurn = false;
  document.getElementById("userOneTotal").innerHTML =
    "Total Score: " + userOne.totalScore;
  document.getElementById("userOneRoundScore").innerHTML =
    "Round Score: " + userOne.roundScore;
  document.getElementById("userOneWins").innerHTML = "Wins: " + userOne.wins;
}
function resetPlayerTwo() {
  userTwo.round = 0;
  userTwo.totalScore = 0;
  userTwo.isTurn = false;
  document.getElementById("userTwoTotal").innerHTML =
    "Total Score: " + userTwo.totalScore;
  document.getElementById("userTwoRoundScore").innerHTML =
    "Round Score: " + userTwo.roundScore;
  document.getElementById("userTwoWins").innerHTML = "Wins: " + userTwo.wins;
}

function gameStart() {
  resetPlayerOne();
  resetPlayerTwo();

  if ((game.currentPlayer = userOne)) {
    userOne.isTurn = true;
    userTwo.isTurn = false;
  } else {
    userOne.isTurn = false;
    userTwo.isTurn = true;
  }
}

function randomNumberGen() {
  let rand = Math.floor(Math.random() * 6) + 1;
  return rand;
}
function roll() {
  if (game.currentPlayer === userOne) {
    diceOne.classList.add("shake");
    setTimeout(function () {
      diceOne.classList.remove("shake");
      let firstRandomNum = randomNumberGen();
      let firstDiceImage = `assets/dice${firstRandomNum}.png`;
      document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);
      if (firstRandomNum === 1) {
        userOne.roundScore = 0;
        userOne.totalScore += userOne.roundScore;
        document.getElementById("userOneRoundScore").innerHTML =
          "Round Score: " + userOne.roundScore;
        game.currentPlayer = userTwo;
      } else {
        userOne.roundScore += firstRandomNum;
        console.log(userOne.roundScore);
        document.getElementById("userOneRoundScore").innerHTML =
          "Round Score: " + userOne.roundScore;
      }
    }, 1000);
  } else if (game.currentPlayer === userTwo) {
    diceTwo.classList.add("shake");
    setTimeout(function () {
      diceTwo.classList.remove("shake");
      let secondRandomNum = randomNumberGen();
      let secondDiceImage = `assets/dice${secondRandomNum}.png`;
      document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);
      if (secondRandomNum === 1) {
        userTwo.roundScore = 0;
        userTwo.totalScore += userTwo.roundScore;
        document.getElementById("userTwoRoundScore").innerHTML =
          "Round Score: " + userTwo.roundScore;
        game.currentPlayer = userOne;
      } else {
        userTwo.roundScore += secondRandomNum;
        console.log(userTwo.roundScore);
        document.getElementById("userTwoRoundScore").innerHTML =
          "Round Score: " + userTwo.roundScore;
      }
    }, 1000);
  }
}

function hold() {
  if (game.currentPlayer === userOne) {
    userOne.totalScore += userOne.roundScore;
    userOne.roundScore = 0;
    document.getElementById("userOneTotal").innerHTML =
      "Total Score: " + userOne.totalScore;
    document.getElementById("userOneRoundScore").innerHTML =
      "Round Score: " + userOne.roundScore;
    if (userOne.totalScore >= 50) {
      userOne.wins++;
      document.getElementById("userOneWins").innerHTML =
        "Wins: " + userOne.wins;
      resetPlayerOne();
      resetPlayerTwo();
      game.currentPlayer = userOne;
    } else {
      game.currentPlayer = userTwo;
    }
  } else {
    userTwo.totalScore += userTwo.roundScore;
    userTwo.roundScore = 0;
    document.getElementById("userTwoTotal").innerHTML =
      "Total Score: " + userTwo.totalScore;
    document.getElementById("userTwoRoundScore").innerHTML =
      "Round Score: " + userTwo.roundScore;
    if (userTwo.totalScore >= 50) {
      userTwo.wins++;
      document.getElementById("userTwoWins").innerHTML =
        "Wins: " + userTwo.wins;
      resetPlayerOne();
      resetPlayerTwo();
      game.currentPlayer = userOne;
    } else {
      game.currentPlayer = userOne;
    }
  }
}

function changeNameOne() {
  userOne.name = prompt("Please enter the new name below", "User 1");
  document.getElementById("userOneName").innerHTML = userOne.name;
}
function changeNameTwo() {
  userTwo.name = prompt("Please enter the new name below", "User 2");
  document.getElementById("userTwoName").innerHTML = userTwo.name;
}
