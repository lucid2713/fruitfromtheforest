var limite_timer, last_event;
var bool_color;
var img;

function preload(){
  img = loadImage('cello-31722.svg');
}

function setup() {
    limite_timer = 3000;
    last_event = 0;
    createCanvas( screen.width, screen.height );
    frameRate(30);
}
function draw() {

    if(mouseX != 0 && mouseY !=0)
            image(img, mouseX, mouseY);
      }
