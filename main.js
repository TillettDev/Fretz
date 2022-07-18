var fretboard = document.getElementById("fretboard");



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


console.log(Math.floor(Math.random() * 72));

//generate random number, use that random number to target specific div inside .fretboard.
//add class to that div to show it is selected


//create function. If button clicked is = to value of random div id
// generate new random div selected.

