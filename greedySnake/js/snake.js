function Snake(scale, canvas) {
    this.scale = scale;
    this.size = 1;
    this.canvas = canvas;
    this.maxX = this.canvas.width;
    this.maxY = this.canvas.height;
    this.amountX = this.maxX / scale; //The total amount of coordinate points on x-axis: n
    this.amountY = this.maxY / scale; //Like above
    this.x = Math.floor((Math.random()*this.amountX))*this.scale; // (0, n-1)
    this.y = Math.floor((Math.random()*this.amountY))*this.scale;
    this.speedX = 1;
    this.speedY = 0;
    this.Xs = [];
    this.Ys = [];
    this.grow = false;
    this.update = function() {
	var context = this.canvas.getContext('2d');

	var afterX = this.x + this.speedX*this.scale;
	var afterY = this.y + this.speedY*this.scale;

	context.fillStyle = this.canvas.style.backgroundColor;
	context.fillRect(this.x, this.y, this.scale, this.scale);

	if(this.size > 1) {

	for(var i = this.size - 2; i > 0; i--) {
    	    context.fillRect(this.Xs[i], this.Ys[i], this.scale, this.scale);
	    this.Xs[i] = this.Xs[i - 1]; // Shift positions
	    this.Ys[i] = this.Ys[i - 1];
	}
    	    context.fillRect(this.Xs[0], this.Ys[0], this.scale, this.scale);
	    this.Xs[0] = this.x;
	    this.Ys[0] = this.y;
	}

	
	//Boundary Conditions Check & Reset
	if(afterX >= this.maxX) {
	    this.x = afterX - this.maxX;
	}else
	if(afterX < 0) {
	    this.x = afterX + this.maxX;
	}else
	if(afterY >= this.maxY) {
	    this.y = afterY -  this.maxY;
	}
	else
	if(afterY < 0) {
	    this.y = afterY +  this.maxY;
	}else {
	    this.x = afterX;
	    this.y = afterY;
	}

	context.fillStyle = 'grey';
	context.fillRect(this.x, this.y, 10, 10);
	

	for(var i = 0; i < this.size; i++) { 
	    context.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                     Math.floor(255 - 2.5 * i) + ',0)';
	    context.fillRect(this.Xs[i], this.Ys[i], 10, 10);

	}
	
};


    this.redirect = function(a,b) {	
	if((this.speedX*a === -1 || this.speedY*b === -1)&& this.size > 1) {
	//prevent the snake goes backward when its size is larger than 1
	return;
	}
	this.speedX = a;
	this.speedY = b;
    };
    this.stretch = function() {
	this.size++;
    };
}
