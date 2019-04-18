var score = 0;
var countdown = 10;

var timer = setInterval(function () {
    var gameOver = false;
    if (document.getElementById('mosquito') === null && gameOver !== true) {
        var mosquito = document.createElement('img');

        mosquito.src = 'images/tembura.png';
        mosquito.style.position = 'absolute';

        var width = Math.floor(Math.random() * window.innerWidth);
        console.log(width);
    }
});