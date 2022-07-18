var fretboard = document.getElementById("fretboard");


var playerScore = 0;
var totalGuess = 0;

var counter = 0;

var className;

var fret = document.createElement("div");

var notes = ["F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"];
var index = 0;

while (counter < 72){

    if ([23, 26, 28, 30, 32, 47].indexOf(counter) > -1){
        className = "fret_mark"
    } else{ 
        className = ""; 
    }


    if (counter == 12){
        index = 5;
    } else if (counter == 24){
        index = 10;
    } else if (counter == 36){
        index = 3;
    } else if (counter == 48){
        index = 7;
    } else if (counter == 60){
        index = 0;
    }

    if (index == 12){
        index = 0;
    }

    
    var fret = document.createElement("div");
    fret.className = className;
    fret.setAttribute("id", notes[index]);
    // fret.className = counter;
    fretboard.appendChild(fret);
    counter++;
    index++;
}

function generateRandomNote(){

    var randomNumber = Math.floor(Math.random() * 72);
    console.log(fretboard.children[randomNumber]);
    var randomFret = fretboard.children[randomNumber];
    randomFret.className = "selected";
    return randomFret;
}

var randomFret = generateRandomNote();
var randomFretNote = randomFret.id;

var playerScoreSpan = document.getElementById("playerScore"); 
var totalGuessSpan = document.getElementById("totalGuesses");


const noteBtns = document.querySelectorAll(".note_btn");

noteBtns.forEach(button =>{
    button.addEventListener("click", function handleClick(event){
        var userGuess = button.value;

        if (randomFretNote == "C#"){
            flatNote = "Db";
        } else if(randomFretNote == "D#"){
            flatNote = "Eb";
        } else if(randomFretNote == "F#"){
            flatNote = "Gb";
        } else if(randomFretNote == "G#"){
            flatNote = "Ab";
        } else if(randomFretNote == "A#"){
            flatNote = "Bb";
        }
        else{
            flatNote = randomFretNote;
        }

        if( userGuess == randomFretNote || userGuess == flatNote){
            console.log("guess correct");

            randomFret.classList = "";

            randomFret = generateRandomNote()
            randomFretNote = randomFret.id;

            playerScore++;
            playerScoreSpan.innerHTML = playerScore;

        } else{
            console.log("guess incorrect");
        }

        totalGuess++;
        totalGuessSpan.innerHTML = totalGuess;
    })
})





//generate random number, use that random number to target specific div inside .fretboard.
//add class to that div to show it is selected


//create function. If button clicked is = to value of random div id
// generate new random div selected.

