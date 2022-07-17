var fretboard = document.getElementById("fretboard");



var counter = 0;

var className;

var fret = document.createElement("div");

// var notes = ["C", "C♯", "D♭", "D", "D♯", "E♭", "E", "F", "F♯", "G♭", "G", "G♯"]

// var notes = ["F", "F♯", "G", "G♯", "A♭", "A", "A♯", "B♭", "B", "C", "C♯", "D♭", "D", "D♯", "E♭", "E"];

var notes = ["F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E"];

var noteCount = 0;
var offset = 4

while (counter < 72){

    if ([23, 26, 28, 30, 32, 47].indexOf(counter) > -1){
        className = "fret_mark"
    } else{ 
        className = ""; 
    }

    if (noteCount == 12){
        noteCount = 5;
    }

    
    var fret = document.createElement("div");
    fret.className = className;
    fret.setAttribute("id", notes[noteCount]);
    // fret.className = counter;
    fretboard.appendChild(fret);
    counter++;
    noteCount++;
}