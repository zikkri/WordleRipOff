//variables
var guess = document.getElementById("guesser");
var numberGuess = 0;
var answer = "abcde"; //testing -- make call to an api + return it to this word

//lists
var allWords = [];
var possibleWords = [];
var oldWords = [];

//button stuff
const button = document.querySelector(".guess button");
button.addEventListener("click", UserGuess, false);

//took reset button out just needed to test for new game function
const reset = document.querySelector("#reset");
reset.addEventListener("click", NewGame, false);

//submit function
function UserGuess() {
  if (ValidateGuess()) {
    numberGuess++;
    console.log(guess.value);
    console.log(numberGuess);
    DisplayGuess();
  }
}

//needs to be five letters
function ValidateGuess() {
  if (guess.value.length != 5) {
    console.log("this is an invalid guess");
    guess.value = "";
    return false;
  }

  return true;
}

//change colours of background to yellow if in word and not in right place, green if in right place
function DisplayGuess() {
  switch (numberGuess) {
    case 1:
      var first = document.querySelectorAll("#first-guess-div p");
      var div = document.querySelectorAll("#first-guess-div div");

      if (guess.value == answer) {
        for (var i = 0; i < 5; i++) {
          first[i].innerHTML = guess.value[i];
          div[i].style.backgroundColor = "green";
        }
        DisplayWin();
      }

      for (var i = 0; i < 5; i++) {
        first[i].innerHTML = guess.value[i];

        if (guess.value[i] == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i])) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 2:
      var second = document.querySelectorAll("#second-guess-div p");
      var div = document.querySelectorAll("#second-guess-div div");

      for (var i = 0; i < 5; i++) {
        second[i].innerHTML = guess.value[i];

        if (guess.value[i] == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i])) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 3:
      var third = document.querySelectorAll("#third-guess-div p");
      var div = document.querySelectorAll("#third-guess-div div");

      for (var i = 0; i < 5; i++) {
        third[i].innerHTML = guess.value[i];

        if (guess.value[i] == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i])) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 4:
      var fourth = document.querySelectorAll("#fourth-guess-div p");
      var div = document.querySelectorAll("#fourth-guess-div div");

      for (var i = 0; i < 5; i++) {
        fourth[i].innerHTML = guess.value[i];

        if (guess.value[i] == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i])) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 5:
      var fifth = document.querySelectorAll("#fifth-guess-div p");
      var div = document.querySelectorAll("#fifth-guess-div div");

      for (var i = 0; i < 5; i++) {
        fifth[i].innerHTML = guess.value[i];

        if (guess.value[i] == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i])) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      //need to make a method -- if all letters match it breaks -- will have to add as another else if in above methods

      guess.value = "";
      break;
  }
}

//reset game
function NewGame() {
  ResetAll();
  GetWord();
}

function GetWord() {
  //method to fetch new word from api + filter to make words 5 letters only
  //current word popped from possilbewords list and into oldwords list
}

//popup modal if you win -- offer to play another round
function DisplayWin() {
  //modal popup
  const winModal = document.querySelector("#exampleModal");
  winModal.style.
}

//popup modal if you reach max tries -- offer to play again
function DisplayLoss() {
  //modal popup
}

function ResetAll() {
  numberGuess = 0;

  var first = document.querySelectorAll("#first-guess-div p");
  var div1 = document.querySelectorAll("#first-guess-div div");

  var second = document.querySelectorAll("#second-guess-div p");
  var div2 = document.querySelectorAll("#second-guess-div div");

  var third = document.querySelectorAll("#third-guess-div p");
  var div3 = document.querySelectorAll("#third-guess-div div");

  var fourth = document.querySelectorAll("#fourth-guess-div p");
  var div4 = document.querySelectorAll("#fourth-guess-div div");

  var fifth = document.querySelectorAll("#fifth-guess-div p");
  var div5 = document.querySelectorAll("#fifth-guess-div div");

  first.forEach((x) => {
    x.innerHTML = "";
  });

  div1.forEach((x) => {
    x.style.backgroundColor = "black";
  });

  second.forEach((x) => {
    x.innerHTML = "";
  });

  div2.forEach((x) => {
    x.style.backgroundColor = "black";
  });

  third.forEach((x) => {
    x.innerHTML = "";
  });

  div3.forEach((x) => {
    x.style.backgroundColor = "black";
  });

  fourth.forEach((x) => {
    x.innerHTML = "";
  });

  div4.forEach((x) => {
    x.style.backgroundColor = "black";
  });

  fifth.forEach((x) => {
    x.innerHTML = "";
  });

  div5.forEach((x) => {
    x.style.backgroundColor = "black";
  });
}
