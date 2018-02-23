window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var word;
  var guess;
  var guesses = [];
  var lives;
  var counter;
  var space;
  var correct;
  var letters;
  var myButtons;

  var showLives = document.getElementById('myLives');

  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    };
  };

  // Create Guesses ul
  var result = function () {
    var wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (let i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === '-') {
        guess.innerHTML = '-';
        space = 1;
      } else {
        guess.innerHTML = '_'
      };

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  var comments = function () {
    showLives.innerHTML = 'You have ' + lives + ' lives';
    if (lives < 1) {
      showLives.innerHTML = 'Game Over!  The correct answer is: ' + chosenCharacter;
    }

    for (let i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = 'You Win!'
      }
    }
  }

  var check = function () {
    list.onclick = function() {
      var guess = (this.innerHTML);
      this.setAttribute('class', 'active');
      this.onclick = null;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter++;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives--;
        comments();
      } else {
        comments();
      }
    }
  }

  var play = function() {
    characters = ['zelda', 'link', 'mario', 'luigi', 'yoshi', 'peach', 'bowser', 'master-chief', 'doom-marine', 'altair', 'ezio-auditore', 'edward-kenway', 'connor-kenway', 'shay-cormac', 'bayek', 'evie-frye', 'jacob-frye', 'arno-dorian', 'liara', 'tali-zorah', 'shepard', 'grunt', 'wrex', 'samara', 'mordin-solus', 'thane-krios', 'ashley-williams', 'jacob-taylor', 'kaiden-alenko', 'miranda-lawson', 'garrus-vakarian', 'legion', 'javik', 'zaeed-massani', 'kasumi-goto', 'leonardo-davinci', 'cleopatra', 'julius-ceasar', 'rodrigo-borgia', 'cesare-borgia', 'lucrezia-borgia', 'george-washington', 'harbinger', 'sovereign', 'reapers', 'jack', 'suleiman', 'assassins', 'templars', 'warren-vidic', 'desmond-miles', 'systems-alliance', 'citadel', 'cerberus'];
    chosenCharacter = characters[Math.floor(Math.random() * characters.length)];
    word = chosenCharacter.replace(/\s/g, '-');
    console.log(word);
    buttons();
    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  play();

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    play();
  }
}