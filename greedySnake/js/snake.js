function Snake(scale, canvas) {
    this.scale = scale;
    this.size = 1;
    this.canvas = canvas;
    this.maxX = this.canvas.width;
    this.maxY = this.canvas.height;
    this.amountX = this.maxX / scale;
    this.amountY = this.maxY / scale;
    this.x = Math.floor((Math.random()*this.amountX))*this.scale;
    this.y = Math.floor((Math.random()*this.amountY))*this.scale;
    this.speedX = 1;
    this.speedY = 0;
    this.update = function() {
	var context = this.canvas.getContext('2d');
	var afterX = this.x + this.speedX*this.scale;
	var afterY = this.y + this.speedY*this.scale;
	
	context.fillStyle = this.canvas.style.backgroundColor;
	context.fillRect(this.x, this.y, this.scale, this.scale);
	
	//Boundary Conditions Check & Reset
	if(afterX > this.maxX) {
	    this.x = afterX - this.maxX;
	}else
	if(afterX < 0) {
	    this.x = afterX + this.maxX;
	}else
	if(afterY > this.maxY) {
	    this.y = afterY -  this.maxY;
	}
	else
	if(afterY < 0) {
	    this.y = afterY +  maxY;
	}else {
	    this.x = afterX;
	    this.y = afterY;
	}
	context.fillStyle = 'grey';
	context.fillRect(this.x, this.y, 10, 10);
    };
    this.redirect = function(a,b) {	
	if((this.speedX*a === -1 || this.speedY*b === -1)&& this.size > 1) {
	//prevent the snake goes backward when its size is larger than 1
	return;
	}
	this.speedX = a;
	this.speedY = b;
    };
}
