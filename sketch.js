let slider;
let bkg;
let img;
let song;

function preload() {
  img = loadImage('vone.jpg');
  song = loadSound('music.mp3');
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
ellipse(100, 26, 120, 30);
pop();
if (song.isPlaying()) {
  text('Click to Stop Music', 50, 30);
} else {
  text('Click to Play Music', 50, 30);
}

if (mouseIsHovered()) {
  fill(50, 100);
  rect(mouseX, mouseY, 300, 50);
  text('Vicky', mouseX, mouseY);
}
}

//song
function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function mouseIsHovered() {
  return mouseIsPressed;
}
