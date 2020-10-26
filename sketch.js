var headX=200;
  var headY=100;
var headDirection=1;


var legY=255;
var legDirection=2;

var size=22;
var count=0;
var sizeDirection=2;
function setup() 

{
  createCanvas(400, 400);
}

function draw() {
  background(204,153,255);
  fill(0)
    strokeWeight(1);
  //head
  fill(255,255,102)
  circle(headX,headY,75);
  headX+=headDirection;
  if(headX>=300||headX<=85)
  {headDirection*=-1;}
  //body
  fill(0,102,204);
  triangle(130,245,200,140,256,245);
  //legs
     fill(255,255,102)
  rect(170, legY, 20, 55);
  rect(205, legY, 20, 55);
  legY+=legDirection;
  if(legY<=0||legY>=300)
  {legDirection*=-1;}
  //eyes
  stroke('black');
  strokeWeight(10);
  point(210,100);
  point(190,100)
  //mouth
  strokeWeight(5)
  line(190,120,210,120)
  //arms
  strokeWeight(5)
  line(220,160,270,220)
  line(175,160,120,210)
  //title
  fill('aqua')
  textSize(25)
  textFont('georgia')
  text('Portrait',10,30)
  //
  fill('magenta')
  textSize(size);
  size+=sizeDirection;
  count++;
  if(count>5)
    {sizeDirection*=-1;
    count=0;}
  text("Rowan Lentz",210,360);
  
}