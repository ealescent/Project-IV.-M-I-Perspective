let sceneIndex = 0;
let bkg;
let shanghai;
let simle;
let sunset;
let lights;
let song;
let x = 40;
let y = 11;

function preload() {
  bkg = loadImage('wave.jpg');
  shanghai = loadImage('vone.jpg');
  smile = loadImage('smile.jpg');
  sunset = loadImage('pic2.jpg');
  lights = loadImage('lights.jpg');
  song = loadSound('apocalypse.mp3');
  song.setVolume(0.1);
}

function setup() {
  createCanvas(3100, 800);
  background(23, 31, 38);

  //looping waves
  for (i = 0; i < 3100; i+=1000) {
    image(bkg, i, 50, 1000, 750);
  }

  //shadow frames
  for(p = 800; p < 3000; p+=780) {
    fill(50, 160);
    noStroke();
    rect(p, 100, 600, 600);
  }
  rect(140, 90, 468, 617);

  //info buttons and boxes
  fill(50, 240);
  //1
  circle(630, 110, 35);
  rect(610, 130, 170, 60);
  //2
  circle(780, 570, 35);
  rect(640, 590, 150, 78);
  //3
  circle(1560, 210, 35);
  rect(1420, 230, 150, 60);
  //4
  circle(2340, 510, 35);
  rect(2200, 530, 150, 75);
  //text 'i' and 'data'
  fill(255);
  textSize(16);
  text('i', 628, 115);
  text('i', 778, 574);
  text('i', 1558, 214);
  text('i', 2338, 515);
  textSize(12);
  text('Author: Victoria Oury', 610 + 10, 130 + 20);
  text('Title: 上海 in Blue', 610 + 10, 130 + 35);
  text('Time: Sep 2019', 610 + 10, 130 + 50);
  text('Author: Ethan Lan', 640 + 10, 590 + 20);
  text('Title: "Smile!"', 640 + 10, 590 + 35);
  text('Time: Summer 2019', 640 + 10, 590 + 50);
  text('Location: Cape Town', 640 + 10, 590 + 65);
  text('Author: Victoria Oury', 1420 + 10, 230 + 20);
  text('Title: 杭州 in orange', 1420 + 10, 230 + 35);
  text('Time: Winter break 2019', 1420 + 10, 230 + 50);
  text('Author: Ethan Lan', 2200 + 10, 530 + 20);
  text('Title: "Expletive Hallway"', 2200 + 10, 530 + 35);
  text('Time: Fall 2019', 2200 + 10, 530 + 50);
  text('Location: Hangzhou', 2200 + 10, 530 + 65);

  //pic1
image(shanghai, 150, 100, 3024/6.75, 4032/6.75);
  //pic2
image(smile, 810, 110, 580, 580);
  //pic3
image(sunset, 1590, 110, 580, 580);
  //pic4
image(lights, 2370, 110, 580, 580);

//song
fill(255, 100);
rect(x, y, 158, 30, 10);
fill(255);
if (song.isPlaying()) {
  text('Click M key to Stop Music', 50, 30);
} else {
  text('Click M key to Play Music', 50, 30);
}
}

function draw() {

  if (sceneIndex === 0) {
    drawIntro();
  } else if (sceneIndex === 1) {
    drawScene1();
  } else if (sceneIndex === 2) {
    drawScene2();
  } else {
    drawEnding();
  }

  text("Click left or right of the center to change scenes.", width / 2, 50);

}
// scenes control keys
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
		previousScene();
	} else {
		nextScene();
	}
}

//song key M control
function keyPressed() {
  if (keyCode === 77) {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
  }
}

function previousScene() {
	sceneIndex--;
	if (sceneIndex < 0) {
		sceneIndex = 4;
	}
}

function nextScene() {
	sceneIndex = (sceneIndex + 1) % 5;
}

function drawIntro() {
  fill(255);
  ellipse(width / 2, height / 2, 100, 100);
	fill("blue");
	text("Intro", width / 2, height / 2);
}

function drawScene1() {
  fill(0, 255, 255);
  rect(width / 2, height / 2, 200, 200);
	fill(0);
	text("Scene 1", width / 2, height / 2);
}

function drawScene2() {
  fill(50);
  rect(width / 2, height / 2, 200, 200);
	fill(0);
	text("Scene 1", width / 2, height / 2);
}

function drawEnding() {
  fill(255);
  ellipse(width / 2, height / 2, 100, 100);
	fill(0);
	text("End Scene", width / 2, height / 2);
}
