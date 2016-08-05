var speed = 3;
var x1 = 220;
//var x2 = 180;
var y1 = 340;
//var y2 = 180;
function setup() {
  createCanvas(640, 480);
}
function circle(x, y, side) {
  ellipse(x, y, side, side);
}

function draw() {
// ears
  fill(250, 220, 0);
  stroke(1);
  ellipse(200, 50, 50, 80);
  stroke(1);
  ellipse(360, 50, 50, 80);
  
// face
  stroke(1);
   ellipse(280, 160, 240);
   stroke(1);
   ellipse(280, 240, 300, 220);
   noStroke();
    ellipse(280, 160, 235);
    
// ear line byebye
    noStroke();
  ellipse(360, 50, 50, 75);
  noStroke();
  ellipse(200, 50, 50, 75);
  
// nose
fill(1);
arc(280, 200, 50, 50, 0, PI, CHORD);
    
// eyes

ellipse(x1, 180, 20, 20);
ellipse(y1, 180, 20, 20);


if (x1 < 100 || x1 > 420) {
speed = speed * -1;
}
x1 = x1 + speed;
if (y1 < 100 || y1 > 380) {
speed = speed * -1;
}
y1 = y1 + speed;
//if (x2 < 100 || x2 > 360) {
  speed = speed * -1;
// }
//if (x2 > width) {
  //x2 = x2 - speed;
//}
//x2 = x2 + speed;
//if (y2 <100 || x2 > 120) {
 // speed = speed * -1;
//}
//y2 = y2 + speed;
//mouth
noFill();
stroke(1);
arc(280, 240, 110, 90, TWO_PI, PI);

fill("red");
stroke(1);
arc(285, 310, 45, 10, PI, TWO_PI);
fill("red");
arc(285, 308.5, 42.5, 28, TWO_PI, PI);
noFill();
stroke(1);
arc(285, 280, 60, 85, TWO_PI, PI);


}