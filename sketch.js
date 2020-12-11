let slider;
let bkg;
let img;
let smile;
let google;
let song;
let x = 40;
let y = 11;

function preload() {
  img = loadImage('vone.jpg');
  smile = loadImage('smile.JPG')
  google = loadImage('google.JPG')
  song = loadSound('Others.mp3');
    song.setVolume(0.03)
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
  translate(-val*1.33, 0)
  background(23, 31, 38);

//looping waves
for(i = 0; i < 100000; i += 1136) {
image(bkg, i - frameCount/8, 50, 1136, 700);
}

//photos preview rects
for(p = 830; p < 3000; p+=725) {
fill(50);
noStroke();
rect(p, 100, 600, 600);

//actual photos
push();
image(img, 150, 100, 3024/7, 4032/7);
image(smile, 830, 100, 600, 600)
image(google, 2280, 100, 600, 500)
// console.log(img);
pop();

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

//info button
push();
fill(50, 230)
circle(130, 110, 35);
fill(255);
textSize(16)
text('i', 128, 115);
pop();

//info textbox picture 1
if (mouseIsHovered()) {
  fill(50);
  rect(mouseX, mouseY, 200, 60);
  fill(255);
  text('Author: Victoria Oury', mouseX + 20, mouseY + 20);
  text('Title: Shanghai in Blue', mouseX +20, mouseY + 35);
  text('Time: Sep 2019', mouseX +20, mouseY + 50);
}

//info button (can't make a for loop as they are in different distances :( 
push();
fill(50, 230);
circle(800, 110, 35);
fill(255);
textSize(16);
text('i', 798, 115);
pop();
//info textbox picture 2
// if (mouseIsHovered()){
//   fill(50);
//   rect(mouseX, mouseY, 200, 60);
//   fill(255);
//   text('Author:', mouseX+ 20, mouseY +20);
//   text('Title:', mouseX+20, mouseY+35);
//   text('Time:', mouseX+20, mouseY+50);
// } 
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

