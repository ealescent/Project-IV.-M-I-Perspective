let slider;
//j - the length of the background
// let j = 1500;

function setup() {
  createCanvas(3000, 800);
// slider = createSlider(0, 1500, 0);
// slider.position(100, 700);
// slider.style('width', '1300px');
}

function draw() {
  // let val = slider.value();
  background(23, 31, 38);

// for (x = 0; x < j; x++) {
//   fill(50);
//   rect(0, 0, x, 800);
// }

//photos
for(p = 100; p < 3000; p+=700) {
fill(50);
noStroke();
rect(p, 100, 600, 600);
}

}
