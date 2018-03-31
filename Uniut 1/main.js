var startBtn = document.querySelector('#start-btn');
var scissorsBtn = document.querySelector('#scissors');
var stoneBtn = document.querySelector('#stone');
var paperBtn = document.querySelector('#paper');

scissorsBtn.addEventListener('click', function(){
  var pcChoice = Math.floor(Math.random() * 3);
    if (pcChoice === 0) {
      document.getElementById("pc").src = "scissors.png";
      document.getElementById("user").src = "scissors.png";
      document.getElementById("score").innerHTML = "沒輸沒贏!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/QqkA9W8xEjKPC/giphy.gif";
    } else if (pcChoice === 1) {
      document.getElementById("pc").src = "stone.png";
      document.getElementById("user").src = "scissors.png";
      document.getElementById("score").innerHTML = "你輸了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif";
    } else if (pcChoice === 2) {
      document.getElementById("pc").src = "paper.png";
      document.getElementById("user").src = "scissors.png";
      document.getElementById("score").innerHTML = "你贏了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/xMIlfwRRQNEcw/giphy.gif";
    }
});

stoneBtn.addEventListener('click', function(){
  var pcChoice = Math.floor(Math.random() * 3);
  if (pcChoice === 0) {
    document.getElementById("pc").src = "scissors.png";
    document.getElementById("user").src = "stone.png";
    document.getElementById("score").innerHTML = "你贏了!";
    document.getElementById("score-img").src = "https://media.giphy.com/media/xMIlfwRRQNEcw/giphy.gif";
  }else if (pcChoice === 1) {
    document.getElementById("pc").src = "stone.png";
    document.getElementById("user").src = "stone.png";
    document.getElementById("score").innerHTML = "沒輸沒贏!";
    document.getElementById("score-img").src = "https://media.giphy.com/media/QqkA9W8xEjKPC/giphy.gif";

  }else if (pcChoice === 2) {
    document.getElementById("pc").src = "paper.png";
    document.getElementById("user").src = "stone.png";
    document.getElementById("score").innerHTML = "你輸了!";
    document.getElementById("score-img").src = "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif";
  }
});

paperBtn.addEventListener('click', function(){
  var pcChoice = Math.floor(Math.random() * 3);
  if (pcChoice === 0) {
    document.getElementById("pc").src = "scissors.png";
    document.getElementById("user").src = "paper.png";
    document.getElementById("score").innerHTML = "你輸了!";
    document.getElementById("score-img").src = "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif";
  }else if (pcChoice === 1) {
    document.getElementById("pc").src = "stone.png";
    document.getElementById("user").src = "paper.png";
    document.getElementById("score").innerHTML = "你贏了!";
    document.getElementById("score-img").src = "https://media.giphy.com/media/xMIlfwRRQNEcw/giphy.gif";
  }else if (pcChoice === 2) {
    document.getElementById("pc").src = "paper.png";
    document.getElementById("user").src = "paper.png";
    document.getElementById("score").innerHTML = "沒輸沒贏!";
    document.getElementById("score-img").src = "https://media.giphy.com/media/QqkA9W8xEjKPC/giphy.gif";
  }
});
