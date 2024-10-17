//emotions

let hunger = 0; //0 - 100, honger wordt steeds groter naamate de tijd verstrijkt
let tiredness = 0; //0 - 100, vermoeidheid wordt steeds groter naarmate de tijd verstrijkt
let hapiness = 100; //0 - 100, geluk wordt steeds kleiner naarmate de tijd verstrijkt
let dirtyness = 0; //0 - 100, viesheid wordt steeds groter naarmate de tijd verstrijkt

let timer = 1000;

let feedButton;

//actions
//
//spelen, slapen, eten, wassen

function feed() {
  //bij voeden wordt honger minder en viesheid meer.
  hunger = hunger - 10;
  dirtyness = dirtyness + 10;
}

function begrenzen() {
  if (hunger < 0) {
    hunger = 0;
  }
  if (hunger > 100) {
    hunger = 100;
  }
}

function setup() {
  background(200);
  feedButton = createButton("Feed");
  feedButton.position(10, 150);
  feedButton.mousePressed(feed);
  createCanvas(400, 400);
}

function draw() {
  background(200);
  text(round(timer), 10, 100);
  textSize(32);
  timer = timer - deltaTime;
  if (timer < 0) {
    timer = 1000;
    hunger = hunger + 1;
  }
  begrenzen();
  text("Hunger: " + hunger, 10, 30);
}
