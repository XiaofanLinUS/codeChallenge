function Food(scale) {
    this.scale = scale;
    this.x = 0;
    this.y = 0;
    this.maxX = canvas.width;
    this.maxY = canvas.height;
    this.scale = scale;
    this.firstTime = true;
    this.create = function(canvas) {
	var amountX = this.maxX / scale;
	var amountY = this.maxY / scale;
	var context = canvas.getContext('2d');

	if(!this.firstTime) {
	    context.fillStyle = canvas.style.backgroundColor;  
	    context.fillRect(this.x, this.y, this.scale, this.scale);
	}else {
	    this.firstTime = true;
	}
	
	console.log(this.scale);
	this.x = Math.floor((Math.random()*amountX))*this.scale;
	this.y = Math.floor((Math.random()*amountY))*this.scale;
	context.fillStyle = 'rbg(0,0,0)';
	console.log(this.x);
	context.fillRect(this.x, this.y, this.scale, this.scale);
	
    };
}
