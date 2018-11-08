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
    // if(millis() > last_event + limite_timer){
    //     console.log("ok")
    //     last_event = millis();
    //
    //     if(bool_color){
    //         stroke('#000000');
    //         bool_color = false;
    //     }else{
    //         stroke('#E30A17');
    //         bool_color = true;
    //     }
    // }
    // fill(255, 0);
    if(mouseX != 0 && mouseY !=0)
        // ellipse( mouseX, mouseY, 200, 200);
            image(img, mouseX, mouseY);
      }
