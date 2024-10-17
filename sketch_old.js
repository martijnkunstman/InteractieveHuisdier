//feelings
let hapiness = 100; //wordt automatisch minder
let tiredness = 0; //wordt automatisch meer
let hunger = 0; //wordt automatisch meer
let cleanliness = 100; //wordt automatisch minder

//actions
function sleep() {}
function eat() {}
function play() {}
function wash() {}

//buttons
let buttonSleep;
let buttonEat;
let buttonPlay;
let buttonWash;

//check values
function checkValues() {
    if (hapiness < 0) {
        hapiness = 0;
    }
    if (hapiness > 100) {
        hapiness = 100;
    }
    if (tiredness < 0) {
        tiredness = 0;
    }
    if (tiredness > 100) {
        tiredness = 100;
    }
    if (hunger < 0) {
        hunger = 0;
    }
    if (hunger > 100) {
        hunger = 100;
    }
    if (cleanliness < 0) {
        cleanliness = 0;
    }
    if (hapiness > 100) {
        hapiness = 100;
    }
}

function setup() {
  createCanvas(400, 400);
  
  buttonSleep = createButton("Sleep");
  buttonSleep.position(10, 150);
  buttonSleep.mousePressed(sleep);

  buttonEat = createButton("Eat");
  buttonEat.position(10, 180);
  buttonEat.mousePressed(eat);

  buttonPlay = createButton("Play");
  buttonPlay.position(10, 210);
  buttonPlay.mousePressed(play);

  buttonWash = createButton("Wash");
  buttonWash.position(10, 240);
  buttonWash.mousePressed(wash);

  background(200);
}

function draw() {
  background(200);
  checkValues();
  text("Hapiness: " + hapiness, 10, 30);
  text("Tiredness: " + tiredness, 10, 60);
  text("Hunger: " + hunger, 10, 90);
  text("Cleanliness: " + cleanliness, 10, 120);
}
