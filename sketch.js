let slider;
let bkg;
let arrow;

function setup() {
  createCanvas(3000, 800);
  bkg = loadImage("wave.jpg")
slider = createSlider(0, 1500, 0);
slider.position(100, 760);
slider.style('width', '1300px');

arrow = new Arrow();
}

function draw() {
  let val = slider.value();
  background(23, 31, 38);

//looping waves
for(i = 50; i < 3000; i += 1136) {
image(bkg, i = i - 1, 50, 1136, 700);

}

//photos
for(p = 150; p < 3000; p+=700) {
fill(50);
noStroke();
rect(p, 100, 600, 600);


//arrow
arrow.display();

}
}

class Arrow {
  constructor() {
    this.x = 700;
    this.y = 400;
    this.diameter = 30;
  }

  display() {
    fill(255, 30);
    circle(this.x, this.y, this.diameter);
  }
}

