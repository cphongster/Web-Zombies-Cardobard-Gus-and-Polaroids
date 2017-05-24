var border,crosshair,crosssprite,video ;
var colorTracker,img,lastTime,ellapsedTime;
var bulletcount= 3;
var bullet1,bullet2,bullet3;
var score = 0;
var begin = 1;
var coin, fullsizecoin;
var coinbit = false ;
var xval= [100,225,330,460];
var inData,serial;
var zombies;

//COLOR TRACKER VARIABLES
var threshold = 20; //255 is white, 0 is black
var aveX, aveY; //this is what we are trying to find
var objectR =255;
var objectG = 0;
var objectB = 0;

function setup() {
  createCanvas(900,600);
  imageMode(CENTER);
  ellipseMode(CENTER);
 
//STARTSCREEN 
  start= loadGif('assets/STARTSCREEN.gif');
  start2= loadImage('assets/startscreen.png');
  startstill= createSprite(width/2, height/2);
    startstill.addImage(start2);
  blood= loadImage('assets/blood.png');

// STARTSCREEN COIN BUTTON
fullsizecoin= loadImage("assets/coin.png")
coin = createSprite(width/2,height/2);
  coin.addImage(fullsizecoin);
  coin.mouseActive = true ;

//CROSSHAIR  
crosshair= loadImage("assets/Crosshair.png");
crosssprite = createSprite(mouseX,mouseY);
  crosssprite.addImage(crosshair);

//ZOMBIE/TARGET
zombies = new Group();
zombie2= loadImage("assets/Zombie2.png");
zombie=createSprite(300,300,50,50);
 // zombie.addImage(zombie2);
// for (var i = 0; i<4; i++){
//     zombie=createSprite(random(50,800), random (50,450));
//       zombie.addImage(zombie2);
//       drawSprite(zombie[i]);
//       zombie.addToGroup(zombies);
//  }
    
//BULLET COUNTER
bullet1= loadImage("assets/bullet1.png");
bullet2= loadImage("assets/bullet2.png");
bullet3= loadImage("assets/bullet3.png");


//FANCY VIDEO STUFF
video = createCapture(VIDEO);
border=loadImage ("assets/Polaroid Sample3.png");
endscreen = loadImage("pix.jpg");

  
 // SERIAL
  serial = new p5.SerialPort();       // make a new instance of the serialport library

  //serial.on('list',printList);  // set a callback function for the serialport list event

  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open('COM3');              // open a serial port

}
//end of setup

//SERIAL SETUP
function serverConnected() { println('connected to server.');}
function portOpen() { println('the serial port opened.')}
function serialError(err) { println('Something went wrong with the serial port. ' + err);}
function portClose() {println('The serial port closed.');}

function serialEvent() {
  inData = Number(serial.readLine());
  //console.log(inData);
}
  
  
//DRAW FUNCTION
function draw(){

//DEGBUGGING PICS 
  //background (200);
  //image (start2,width/2,height/2);
 

 startscreen(); 

//IF THE COIN IS INSERTED, draw the game, bullets, and score
//console.log (begin);
if (begin>=1) {
  video.loadPixels();
  background(255);
  image(video,width/2,height/2,video.width*1.30, video.height*1.30);
  image(blood,width/2,height/2,width, blood.height);
  //gamesetup();
  drawSprite(zombie);
 // consolelog(zombie.position.x);
   // console.log(bulletcount); 
  bullets();
  scoredata();
}
else {
  drawSprite(startstill);
  drawSprite(coin);
}
  colortracker();
  //drawSprite(crosssprite);  
   //image (crosshair, mouseX,mouseY);
}






  
