var startButton = document.getElementById('startButton');
var answersForQuestionOne = document.getElementById("answersForQuestionOne");
var questionOne = document.getElementById("questionOne");
var answerOneforQuestionOne = document.getElementById("answerOneforQuestionOne");
var answerTwoforQuestionOne = document.getElementById("answerTwoforQuestionOne");
var answerThreeforQuestionOne = document.getElementById("answerThreeforQuestionOne");
var answerFourforQuestionOne = document.getElementById("answerFourforQuestionOne");
var questionTwo = document.getElementById("questionTwo");
var answerOneforQuestionTwo = document.getElementById("answerOneforQuestionTwo");
var answerTwoforQuestionTwo = document.getElementById("answerTwoforQuestionTwo");
var answerThreeforQuestionTwo = document.getElementById("answerThreeforQuestionTwo");
var answerFourforQuestionTwo = document.getElementById("answerFourforQuestionTwo");
var questionThree = document.getElementById("questionThree");
var answerOneforQuestionThree = document.getElementById("answerOneforQuestionThree");
var answerTwoforQuestionThree = document.getElementById("answerTwoforQuestionThree");
var answerThreeforQuestionThree = document.getElementById("answerThreeforQuestionThree");
var answerFourforQuestionThree = document.getElementById("answerFourforQuestionThree");
var questionFour = document.getElementById("questionFour");
var answerOneforQuestionFour = document.getElementById("answerOneforQuestionFour");
var answerTwoforQuestionFour = document.getElementById("answerTwoforQuestionFour");
var answerThreeforQuestionFour = document.getElementById("answerThreeforQuestionFour");
var answerFourforQuestionFour = document.getElementById("answerFourforQuestionFour");
var score = 0;
var printScore = document.getElementById("score");
var printName = document.getElementById('userName');

// makes startButton disappear after it is clicked
startButton.addEventListener("click", function() {
  startButton.style.display = "none";

  // https://www.w3schools.com/howto/howto_js_countdown.asp
  // 60 second count down
  var countDownDate = new Date(new Date().getTime() + 1 * 60000);

  const timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "YOU LOSE";
    }
  }, 1000);
});

//QUESTION ONE OPTIONS
answerOneforQuestionOne.addEventListener("click", function() {
  answerOneforQuestionOne.style.color = "green";
  // increase the score by 25
  score += 25;
  setTimeout(function() {
    questionOne.style.display = "none";
    
    for (var i=0; i < answersForQuestionOne.children.length; i++) {
        answersForQuestionOne.children[i].style.display = "none";
    }
  }, 2000);
});

answerTwoforQuestionOne.addEventListener("click", function() {
  answerTwoforQuestionOne.style.color = "red";
  timer -= 15;
  setTimeout(function() {
    questionOne.style.display = "none";

    for (var i=0; i < answersForQuestionOne.children.length; i++) {
        answersForQuestionOne.children[i].style.display = "none";
    }
  }, 2000);
});

answerThreeforQuestionOne.addEventListener("click", function() {
  answerThreeforQuestionOne.style.color = "red";
  setTimeout(function() {
    questionOne.style.display = "none";

    for (var i=0; i < answersForQuestionOne.children.length; i++) {
        answersForQuestionOne.children[i].style.display = "none";
    }
  }, 2000);
});

answerFourforQuestionOne.addEventListener("click", function() {
  answerFourforQuestionOne.style.color = "red";
  setTimeout(function() {
    questionOne.style.display = "none";

    for (var i=0; i < answersForQuestionOne.children.length; i++) {
        answersForQuestionOne.children[i].style.display = "none";
    }
  }, 2000);
});

//QUESTION TWO OPTIONS
answerOneforQuestionTwo.addEventListener("click", function() {
  answerOneforQuestionTwo.style.color = "red";
  setTimeout(function() {
    questionTwo.style.display = "none";

    for (var i=0; i < answersForQuestionTwo.children.length; i++) {
        answersForQuestionTwo.children[i].style.display = "none";
    }
  }, 2000);
});

answerTwoforQuestionTwo.addEventListener("click", function() {
  answerTwoforQuestionTwo.style.color = "green";
  score += 25;
  setTimeout(function() {
    questionTwo.style.display = "none";

    for (var i=0; i < answersForQuestionTwo.children.length; i++) {
        answersForQuestionTwo.children[i].style.display = "none";
    }
  }, 2000);
});

answerThreeforQuestionTwo.addEventListener("click", function() {
  answerThreeforQuestionTwo.style.color = "red";
  setTimeout(function() {
    questionTwo.style.display = "none";

    for (var i=0; i < answersForQuestionTwo.children.length; i++) {
        answersForQuestionTwo.children[i].style.display = "none";
    }
  }, 2000);
});

answerFourforQuestionTwo.addEventListener("click", function() {
  answerFourforQuestionTwo.style.color = "red";
  setTimeout(function() {
    questionTwo.style.display = "none";

    for (var i=0; i < answersForQuestionTwo.children.length; i++) {
        answersForQuestionTwo.children[i].style.display = "none";
    }
  }, 2000);
});

// QUESTION THREE OPTIONS
answerOneforQuestionThree.addEventListener("click", function() {
  answerOneforQuestionThree.style.color = "red";
  setTimeout(function() {
    questionThree.style.display = "none";

    for (var i=0; i < answersForQuestionThree.children.length; i++) {
        answersForQuestionThree.children[i].style.display = "none";
    }
  }, 2000);
});

answerTwoforQuestionThree.addEventListener("click", function() {
  answerTwoforQuestionThree.style.color = "red";
  setTimeout(function() {
    questionThree.style.display = "none";

    for (var i=0; i < answersForQuestionThree.children.length; i++) {
        answersForQuestionThree.children[i].style.display = "none";
    }
  }, 2000);
});

answerThreeforQuestionThree.addEventListener("click", function() {
  answerThreeforQuestionThree.style.color = "green";
  score += 25;
  setTimeout(function() {
    questionThree.style.display = "none";

    for (var i=0; i < answersForQuestionThree.children.length; i++) {
        answersForQuestionThree.children[i].style.display = "none";
    }
  }, 2000);
});

answerFourforQuestionThree.addEventListener("click", function() {
  answerFourforQuestionThree.style.color = "red";
  setTimeout(function() {
    questionThree.style.display = "none";

    for (var i=0; i < answersForQuestionThree.children.length; i++) {
        answersForQuestionThree.children[i].style.display = "none";
    }
  }, 2000);
});


// QUESTION FOUR OPTIONS
answerOneforQuestionFour.addEventListener("click", function() {
  answerOneforQuestionFour.style.color = "red";
  setTimeout(function() {
    questionFour.style.display = "none";

    for (var i=0; i < answersForQuestionFour.children.length; i++) {
        answersForQuestionFour.children[i].style.display = "none";
    }
  }, 2000);
});

answerTwoforQuestionFour.addEventListener("click", function() {
  answerTwoforQuestionFour.style.color = "red";
  setTimeout(function() {
    questionFour.style.display = "none";

    for (var i=0; i < answersForQuestionFour.children.length; i++) {
        answersForQuestionFour.children[i].style.display = "none";
    }
  }, 2000);
});

answerThreeforQuestionFour.addEventListener("click", function() {
  answerThreeforQuestionThree.style.color = "red";
  setTimeout(function() {
    questionFour.style.display = "none";

    for (var i=0; i < answersForQuestionFour.children.length; i++) {
        answersForQuestionFour.children[i].style.display = "none";
    }
  }, 2000);
});

answerFourforQuestionFour.addEventListener("click", function() {
  answerFourforQuestionFour.style.color = "green";
  score += 25;
  setTimeout(function() {
    questionFour.style.display = "none";

    for (var i=0; i < answersForQuestionFour.children.length; i++) {
        answersForQuestionFour.children[i].style.display = "none";
    }
  }, 2000);
});


var initialFormEl = $('#initial-form');
var playerListEl = $('#player-list');

function thePlayerInput(event) {
    event.preventDefault();
    var initialInputEl = $('#initial-input');
    var playerItem = initialInputEl.val();
    var liEl = $('<li>').text(playerItem);
    playerListEl.append(liEl);
    playerListEl.append(score);
    initialInputEl.val('');
    
}

initialFormEl.on('submit', thePlayerInput);

