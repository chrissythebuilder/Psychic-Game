

var myGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(myGuess);

var compRand = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(compRand);

var wins = 0;
var lost = 0;
var left = 16;


document.onkeyup = function (event) {

    var myGuess = document.getElementById("guess");
    guess.textContent = event.key + "," + guess.textContent;

    // once User have 0 Guesses Left, "Your Guesses So Far" must reset and remove all the letters guessed
    
    var compGuess = compRand[Math.floor(Math.random() * compRand.length)];

    if (myGuess === compGuess) {
        wins++;
        left=15;
    } else {
        left--;
    }

    if (left <= 0) {
        lost++;
        left=15;
        guess.textContent="";
        // do not repeat letters that have been guessed
    } 


    var html =
    "<p> Wins: " + wins + "</p> <br>" +
    "<p> Losses: " + lost + "</p> <br>" +
    "<p> Guesses Left: " + left + "</p> <br>";

    document.querySelector("#start").innerHTML = html;


}