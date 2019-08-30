


///I'm pretty bummed that I spent a lot of time on this and through tutoring and several tutorials, I'm still struggling with these concepts. I had a really good idea set up for this but I just can get the hang of javascript so I think it's back to the drawing board for me.///



const word = ["samus aran", "link", "pikachu", "nemesis","donkey kong", "chun li", "chocobo", "scorpion", "mario", "fox"]; 
       //Choose word randonly     
let randNum = Math.floor(Math.random() * word.length);
let rightWord = [];
let wrongWord = [];
let chosenWord = word[randNum];
let underScore = [];

///DOM MANIPULATION

let docUnderScore = document.getElementsByClassName("underScore");
let docRightGuess= document.getElementsByClassName('rightGuess'); 
letWrongGuess = document.getElementsByClassName('wrongGuess');

//main
//======================

///lets the user know how long the word is
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());
//GET USER GUESS
document.addEventListener('keypress', (event) => {
        let keyword = String.fromCharCode(event.keyCode);
        //if user's guess is right
        if(chosenWord.indexOf(keyword) > -1) {
         /// add to right words array
         rightWord.push(keyword); 

         //replace underscor with right letter
         underScore[chosenWord.indexOf(keyword)] = keyword;
         underScore[0].innerHTML = underScore.join(" ");
        
         if(underScore.join("") == chosenWord) {
            alert("YOU WIN!");
            
        }
    }
    else{
        wrongWord.push(keyword);
        wrongGuess[0].innerHTML =wrongWord.join (" ");
        alert("FATALITY");
        

    }      
});

generateUnderscore();





        
        
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


          