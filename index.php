<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Fretz 🎸</title>
        <meta name="description" content="Fretz - Guitar Fretboard Trainer">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/style.css">
        <!-- <link rel="stylesheet" href="https://<?php echo $_SERVER['SERVER_NAME'] ?>/htdocs/css/style.css"> -->
    </head>
    <body>
        <section class="section_main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 main_col">
                        <div class="fretboard" id="fretboard"></div>
                        <div class="circle"></div>
                    </div>
                </div>   
            </div>
        </section>

        <section class="note_bar">
            <div class="game_info">
                    <p>Score: <span id="playerScore">0</span>/<span id="totalGuesses">0</span></p>
                    <p>Time: <span id=time></span></p>
            </div>
            <div class="notes_wrap">
                <div class="note_column">
                <button class="note_btn" value="C#">C♯</button>
                <button class="note_btn" value="C">C</button>
                </div>

                <div class="note_column">
                <button class="note_btn" value="D#">D♯</button>
                <button class="note_btn" value="D">D</button>
                <button class="note_btn" value="Db">D♭</button>
                </div>

                <div class="note_column flex_end">
                <button class="note_btn" value="E">E</button>
                <button class="note_btn" value="Eb">E♭</button>
                </div>

                <div class="note_column">
                <button class="note_btn" value="F#">F♯</button>
                <button class="note_btn" value="F">F</button>
                </div>

                <div class="note_column">
                <button class="note_btn" value="G#">G♯</button>
                <button class="note_btn" value="G">G</button>
                <button class="note_btn" value="Gb">G♭</button>
                </div>

                <div class="note_column">
                <button class="note_btn" value="A#">A♯</button>
                <button class="note_btn" value="A">A</button>
                <button class="note_btn" value="Ab">A♭</button>
                </div>

                <div class="note_column flex_end">
                <button class="note_btn" value="B">B</button>
                <button class="note_btn" value="Bb">B♭</button>
                </div>
            </div>
        </section>
        <script src="main.js" async defer></script>
    </body>
</html>