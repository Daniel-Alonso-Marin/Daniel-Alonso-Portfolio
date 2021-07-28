let y = 0;
let x = 0;
let xVariation = 0;
let yVariation = 0;


let globe;
let img;
let sSize;
let canvas;

function preload(){
  img = loadImage('Images/earth.jpg');
}


function setup() {
  createCanvas(800, 800,WEBGL);

  noStroke();
  noFill();
  
  canvas = createGraphics(width,height);
  canvas.beginShape();
  canvas.background(0);
  canvas.fill(43,190,200,2);
  canvas.noStroke();
  for(let i = 900;i > 0;i-=12){
    canvas.circle(400,400,i);
  }
  canvas.endShape();
  
}

function draw() {
  image(canvas,-400,-400);
  //background(0);
  //translate(400,400,0);
  
  spotLight(220, 220, 240, 0, 0, 900, 0, 0, -1, radians(15), 0);
  ambientLight(20);
  
  rotateY(y);
  rotateX(x);
  
  texture(img);
  sphere(200,50,50);
  
  if(mouseIsPressed){
    xVariation = (float)(pmouseY-mouseY)/180;
    yVariation = (float)(mouseX-pmouseX)/180;
  }
  
  x += xVariation;
  y += yVariation;
  
  if( xVariation > 0){
    xVariation -= 0.001;
  }
  else if( xVariation < 0){
    xVariation += 0.001;
  }  
  if( yVariation > 0){
    yVariation -= 0.001;
  }
  else if( yVariation < 0){
    yVariation += 0.001;
  } 

}