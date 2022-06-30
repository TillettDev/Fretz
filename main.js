var fretboard = document.getElementById("fretboard");


var counter = 0;

var fret = document.createElement("div");

while (counter < 72){
    var fret = document.createElement("div");
    
    // var num = document.createTextNode(counter);

    // fret.appendChild(num);
    fretboard.appendChild(fret);
    counter++;
}