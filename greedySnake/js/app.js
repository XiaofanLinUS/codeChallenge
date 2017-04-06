var canvas = $('#myCanvas')[0];

var context = canvas.getContext('2d');
var snake = new Snake(10);
var interval = 100;

canvas.style.backgroundColor = 'rgb(200,200,200)';


setInterval(function() {
    snake.update(canvas);
}, interval);

