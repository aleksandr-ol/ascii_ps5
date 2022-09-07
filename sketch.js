const density = 'N@#W$9876543210?!abc;:+=-,...      ';

let myImage;

function preload() {
  myImage = loadImage("to.jpg")
}

function setup() {
  noCanvas();
  
  let w = width / myImage.width;
  let h = height / myImage.height;
  
  myImage.loadPixels();

  for (let j =0; j < myImage.height; j ++) {
    let row = '';
    for (let i =0; i < myImage.width; i ++) {
      pixelIndex = (i + j * myImage.width) * 4;
      const r = myImage.pixels[pixelIndex + 0];
      const g = myImage.pixels[pixelIndex + 1];
      const b = myImage.pixels[pixelIndex + 2];
      // const avg = (r + g + b) / 3;
      // const avg = r * 0.3 + g * 0.59 + b * 0.11;
      const avg = max(r,g,b);
      // const avg = (max(r,g,b) + min(r,g,b)) / 2;
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(charIndex);
      if (c == ' ') row += '&nbsp;';
      else row += density.charAt(charIndex);
    }
    createDiv(row);
  }
}

function draw() {
  // image(myImage, 0, 0, width, height);
  
}
