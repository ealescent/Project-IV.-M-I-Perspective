let slider;
//j - the length of the background
let j = 1500;

function setup() {
  createCanvas(1500, 800);
slider = createSlider(0, 1500, 0);
slider.position(100, 700);
slider.style('width', '1300px');
}

function draw() {

  // let val = slider.value();
  background(23, 31, 38);

for (x = 0; x < j; x++) {
  fill(50);
  rect(0, 0, x, 800);
}
  // push();
  // fill(7, 10, 13);
  // rect(0, 0, width, 100);
  // rect(0, 700, width, 800);
  // pop();

}
