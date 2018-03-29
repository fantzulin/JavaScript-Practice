var startBtn = document.querySelector('#start-btn');
var userScissors = document.getElementById('#scissors');
var userStone = document.getElementById('#stone');
var userpaper = document.getElementById('#paper');

startBtn.addEventListener('click', function(){
  var pcChoice = Math.floor(Math.random() * 3);
  var choice = parseInt(prompt('剪刀石頭布!你要出什麼? 0. 剪刀 1. 石頭 2. 布', 0));
  if (choice === 0) {
    alert('你出剪刀');
    if (pcChoice === 0) {
      document.getElementById("pc-s").removeAttribute("hidden");
      document.getElementById("user-s").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "沒輸沒贏!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/QqkA9W8xEjKPC/giphy.gif";
    } else if (pcChoice === 1) {
      document.getElementById("pc-r").removeAttribute("hidden");
      document.getElementById("user-s").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "你輸了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif";
    } else if (pcChoice === 2) {
      document.getElementById("pc-p").removeAttribute("hidden");
      document.getElementById("user-s").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "你贏了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/xMIlfwRRQNEcw/giphy.gif";

    }
  } else if (choice === 1) {
    alert('你出石頭');
    if (pcChoice === 0) {
      document.getElementById("pc-s").removeAttribute("hidden");
      document.getElementById("user-r").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "你贏了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/xMIlfwRRQNEcw/giphy.gif";
    }else if (pcChoice === 1) {
      document.getElementById("pc-r").removeAttribute("hidden");
      document.getElementById("user-r").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "沒輸沒贏!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/QqkA9W8xEjKPC/giphy.gif";

    }else if (pcChoice === 2) {
      document.getElementById("pc-p").removeAttribute("hidden");
      document.getElementById("user-r").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "你輸了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif";
    }
  } else if (choice === 2) {
    alert('你出布');
    if (pcChoice === 0) {
      document.getElementById("pc-s").removeAttribute("hidden");
      document.getElementById("user-p").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "你輸了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif";
    }else if (pcChoice === 1) {
      document.getElementById("pc-r").removeAttribute("hidden");
      document.getElementById("user-p").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "你贏了!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/xMIlfwRRQNEcw/giphy.gif";
    }else if (pcChoice === 2) {
      document.getElementById("pc-p").removeAttribute("hidden");
      document.getElementById("user-p").removeAttribute("hidden");
      document.getElementById("score").innerHTML = "沒輸沒贏!";
      document.getElementById("score-img").src = "https://media.giphy.com/media/QqkA9W8xEjKPC/giphy.gif";
    }
  }
});
