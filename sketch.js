let devH=window.innerHeight*.5
let devW=window.innerWidth
let color="orange";
//let address=document.getElementsByTagName("body")
let len=document.getElementById("rangeSlider");
//const D={function draw()}
//len=Number.parseInt(le
function CurrentMousePos(x,y){
  this.x=x
  this.y=y
}
let type=undefined
function colorF(c){
  color=c
}

let graph
function setup() {
    noFill();
   
   
    //cnv.parent(address)
    createCanvas(devW,devH)
    background("white")
    stroke("black")
    strokeWeight(5)
    rect(0,0,devW,devH)
    graph=createGraphics(devW,devH)

    
  }



function draw(){


  fill("red")
  fill(color)
  
  if(mouseIsPressed &&type==undefined){
    noStroke()
    
    ellipse(mouseX, mouseY, len.value)     
  }
  graph.noFill()
  graph.strokeWeight(5)
  graph.stroke("black")
  graph.rect(0,0,devW,devH)
      
  image(graph,0,0)

}
  


function drawFunction(drawType){
   type=drawType
  if(drawType=="clear"){
    strokeWeight(1)
    stroke("black")
    
    background("white");
    
   }
   console.log("hi")

  
}
/*function mousePressed(){
  if(type=="line"){
    let newMouse=new CurrentMousePos(mouseX,mouseY)
    line(newMouse.x,newMouse.y ,mouseX,mouseY)
    console.log(newMouse)  
   }
   line(100,100,100,100)
  }**/ 
