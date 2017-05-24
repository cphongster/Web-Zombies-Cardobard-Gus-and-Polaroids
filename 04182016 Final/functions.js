//STARTSCREEN
  // CHANGING STARTSCREEN TO VIDEO
function startscreen(){
// function mousePressed() {
    if (crosssprite.overlap(coin)) {
//   if (coin.mouseIsOver= true){
    //console.log("coin");
      begin++;
      coin.remove();
      startstill.remove();
      drawSprite(zombie);
  }
  else {
    begin = 0
    drawSprite(startstill);
    drawSprite(coin);
  }
}
//}

//CREATE GAME/ZOMBIES 
function gamesetup(){
  
// for(var i = 0; i<zombies.length; i++) {
//   var z = zombie[i];
//   z.position.x += sin(frameCount/10);
//   }
    drawSprites(zombies);
}

//BULLET COUNTER
function bullets() {
  if (bulletcount=3){
    image(bullet3,800,400,bullet3.width/2,bullet3.height/2);
    }
  else if (bulletcount=2){
    image(bullet2,800,400,bullet2.width/2,bullet2.height/2);
    }
  else if (bulletcount=1){
    image(bullet1,800,400,bullet1.width/2,bullet1.height/2);
    }
  else if (bulletcount=0){
    
  }
}

//BULLET SIMULATOR
function keyTyped(){
  if (key === 'q'){
    bulletcount= 1;
  }
  else if (key === 'w'){
    bulletcount= 2;
  }
  else if (key === 'e'){
    bulletcount= 3;
  }
  else if (key === 'p'){
    bulletcount= 0;
  }
  else if (key === 'g'){
    save('pix.jpg');
    image(endscreen,width/2,height/2);
    image(border,width/2,height/2,width,height);
    save('pix.jpg');
    image(endscreen,width/2,height/2);
  }
  else if (key === ' t'){
    begin = 1;
  }
  else if (key === 'r'){
    begin = 0;
  }
}

//SCORE COUNTER    
function scoredata (){
textSize(32);
fill (255);
 text("Score:"+score,75,75)
  if (crosssprite.overlap(zombie)){
    if (inData= 0){
    removeSprite(zombie);
    score ++; 
    bulletcount= (bulletcount - 1);
    }
  }
}


function endgame (){
  if (bulletcount = 0) {
    save('pix.jpg');
    image(endscreen, width/2,height/2);
    image(border,width/2,height/2,width,height);
    save('pix.jpg');
  }
}


// COLOR TRACKER
function colortracker(){
  ellapsedTime = millis() - lastTime;  //find time since last time, only print it out if you press "t"
  lastTime = millis();  //reset timer for checking time next fram
   
    video.loadPixels();
   
    var totalFoundPixels= 0;  //we are going to find the average location of change pixes so
    var sumX = 0;  //we will need the sum of all the x find, the sum of all the y find and the total finds
    var sumY = 0;
    
    //enter into the classic nested for statements of computer vision
    for (var row = 0; row < video.height; row++) {
      for (var col = 0; col < video.width; col++) {
        //the pixels file into the room long line you use this simple formula to find what row and column the sit in 

        var offset = (row * video.width + col)*4;
        //pull out the same pixel from the current frame 
        var thisColor = video.pixels[offset];

        //pull out the individual colors for both pixels
        var r = video.pixels[offset];
        var g = video.pixels[offset + 1];
        var b = video.pixels[offset + 2];

        //in a color "space" you find the distance between color the same whay you would in a cartesian space, phythag or dist in processing
        var diff = dist(r, g, b, objectR, objectG, objectB);

        if (diff < threshold) {  //if it is close enough in size, add it to the average
          sumX = sumX + col;
          sumY= sumY + row;
          totalFoundPixels++;
        // if (debug) video.pixels[offset] = 0xff000000;//debugging
        }
      }
    }
    video.updatePixels();
    
   
    if (totalFoundPixels > 0){
      aveX = sumX/totalFoundPixels;
      aveY = sumY/totalFoundPixels;
      drawSprite(crosssprite);
        crosssprite.position.x= aveX-10;
        crosssprite.position.y= aveY-10;
    // image(crosshair, aveX-10,(aveY-10) );
    // ellipse(aveX-10,(aveY-10),20,20);
    }
    
}
  
function mousePressed(){
  //if they click, use that picture for the new thing to follow
// var offset = mouseY * video.width + mouseX;
 
  //pull out the same pixel from the current frame 
  var thisColor = video.get(mouseX,mouseY);

  //pull out the individual colors for both pixels
  objectR = thisColor[0];
  objectG = thisColor[1];
  objectB = thisColor[2];
  println("Chasing new color  " + objectR + " " + objectG + " " + objectB);
}


  
