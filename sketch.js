var allMyBubbles=[];
var numOfBubbles= prompt("How many bllod cells do you want to see?");
var sizeOfBubble= 30;

function setup(){
    createCanvas(600,400);
    for(var i=0; i<numOfBubbles; i++){
    allMyBubbles[i]= new Bubble(random(0,600),random(0,400));
    }
}

function draw(){
    background(137, 137, 133);
    for(var i =0; i<allMyBubbles.length; i++){
    allMyBubbles[i].display();
    allMyBubbles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(25,21,250,125);
    this.display=function(){
        stroke(255);
        rect(this.x,this.y,sizeOfBubble,sizeOfBubble);
        stroke(255,0,0)
        rect(this.x,this.y,sizeOfBubble,sizeOfBubble);
    }
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1)
    }
}