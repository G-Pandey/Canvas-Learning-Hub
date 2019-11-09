const canvas = document.getElementById("canvas");
//setup 
canvas.width = innerWidth;
canvas.height = innerHeight;


let ctx = canvas.getContext("2d");


let angle = 10;
let deltaX =  1;
let deltaY = 1;


//let y = canvas.height / 2 + deltaY;
let radius = 5;
let x = 30;
let y = 30;

let circle = new Circle(x,y, deltaX, deltaY, radius);
circle.create(1000); // creates and adds 1000 circles to circle object.


function animate(){
   ctx.clearRect(0,0,canvas.width, canvas.height);
   let randomIndex = Math.floor(Math.random() * 1000);

   circle.circles[randomIndex].grow()
   circle.circles.forEach(function(c) {
       c.move(ctx);
   });

    
    requestAnimationFrame(animate)
}

animate();