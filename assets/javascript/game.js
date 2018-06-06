

var myGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(myGuess);

var compRand = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(compRand);

var wins = 0;
var lost = 0;
var left = 16;
// var guess = 27;

document.onkeyup = function (event) {

    var myGuess = document.getElementById("guess");
    guess.textContent = event.key;

    // for (i = 0, i <= guess.length-1, i++) {
    //     var newGuess = document.createElement("guess");
    //     newGuess.innerHTML = myGuess.responseText;
    //     document.getElementById("guess").appendChild("newGuess");
    // }
    
    var compGuess = compRand[Math.floor(Math.random() * compRand.length)];

    if (myGuess === "compGuess") {
        wins++;
    } else {
        left--;
    }

    if (left <= 0) {
        lost++;
        left=15;
    } 

    

    var html =
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + lost + "</p>" +
    "<p> Guesses Left: " + left + "</p>";
    
    document.querySelector("#start").innerHTML = html;


}