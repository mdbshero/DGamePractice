//First dice random number and image

let dice = document.querySelectorAll("img");
const userOne = {
  name: 'User 1',
  wins: 0
}
const userTwo = {
  name: 'User 2',
  wins: 0
}
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
      userOne.wins++;
      document.querySelector("h1").innerHTML = "The Winner is " + userOne.name + "!";
      document.querySelectorAll("h4")[0].innerHTML = "Wins: " + userOne.wins;
    } else if (firstRandomNum < secondRandomNum) {
      userTwoWins++;
      document.querySelector("h1").innerHTML = "The Winner is " + userTwo.name + "!";
      document.querySelectorAll("h4")[1].innerHTML = "Wins: " + userTwo.wins;
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  }, 1000);
}

function changeNameOne() {
  userOne.name = prompt("Please enter the new name below", 'User 1');
  document.querySelectorAll("p")[0].innerHTML = userOne.name;
}
function changeNameTwo() {
  userTwo.name = prompt("Please enter the new name below", 'User 2');
  document.querySelectorAll("p")[1].innerHTML = userTwo.name;
}
