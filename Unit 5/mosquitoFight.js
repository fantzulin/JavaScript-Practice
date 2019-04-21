var score = 0;
var countdown = 10;

var timer = setInterval(function () {
    var gameOver = false;

    if (document.getElementById('mosquito') === null && gameOver !== true) {
        var mosquito = document.createElement('img');

        mosquito.src = 'images/tenbura-ori.png';
        mosquito.style.position = 'absolute';

        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);

        mosquito.style.left = x + 'px';
        mosquito.style.top = y + 'px';
        mosquito.style.width = '100px';
        mosquito.id = 'mosquito';
        document.body.appendChild(mosquito);

    }
}, 1000);

var disappear = setInterval(function () {
    if (document.getElementById('mosquito') !== null) {
        document.body.removeChild(document.getElementById('mosquito'));
    }
}, 2000);

var click = document.body.addEventListener('click', function (e) {
    var scoreBoard = document.getElementById('score-board');

    if (e.target.id === 'mosquito') {
        console.log(e.target);
        e.target.src = 'images/tenbura.png';
        score += 5;
        scoreBoard.innerHTML = score;
    }
});