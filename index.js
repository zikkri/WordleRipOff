//on load
window.addEventListener("load", GetWord, false);

//lists
var possibleWords = [];
var oldWords = [];

//variables
var guess = document.getElementById("guesser");
var numberGuess = 0;
var answer = "";

//button stuff
const button = document.querySelector(".guess button");
button.addEventListener("click", UserGuess, false);

//make so enter will fire in the guess instead of having to click everytime
guess.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

//took reset button out just needed to test for new game function
const reset = document.querySelector("#reset");
reset.addEventListener("click", NewGame, false);

//submit function
function UserGuess() {
  if (ValidateGuess()) {
    numberGuess++;    
    DisplayGuess();
  }
}

//needs to be five letters
function ValidateGuess() {
  if (guess.value.length != 5) {
    $(".guess").effect("shake");
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

      if (guess.value.toLowerCase() == answer) {
        for (var i = 0; i < 5; i++) {
          first[i].innerHTML = guess.value[i];
          div[i].style.backgroundColor = "green";
        }
        DisplayWin();
      }

      for (var i = 0; i < 5; i++) {
        first[i].innerHTML = guess.value[i];

        if (guess.value[i].toLowerCase() == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i].toLowerCase())) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 2:
      var second = document.querySelectorAll("#second-guess-div p");
      var div = document.querySelectorAll("#second-guess-div div");

      if (guess.value.toLowerCase() == answer) {
        for (var i = 0; i < 5; i++) {
          second[i].innerHTML = guess.value[i];
          div[i].style.backgroundColor = "green";
        }
        DisplayWin();
      }

      for (var i = 0; i < 5; i++) {
        second[i].innerHTML = guess.value[i];

        if (guess.value[i].toLowerCase() == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i].toLowerCase())) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 3:
      var third = document.querySelectorAll("#third-guess-div p");
      var div = document.querySelectorAll("#third-guess-div div");

      if (guess.value.toLowerCase() == answer) {
        for (var i = 0; i < 5; i++) {
          third[i].innerHTML = guess.value[i];
          div[i].style.backgroundColor = "green";
        }
        DisplayWin();
      }

      for (var i = 0; i < 5; i++) {
        third[i].innerHTML = guess.value[i];

        if (guess.value[i].toLowerCase() == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i].toLowerCase())) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 4:
      var fourth = document.querySelectorAll("#fourth-guess-div p");
      var div = document.querySelectorAll("#fourth-guess-div div");

      if (guess.value.toLowerCase() == answer) {
        for (var i = 0; i < 5; i++) {
          fourth[i].innerHTML = guess.value[i];
          div[i].style.backgroundColor = "green";
        }
        DisplayWin();
      }

      for (var i = 0; i < 5; i++) {
        fourth[i].innerHTML = guess.value[i];

        if (guess.value[i].toLowerCase() == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i].toLowerCase())) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 5:
      var fifth = document.querySelectorAll("#fifth-guess-div p");
      var div = document.querySelectorAll("#fifth-guess-div div");

      if (guess.value.toLowerCase() == answer) {
        for (var i = 0; i < 5; i++) {
          fifth[i].innerHTML = guess.value[i];
          div[i].style.backgroundColor = "green";
        }
        numberGuess = 0;
        DisplayWin();
      }

      for (var i = 0; i < 5; i++) {
        fifth[i].innerHTML = guess.value[i];

        if (guess.value[i].toLowerCase() == answer[i]) {
          div[i].style.backgroundColor = "green";
        } else if (answer.includes(guess.value[i].toLowerCase())) {
          div[i].style.backgroundColor = "yellow";
        }
      }

      if (guess.value.toLowerCase() != answer) {
        guess.value = "";
        DisplayLoss();
        break;
      }

      guess.value = "";
  }
}

//reset game
function NewGame() {
  ResetAll();
  NewWord();
}

function GetWord() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function (e) {
    if (xhr.status === 200) {
      const text = xhr.responseText;
      const lines = text.split("\n");
      const modifiedLines = lines.map((line) => line.replace("\r", ""));
      //console.log(modifiedLines);
      answer =
        modifiedLines[Math.floor(Math.random() * modifiedLines.length - 1) + 1];
      console.log(answer);

      possibleWords = modifiedLines;
    }
  };

  xhr.open("GET", "./sgb-words.txt");
  xhr.send();
}

//popup modal if you win -- offer to play another round
function DisplayWin() {
  //modal popup
  setTimeout(function () {
    $("#winModal").modal("show");
  }, 500);
}

//popup modal if you reach max tries -- offer to play again
function DisplayLoss() {
  //modal popup
  setTimeout(function () {
    $("#lossModal").modal("show");
  }, 500);
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

function NewWord() {
  answer =
    possibleWords[Math.floor(Math.random() * possibleWords.length - 1) + 1];
  console.log(answer);
}
