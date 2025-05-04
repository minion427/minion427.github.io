function setup() {
    createCanvas(400, 400);
    background(255); // Set the background color to white
  }
  
  function draw() {
    fill(255, 0, 0); //red
    rect(50, 50, 100, 100); // rectangle
  
    fill(0, 255, 0); //green
    ellipse(200, 200, 100, 100); //elipse

    stroke(0, 0, 255); //blue
    line(50, 300, 350, 300); //line

    fill(255, 255, 0); //yellow
    triangle(100, 350, 200, 250, 300, 350); //triangle
  }
  