//TO DO:
//identify *any* animation file and display it in a canvas
//center on screen, without the flowerAnim strip showing by itself
//make code more elegant/efficient

var currentX = 0;
var animDelay = 250;
var isHoveringOver = false;
//this is an important boolean that gives feedback that a file is an animation
//and we run a bunch of if/then statements, the "meat and potatoes" below when it is set to true
// this is in the anim function
var identifyFile = false;
//set cell position 0 through 9
var cellPosition = 0;
//these variables are set up for later in the code, where the boolean is toggled
//every time a cell is displayed
var pass7 = false;
var pass8 = false;
//creates an IMG element in the HTML file under p with id flowerAnim
var flowerAnim = document.createElement("IMG");
flowerAnim.src = "https://whimsydesignblog.files.wordpress.com/2017/09/flower_anim1.png?w=1000";
flowerAnim.setAttribute("alt", "Flower Animation");
flowerAnim.id = "myImage";

document.body.appendChild(flowerAnim);

//this is necessary so that the image appears in the canvas
//has to do with order of loading
flowerAnim.onload = function() {
//here we have created a square canvas and entered the image into it
console.log("Inside flowerAnim.onload");
  var createCanvas = document.createElement("canvas");
  createCanvas.id = "myCanvas";
  createCanvas.setAttribute("width", "50px");
  createCanvas.setAttribute("height", "50px");
  createCanvas.style = "border:1px solid #d3d3d3";

  createCanvas.addEventListener("touchstart", touchFeedback, false);
  //createCanvas.addEventListener("touchend", touchFeedback, false); //not needed in this wacky case
  console.log("touche initialized");

  //Guessing the touch on the canvas works and calls both touchstart and onmouseover
  var initialTouch = false;

  function touchFeedback() {
    console.log("inside of touchfeedback"); //test for funtion working

    if (initialTouch == false) {
      initialTouch = true;
      isHoveringOver = true;

    }
    else if (initialTouch == true){
      console.log("Oopos, turning off now!");
      initialTouch = false;
      isHoveringOver = false;
    }
};

  var ctx = createCanvas.getContext('2d');


// example: s is source, d is destination
// createCanvas.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
  ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);



  document.body.appendChild(createCanvas);

  document.getElementById("myCanvas").onmouseover = function() {
  console.log("hover!");
  isHoveringOver = true;
  };

  document.getElementById("myCanvas").onmouseout  = function() {
  console.log("no more hover!");
  isHoveringOver = false;
  };

  //assigning the flower animation file source to variable fileName.
  //not sure if this is really necessary, can clean up later
  var fileName = flowerAnim.src;

  //checking if the above statement gets the filename in it's full URL for now
  //later we want to just grab the filename by itself
  console.log("Did I get the file name? : " , fileName);


  //checking if fileName has "anim" in the string, setting identifyFile to true
  function setIdentifyFileTrue() {
      if (fileName.includes("anim") == true) {
          identifyFile = true;
          }
  }
  setIdentifyFileTrue();

  //This is the meat and potatoes with conditional statements working
  function anim(){
      if (identifyFile == true && isHoveringOver == true) {

              if (cellPosition == 0) {
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 0!');
                ++cellPosition;

              }

              else if (cellPosition == 1) {
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 1!');
                ++cellPosition;
              }

              else if (cellPosition == 2) {
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 2!');
                ++cellPosition;
              }

              else if (cellPosition == 3) {
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 3!');
                ++cellPosition;
              }

              else if (cellPosition == 4) {
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 4!');
                ++cellPosition;
              }

              else if (cellPosition == 5) {
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 5!');
                ++cellPosition;
              }

              else if (cellPosition == 6) {
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 6!');
                ++cellPosition;
              }

              else if (cellPosition == 7 && pass7 == false) {
                pass7 = true;
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 7!');
                ++cellPosition;

              }

              else if (cellPosition == 7 && pass7 == true) {
                pass7 = false;
                currentX -= 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 7!');
                --cellPosition;

              }

              else if (cellPosition == 8 && pass8 == false) {
                pass8 = true;
                currentX += 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 8!');
                ++cellPosition;

              }

              else if (cellPosition == 8 && pass8 == true) {
                pass8 = false;
                currentX -= 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 8!');
                --cellPosition;

              }

              else if (cellPosition == 9) {
                currentX -= 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 9!');
                --cellPosition;

              }

      } else if (identifyFile == true && isHoveringOver == false) {

              if (cellPosition !== 0) {

                currentX -= 50;
                ctx.drawImage(flowerAnim, currentX, 0, 50, 50, 0, 0, 50, 50);
                console.log('ran cell 1-9, no mouseover!');
                --cellPosition;
              }

      }

  };


setInterval(anim, animDelay);
};
