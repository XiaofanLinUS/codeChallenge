function Snake(scale) {
    this.scale = scale;
    this.size = 1;
    this.x = 0;
    this.y = 0;
    this.speedX = 1;
    this.speedY = 0;
    this.update = function() {
	var maxX = canvas.width;
	var maxY = canvas.height;
	var context = canvas.getContext('2d');
	var afterX = this.x + this.speedX*this.scale;
	var afterY = this.y + this.speedY*this.scale;
	
	context.fillStyle = canvas.style.backgroundColor;
	context.fillRect(this.x, this.y, 10, 10);
	
	//Boundary Conditions Check & Reset
	if(afterX > maxX) {
	    this.x = afterX - maxX;
	}else
	if(afterX < 0) {
	    this.x = afterX + maxX;
	}else
	if(afterY > maxY) {
	    this.y = afterY -  maxY;
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
	if((this.speedX*a === -1 || this.speedY*b === -1) ) {
	//prevent the snake goes backward when its size is larger than 1
	return;
	}
	this.speedX = a;
	this.speedY = b;
    };
}
