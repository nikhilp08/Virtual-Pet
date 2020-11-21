//Create variables here

var dog
var happyDog
var database
var foodS
var foodStock
var dogIMG
var happyDogIMG

function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png")
	happyDogIMG = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogIMG);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background("blue");

  if(keyWentDown(UP_ARROW)){
    foodS = foodS + 1;
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  
  drawSprites();
  //add styles here

  textSize(15);
  fill("white");
  stroke("white");
  text("Press UP_ARROW Key To Feed Dog Milk!",115,50);
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



