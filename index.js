//call api request to get words then filter to length of five 
//const allWords = 


//filtered words that are five letters long
//const filteredWords


//pop and push into here once used
//const usedWord



//variables
var guess = document.getElementById('guesser');
var numberGuess = 0;
var answer = "abcde"; //testing

//button stuff
const button = document.querySelector('button');
button.addEventListener('click', UserGuess, false);


//submit function
function UserGuess(){  
  
  if(ValidateGuess()){
    numberGuess++;  
    console.log(guess.value);
    console.log(numberGuess);      
    DisplayGuess();    
  }
  
}


//needs to be five letters
function ValidateGuess(){
  
  if(guess.value.length < 5 || guess.value.length > 5)
  {
    console.log("this is an invalid guess");
    guess.value = "";
    return false;
  }  

  return true;

}


//pass 
//change colours of background to yellow if in word and not in right place, green if in right place 
function DisplayGuess(){
  
  switch(numberGuess)
  {
    case 1:      
      
      var first = document.querySelectorAll("#first-guess-div p");      
      var div = document.querySelectorAll("#first-guess-div div")

      for(var i = 0; i < 5; i++){
        first[i].innerHTML = guess.value[i];
        
        if(guess.value[i] == answer[i]){
          div[i].style.backgroundColor = "green";
        }        

        else if(answer.includes(guess.value[i])){
          div[i].style.backgroundColor = "yellow";
        }
      }      

      guess.value = "";
      break;

    case 2:
      
      var second = document.querySelectorAll("#second-guess-div p");                  
      var div = document.querySelectorAll("#second-guess-div div")

      for(var i = 0; i < 5; i++){
        second[i].innerHTML = guess.value[i];

        if(guess.value[i] == answer[i]){
          div[i].style.backgroundColor = "green";
        }        

        else if(answer.includes(guess.value[i])){
          div[i].style.backgroundColor = "yellow";
        }
      }
      
      guess.value = "";
      break;

    case 3: 
      
      var third = document.querySelectorAll("#third-guess-div p");      
      var div = document.querySelectorAll("#third-guess-div div")

      for(var i = 0; i < 5; i++){
        third[i].innerHTML = guess.value[i];

        if(guess.value[i] == answer[i]){
          div[i].style.backgroundColor = "green";
        }        

        else if(answer.includes(guess.value[i])){
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 4:
      
      var fourth = document.querySelectorAll("#fourth-guess-div p");     
      var div = document.querySelectorAll("#fourth-guess-div div") 


      for(var i = 0; i < 5; i++){
        fourth[i].innerHTML = guess.value[i];

        if(guess.value[i] == answer[i]){
          div[i].style.backgroundColor = "green";
        }        

        else if(answer.includes(guess.value[i])){
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;

    case 5: 
      
      var fifth = document.querySelectorAll("#fifth-guess-div p");      
      var div = document.querySelectorAll("#fifth-guess-div div") 

      for(var i = 0; i < 5; i++){
        fifth[i].innerHTML = guess.value[i];

        if(guess.value[i] == answer[i]){
          div[i].style.backgroundColor = "green";
        }        

        else if(answer.includes(guess.value[i])){
          div[i].style.backgroundColor = "yellow";
        }
      }

      guess.value = "";
      break;
  }

}


//reset game
function NewGame(){
  numberGuess = 0;

}

function StartGame(){

}

function ChangeColors(){
  
}