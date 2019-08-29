

/*var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z']; *//


var characters= [
        "samus aran","link","pikachu", "nemesis","donkey kong", "chun li","chocobo", "scorpion", "mario", "fox"]; 
            //SAMUS ARAN    [0]
            //LINK          [1]
            //PIKACHU       [2]
            //NEMESIS       [3]
            //DONKEY KONG   [4]
            //CHUN LI       [5]
            //CHOCOBO       [6]
            //SCORPION      [7]
            //MARIO         [8]
            //FOX           [9]


            ///FIGURE OUT HOW MANY TRIES THE PLAYER HAS.
            const maxTries =10;

            ///STORE THE LETTERS THAT HAVE BEEN GUESSED
            var guessedLetters = [];

            ///INDEX OF THE CURRENT WORD IN ARRAY
            var currentWordIndex;

            ///THIS IS WHERE THE PLAYER BUILDS THE WORD TO MATH THE COMPUTER
            var guessingWord = [];

            ///THIS IS HOW MANY TRIES THE PLAYER HAS LEFT
            var remainingGuess = 0;

            ///LETS THE PLAYER KNOW THE GAME HAS STARTED
            var gameStarted = false;

            ///LETS PLAYER KNOW WHEN GAME IS FINISHED also  'PRESS ANY KEY TO START OVER'
            var hasFinished = false;

            ///HOW MANY WINS THE PLAYER HAS
            var wins = 0;

            /////////////GAME MECHANICS//////////////

            ///RESET THE GAME VARIABLES
            function resetGame(){
                remainingGuess = maxTries;
                gameStarted = false;
            

            ///THE MATH FLOOR FUNCTION GENERATES A RANDOM WORD FOR THE PLAYER TO GUESS
            currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

            ///CLEARS OUT ARRAYS
            guessedLetters = [];
            guessingWord = [];

            /// THIS IS THE CODE TO BUILD THE GUESSING WORD
            for (var i =0; i <selectableWords[currentWordIndex].length; i++){
                guessingWord.push("_");
            }

            ///SHOW DISPLAY
            updateDisplay();
        };

            













      /*/*BEGINNING WORD VARIABLES AND RANDOM WORD GENERATOR

PUSH PUSH PUSH

    function Game() {

        //Words to guess
    var words= [
        "samus aran","link","pikachu", "nemesis","donkey kong", "chun li","chocobo", "scorpion", "mario", "fox"]; 

    var random = "";
    var wordLetters = [];
    var blankSpace = 0;
    var correctBlank = [];
    var incorrectGuess =[];

    //Here are the variables for my counter

    var win = 0;
    var losses = 0;
    var remainingGuess =10;

    //GAME START OPERATION

        //This will generate a random word from my word array (or list)

    function Game(){
        random = words[Math.floor(Math.random() * words.length)]; 

        wordLetters = random.split("");

        //This is telling my game to store my letters in blank spaces.
        blankSpace = wordLetters.length;

        //Here is my loop that will create the blank spaces of my word.

        for (var i = 0; i<blankSpace; i++){
            correctBlank.push("_");
        }
        
        //I want the blanks/ underscore to show in HTML

        //INSERT HTML CODE HERE//

        //CONSOLE LOG
        console.log(random);
        console.log(wordLetters);
        console.log(blankSpace);
        console.log(correctBlank);
    }}

    //-------------------INSERT AUDIO VARIABLES HERE! HERE------------------------------------------

    //SAMUS ARAN    [0]
    //LINK          [1]
    //PIKACHU       [2]
    //NEMESIS       [3]
    //DONKEY KONG   [4]
    //CHUN LI       [5]
    //CHOCOBO       [6]
    //SCORPION      [7]
    //MARIO         [8]
    //FOX           [9]

// ----10 TOTAL--- //

function audio() {

 if(random === words[0]) {     //If word is samus aran
        //insert audio image
 }

 else if(random ===words[1]) { //If word is Link
 }

 else if(random ===words[2]) { //If word is Pikachu
 }

 else if(random ===words[3]) { //If word is Nemesis
 }
 else if(random ===words[4]) { //If word is Donkey Kong
 }
 else if(random ===words[5]) { //If word is Chun Li
 }
 else if(random ===words[6]) { //If word is Chocobo
 }
 else if(random ===words[7]) { //If word is Scorpion
 }
 else if(random ===words[8]) { //If word is Mario
 }
 else if(random ===words[9]) { //If word is Fox

 }
};

//GAME RESET//

funtion reset() {
    remainingGuess = 9;
    incorrectGuess = [];
    correctBlank =[];
    Game()
};




//This is where the computer checks the user input, if correct or not.
function letterCheck()