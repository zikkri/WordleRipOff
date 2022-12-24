//call api request to get words then filter to length of five 
//const allWords = 


//filtered words that are five letters long
//const filteredWords


//pop and push into here once used
//const usedWord

//change colours of background to yellow if in word and not in right place, green if in right place






//variables
var guess = document.getElementById('guesser');
var numberGuess = 0;




//button stuff
const button = document.querySelector('button');
button.addEventListener('click', userGuess, false);


//submit function
function userGuess(){  
  
  if(ValidateGuess()){
    numberGuess++;  
    console.log(guess.value);
    console.log(numberGuess);  
    guess.value = "";
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
function DisplayGuess(){

}

