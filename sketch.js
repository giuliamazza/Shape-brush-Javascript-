
function setup(){
  createCanvas(800, 350);
  colorMode(HSB, 255);
  
  sel = createSelect();
  sel.position(10, 10);
  sel.option('square');
  sel.option('triangle');
  sel.option('circle');
  
  radio = createRadio();
  radio.position(100,10);
  radio.option('black');
  radio.option('green');
  radio.option('red');
  radio.option('gray');
  radio.style('width', '60px');
  textAlign(CENTER);
  fill(255, 0, 0);
}

function draw() {
  if (mouseIsPressed){
  val = radio.value();
  shape = sel.value();
  
  if (shape == 'square') {
    
    show_rect();
  } else if (shape == 'triangle') {
    
    show_triangle();
  } else if (shape == 'circle') {
    
    show_circle();
  }

  

}
}

function show_rect(){
  fill(val);
  noStroke();
  rect(mouseX - 10, mouseY - 10, 20,20);
}

function show_triangle(){
  fill(val);
  noStroke();
  triangle(mouseX - 20, mouseY + 20, mouseX, mouseY - 20, mouseX + 20, mouseY + 20);
}
  
function show_circle(){
  fill(val);
  noStroke();
  circle(mouseX, mouseY, 20);
}
