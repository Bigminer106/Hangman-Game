var winTally = 0;
var lossTally = 0;
var remainingTally = 10;
var characters = ['ezio', 'mario', 'zelda', 'link', 'luigi', 'pit', 'yoshi', 'peach', 'bowser', 'doom-marine', 'master-chief', 'cortana', 'altair'];
var playedLetters = [];
var current = characters[Math.floor(Math.random() * characters.length)];
// console.logs for sanity
console.log(playedLetters);
console.log(current);

// endGame function
function endGame() {
  document.onkeyup = undefined;
};

// Basic onkeyup Functionality
document.onkeyup = function (event) {
  if (playedLetters.length < 26) {
    playedLetters.push(event.key);
    if (playedLetters.indexOf(event.key) != -1) {
      playedLetters.push(event.key);
    }
    remainingTally--;
    if (remainingTally = 0) {
      endGame();
      lossTally++;
    }
  } else {
    endGame();
  };
};
