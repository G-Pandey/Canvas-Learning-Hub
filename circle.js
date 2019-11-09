
function Circle(xPosition, yPosition, deltaX, deltaY, radius, options){
    this.x = xPosition;
    this.y = yPosition;
    this.deltaX = deltaX,
    this.deltaY = deltaY,
    this.radius = radius;

    this.options = {
        startAngle:0,
        endEngle: Math.PI * 2,
        color: this.colors[Math.floor(Math.random() * 6)],
        borderColor: this.color,
        direction:0
    }

    this.circles = [];

    if(options){
        try{
        /**
         * Allowed options
         * options - {
         *      startAngle, //radian num
         *      endEngle, // radian num
         *      color, // string, rgb, hex
         *      borderColor, // string, rgb, hex
         *      direction // 1-clockwise, 0-anticlockwise
         *  }
         */
            for(let key in options){
                if(this.options.hasOwnProperty(key)){
                    this.options[key] = options[key];
                }
            }
        }
        catch (e){
            //handle exception here
        }
    }    
}


Circle.prototype.colors = [
    //red
    "#ff0000",
    //orange
    "#ffa500",
    //yellow
    "#ffff00",
    //green
    "#008000",
    //blue
    "#0000ff",
    //indigo
    "#4b0082",
    //violet
    "#ee82ee"
];

Circle.prototype.draw = function (ctx){    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.options.startAngle, this.options.endEngle, this.options.direction);
    
    ctx.fillStyle = this.options.color;
    ctx.strokeStyle = this.options.borderColor;
    ctx.fill();
    ctx.stroke();
}


Circle.prototype.move = function(ctx){
    if(this.x +  this.radius > innerWidth || this.x - this.radius < 0 ) this.deltaX = -this.deltaX;
    if(this.y +  this.radius > innerHeight || this.y - this.radius < 0 ) this.deltaY = -this.deltaY;

    this.x += this.deltaX;
    this.y += this.deltaY;

    this.draw(ctx);
}

Circle.prototype.grow = function(){
    this.radius = Math.floor(Math.random() * 20);
}


Circle.prototype.create = function(num, options){
    for(let i = 0; i < num; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let deltaX =  Math.random() - 0.5;
        let deltaY =  Math.random() - 0.5;
        this.circles.push(new Circle(x,y, deltaX, deltaY, this.radius, options));
    }
}
