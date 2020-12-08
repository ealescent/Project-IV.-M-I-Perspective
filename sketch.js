let slider;
let bkg;
let arrow;
let i;

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
  //translate(-val, 0)
  background(23, 31, 38);

//looping waves
for(i = 50; i < 100000; i += 1136) {
image(bkg, i - frameCount/8, 50, 1136, 700);

// i+ frameCount (goes off the edge doesn't come back)
// one more image than needed; instead of frameCount (move-pop)
// frameCount % ...
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

