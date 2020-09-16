//Create variables here
var dog;
var dog2;
var database; 
var food;
var foodStock;
var feedButton;
var addFoodButton;
var fedTime;
var lastFed;
var foodObj;
var changingGameState;
var readingGameState;
var bedroomImg;
var gardenImg;
var washroomImg;


function preload()
{
	//load images here
	dog.loadImg("dog.png");
	dog2.loadImg("dog2.png");
	bedroom.loadImg("bedroom.png");
	garden.loadImg("garden.png");
	washroom.loadImg("washroom.png");
}

function setup() {
	database = firebase.database();
	
	createCanvas(500, 500);
	
	var dog = createSprite(55, 465, 20, 20);
	dog.addImage("dog.png");
	database = 
	foodStock = database.ref("Food");
	foodStock.on("value", readStock);
	foodObj = new Food();

	feed = createButton("Feed the dog");
	feed.position(700, 95);
	feed.mousePressed(feedDog);


	fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  
	addFood = createButton("Add Food");
	addFood.position(800, 95);
	addFood.mousePressed(addFood);

	//read game state from database
	readState = database.ref('gameState');
	readState.on("value", function (data) {
		gameState = data.val();
	});


function draw() {  
	background(46, 139, 87);

	foodObg.display();

	if (lastFed >= 12) {
		text("Last Fed:" + lastFed % 12 + "PM", 350, 30);
	}
	else if (lastFed == 0) {
		text("Last Fed: 12 AM", 350, 30);
	}
	else {
		test("Last Fed:" + lastFed + AM, 350, 30);
	}

	if (gameState != "Hungry") {
		feed.hide();
		addFood.hide();
		dog.remove();
	}
	else {
		feed.show();
		addFood.show();
		dog.addImg(sadDog);
    }


  drawSprites();
  //add styles here
	textSize = 10;
	fill(purple);
	stroke(white)
}

function readStock(data) {
	foods = data.val();
}

function writeStock(x) {
	if (x <= 0) {
		x = 0;
	}
	else {
		x = x - 1;
    }

	database.ref("/").update({
		Food:x
    })
}

function addFoods() {
	foodS++;
	database.ref('/').update; ({
		Food: foodS
    })
}

function feedDog() {
	dog.addImage("dog2.png");
}

//function to update gamestates in database
	function update(state) {
		databes.ref('/').update({
			gameState: state
		});
	};