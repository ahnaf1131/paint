let devH=window.innerHeight
let devW=window.innerWidth
let color="black";
//let address=document.getElementsByTagName("body")
let len=document.getElementById("rangeSlider");

//len=Number.parseInt(len)

function colorF(c){
  color=c
}

function setup() {
  

  
  noFill();
  stroke("black")
 
  //cnv.parent(address)
  createCanvas(devW*.5,devH*.5)
  background("white")
  
  strokeWeight(5)
  rect(0,0,devW*.5,devH*.5)
  
}

function draw() {
  stroke("black");

   
}
function draw(){
  fill(color)
  
  if(mouseIsPressed){
    noStroke()
    
    ellipse(mouseX, mouseY, len.value)     
  }
}
function drawFunction(drawType){
  if(drawType=="clear"){
    strokeWeight(1)
    stroke("black")
    background("white");
   }

  
}