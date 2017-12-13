var canvas = $('#myCanvas')[0];  
var grey = 'rgb(200,200,220)';
var context = canvas.getContext('2d');
var snake = new Snake(10, canvas);
var food = new Food(10);
var interval = 100;

canvas.style.backgroundColor = grey;
food.create(canvas);

var check = function() {
    if(snake.x === food.x && snake.y === food.y) {
	food.create(canvas);
	snake.stretch();
    }
}
setInterval(function() {
    snake.update();
    check();
}, interval);











$(document).keydown(function(e){
    if(e.keyCode === 37) {
	snake.redirect(-1,0);
    }else if(e.keyCode === 38) {
	snake.redirect(0,-1);
    }else if(e.keyCode === 39) {
	snake.redirect(1,0);
    }else if(e.keyCode === 40) {
	snake.redirect(0,1);
    }
    e.preventDefault();
});

