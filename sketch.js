let slider;
let bkg;
let dx = -2;
var scrollSpeed = 1;

function setup() {
  createCanvas(3000, 800);
  bkg = loadImage("wave.jpg")
// slider = createSlider(0, 1500, 0);
// slider.position(100, 700);
// slider.style('width', '1300px');
}

function draw() {
  // let val = slider.value();
  background(23, 31, 38);

//looping waves
for(i = 50; i < 3000; i += 1136) {
image(bkg, i, 50, 1136, 700)

}

//photos
for(p = 150; p < 3000; p+=700) {
fill(50);
noStroke();
rect(p, 100, 600, 600);
}

}
