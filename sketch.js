let slider;
let bkg;
let img;
let smile;
let lights;
let song;
let sunset;
let x = 40;
let y = 11;
function preload() {
  img = loadImage('vone.jpg');
  smile = loadImage('smile.JPG');
  lights = loadImage('lights.JPG');
  sunset = loadImage('pic2.jpg');
  song = loadSound('apocalypse.mp3');
    song.setVolume(0.07)
}
  
function setup() {
  createCanvas(1000, 800);
  bkg = loadImage("wave.jpg")
slider = createSlider(0, 1500, 0);
slider.position(25, 760);
slider.style('width', '950px');
}
function draw() {
  let val = slider.value();
  translate(-val*1.38, 0)
  background(23, 31, 38);
//looping waves
for(i = 0; i < 100000; i += 1136) {
image(bkg, i - frameCount/8, 50, 1136, 700);
}
//photos preview rects
for(p = 800; p < 3000; p+=780) {
fill(50);
noStroke();
rect(p, 100, 600, 600);
//actual photos
push();
image(img, 150, 100, 3024/6.75, 4032/6.75);
image(smile, 810, 110, 580, 580)
image(lights, 2370, 110, 580, 580)
image(sunset, 1590, 110, 580, 580)
// console.log(img);
pop();
//PIXEL MANIPULATIONS
//ETHAN SMILE MANIPULATION
//slider info
fill(50, 120);
circle(50, 650, 70);
fill(255);
text('Slider', 35, 645);
text('below', 33, 660);
}
//song and song button
push();
fill(255, 100);
rect(x, y, 120, 30, 10)
pop();
if (song.isPlaying()) {
  text('Click to Stop Music', 50, 30);
} else {
  text('Click to Play Music', 50, 30);
}
//info button 1
push();
fill(50, 230)
circle(620, 110, 35);
fill(255);
textSize(16)
text('i', 618, 115);
pop()
  push();
  fill(50);
  rect(610, 130, 170, 60);
  fill(255);
  text('Author: Victoria Oury', 610 + 10, 130 + 20);
  text('Title: Shanghai in Blue', 610 + 10, 130 + 35);
  text('Time: Sep 2019', 610 + 10, 130 + 50);
  pop();
//info button 2 (can't make a for loop as they are in different distances :( 
push();
fill(50, 230);
circle(780, 570, 35);
fill(255);
textSize(16);
text('i', 778, 574);
pop();
  push()
  fill(50);
  rect(640, 590, 150, 78);
  fill(255);
  text('Author: Ethan Lan', 640 + 10, 590 + 20);
  text('Title: "Smile!"', 640 + 10, 590 + 35);
  text('Time: Summer 2019', 640 + 10, 590 + 50);
  text('Location: Cape Town', 640 + 10, 590 + 65);
  pop()
//Info Button 3
push();
fill(50, 230)
circle(1560, 210, 35);
fill(255);
textSize(16)
text('i', 1558, 214);
pop()
  push();
  fill(50);
  rect(1420, 230, 150, 60);
  fill(255);
  text('Author: Victoria Oury', 1420 + 10, 230 + 20);
  text('Title: 杭州 in orange', 1420 + 10, 230 + 35);
  text('Time: Winter break 2019', 1420 + 10, 230 + 50);
  pop();
  
//Info Button 4
  push();
  fill(50, 230)
  circle(2340, 510, 35);
  fill(255);
  textSize(16)
  text('i', 2338, 515);
  pop()
  
    push();
    fill(50);
    rect(2200, 530, 150, 75);
    fill(255);
    text('Author: Ethan Lan', 2200 + 10, 530 + 20);
    text('Title: "Expletive Hallway"', 2200 + 10, 530 + 35);
    text('Time: Fall 2019', 2200 + 10, 530 + 50);
    text('Location: Hangzhou', 2200 + 10, 530 + 65);
    pop();
 }
//song
function mousePressed() {
  var d = dist(mouseX, mouseY, x + 50, y - 20)
  if(d<80){
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}
//hover for info pic 1
push();
function mouseIsHovered() {
  return dist(mouseX, mouseY, 130, 110) < 35/2;
}
pop();
//hover for info pic 2
// push();
// function mouseIsHovered() {
//   return dist(mouseX, mouseY, 800, 110) < 35/2 
// }
// pop();