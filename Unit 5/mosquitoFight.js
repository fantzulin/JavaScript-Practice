var score = 0;
var countdown = 30;

var timer = setInterval(function () {
    var gameOver = false;

    if (document.getElementById('mosquito') === null && gameOver !== true) {
        var mosquito = document.createElement('img');

        mosquito.src = 'images/tenbura-ori.png';
        mosquito.style.position = 'absolute';

        var x = Math.floor(Math.random() * window.innerWidth - 100);
        var y = Math.floor(Math.random() * window.innerHeight - 100);

        if (x < 0) {
            x = 10;

            console.log('left:', x, 'top:', y);
        } else if (y < 0) {
            y = 10;
            console.log('left:', x, 'top:', y);

        }

        mosquito.style.left = x + 'px';
        mosquito.style.top = y + 'px';
        mosquito.style.width = '100px';
        mosquito.id = 'mosquito';
        document.getElementById('divBody').appendChild(mosquito);
    }
    countdown -= 1;
    document.getElementById('counter').innerHTML = countdown;

    if (countdown <= 0) {
        gameOver = true;
        clearInterval(timer);
        clearInterval(disappear);
        document.getElementById('counter').innerHTML = 'gameOver!'
    }
}, 3000);

var disappear = setInterval(function () {
    if (document.getElementById('mosquito') !== null) {
        document.getElementById('divBody').removeChild(document.getElementById('mosquito'));
    }
}, 5000);

var click = document.body.addEventListener('click', function (e) {
    var scoreBoard = document.getElementById('score-board');

    if (e.target.id === 'mosquito') {
        console.log(e.target);
        e.target.src = 'images/tenbura.png';
        if (countdown <= 0) {
            score += 0;
        } else {
            score += 5;
        }

        scoreBoard.innerHTML = score;

    }

});