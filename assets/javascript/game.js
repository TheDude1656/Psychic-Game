window.onload = function() {

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var gLeft = 10;
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerGuess);


    document.onkeyup = function(event) {
        var guess = event.key;
        $("#guessed").append(guess + " ");

        document.getElementById("reset").onclick = function() {

            gLeft = 10;
            $("#guessleft").html("Guesses Left: " + gLeft);
            $("#guessed").html("Your Guess so far: ");
            $("#winlose").html("");
           

        };
        if (guess === computerGuess) {
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#winlose").html("<h1>YOU WIN!</h1>");
            gLeft = 10;


        } else {
            gLeft--;
            $("#guessesleft").html("Guesses Left: " + gLeft);
            if (gLeft <= 0) {
                $("#winlose").html("<h1>YOU LOSE!</h1>");


            }
        }

        console.log(gLeft);
        console.log(computerGuess);
        console.log(wins);
    }
}
