let slider;
let bkg;
let img;
let easing = .05;

function preload() {

  img = loadImage('vone.jpg');
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

// i+ frameCount (goes off the edge doesn't come back)
// one more image than needed; instead of frameCount (move-pop)
// frameCount % ...
}
//photos
for(p = 115; p < 3000; p+=725) {
fill(50);
noStroke();
rect(p, 100, 600, 600);

//actual photos
// image(img, 100, 600, img.height/);

}
}


