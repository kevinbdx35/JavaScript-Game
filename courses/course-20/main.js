//Use the same template of index.html that before like in course-1

let secretNumber = 5;
let guess;

guesser();

function guesser() {
  guess = prompt("Guess the number");
  let guessNumber = Number(guess);
  if (guessNumber === secretNumber) {
    console.log("You got it");
    return;
  } else {
    let message = guessNumber < secretNumber ? "highter" : "lower";
    console.log("Wrong GO" + message);
    guess();
  }
}

