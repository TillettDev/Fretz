var fretboard = document.getElementById("fretboard");



var counter = 0;

var className;

var fret = document.createElement("div");

var notes = ["C", "C♯", "D♭", "D", "D♯", "E♭", "E", "F", "F♯", "G♭", "G", "G♯"]

while (counter < 72){



    if ([14,26,38,50,66,70].indexOf(counter) > -1){
        className = "fret_mark"
    } else{ 
        className = ""; 
    }

    if (counter == (counter)){
        //work on nth term here - fix if
    }
    
    var fret = document.createElement("div");
    fret.className = className;
    // fret.className = counter;
    fretboard.appendChild(fret);
    counter++;
}