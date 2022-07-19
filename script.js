//First dice random number and image

let dice = document.querySelectorAll("img");
let userOneWins = 0;
let userTwoWins = 0;
let userOne = 'User 1';
let userTwo = 'User 2';
function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = `assets/dice${firstRandomNum}.png`;
    document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

    //Second dice random number and image
    const secondRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondDiceImage = `assets/dice${secondRandomNum}.png`;
    document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

    if (firstRandomNum > secondRandomNum) {
      userOneWins++;
      document.querySelector("h1").innerHTML = "The Winner is " + userOne + "!";
      document.querySelectorAll("h4")[0].innerHTML = "Wins: " + userOneWins;
    } else if (firstRandomNum < secondRandomNum) {
      userTwoWins++;
      document.querySelector("h1").innerHTML = "The Winner is " + userTwo + "!";
      document.querySelectorAll("h4")[1].innerHTML = "Wins: " + userTwoWins;
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  }, 1000);
}

function changeNameOne() {
  userOne = prompt("Please enter the new name below");
  document.querySelectorAll("p")[0].innerHTML = userOne;
}
function changeNameTwo() {
  userTwo = prompt("Please enter the new name below");
  document.querySelectorAll("p")[1].innerHTML = userTwo;
}
