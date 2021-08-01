let y = 0;
let x = 0;
let xVariation = 0;
let yVariation = 0;


let globe;
let img;
let sSize;
let canvas;


let screenSize = windowSize();
let screenHeight = screenSize[1];
let screenWidth = screenSize[0];

function windowSize() {
  var tam = [0, 0];
  if (typeof window.innerWidth != 'undefined')
  {
    tam = [window.innerWidth,window.innerHeight];
  }
  else if (typeof document.documentElement != 'undefined'
      && typeof document.documentElement.clientWidth !=
      'undefined' && document.documentElement.clientWidth != 0)
  {
    tam = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
    ];
  }
  else   {
    tam = [
        document.getElementsByTagName('body')[0].clientWidth,
        document.getElementsByTagName('body')[0].clientHeight
    ];
  }
  return tam;
}


//Start the p5.js code 

function preload(){
  img = loadImage('Images/earth.jpg');
}


function setup(){

  createCanvas(screenWidth-20, screenHeight-75,WEBGL);

  noStroke();
  noFill();
  
  canvas = createGraphics(width,height);
  canvas.beginShape();
  canvas.background(0);
  canvas.fill(43,190,200,2);
  canvas.noStroke();
  for(let i = 800;i > 0;i-=12){
    canvas.circle(width/2,height/2,i);
  }
  canvas.endShape();
  
}

function draw() {
  image(canvas,-width/2,-height/2);
  //background(0);
  //translate(400,400,0);
  
  spotLight(220, 220, 240, 0, 0, 900, 0, 0, -1, radians(15), 0);
  ambientLight(30);
  
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