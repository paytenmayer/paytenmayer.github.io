var runLevels = function (window) {
  window.opspark = window.opspark || {};


  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;


  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;


    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;


    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);


    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE


   


    function createSawBlade(x, y, damage) { //creates the function
      var hitZoneSize = 25; //declaring the variable hitzone with a value of 25
      var damageFromObstacle = damage; //declaring damageFromObstacle with value of 10
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
     
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = groundY - y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25
      obstacleImage.y = -25
      sawBladeHitZone.rotationalVelocity = -50;
 
      sawBladeHitZone.onPlayerCollision = function () {
        game.changeIntegrity(-10)
        game.increaseScore(-100);
      }
    }


    function createSuperSpike(x, y, damage) {  //creates the function spike
      var hitZoneSize = 25; //declaring the variable hitzone with a value of 25
      var damageFromObstacle = damage; //declaring damageFromObstacle with value of 10
      var superSpikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
     
      superSpikeHitZone.x = x; //spike hit zone x value
      superSpikeHitZone.y = groundY - y; //spike hit zone y value
      game.addGameItem(superSpikeHitZone); //adds the spike to the game
      var obstacleImage = draw.bitmap("img/SUPERSPIKES.png"); //draws the image
      superSpikeHitZone.addChild(obstacleImage); //adds it on top of the background
      obstacleImage.scaleX = .35 //scales x value
      obstacleImage.scaleY = .35 //scales y value
      obstacleImage.x = -45 //scales the image again but for the hitbox
      obstacleImage.y = -45 //scales the image again but for the hitbox
 
      superSpikeHitZone.onPlayerCollision = function () {  //function for hitzone
        game.changeIntegrity(-99999999)  //damage
        game.increaseScore(-100); //score decrease on collusion
      }
    }


function createEnemy(x, y) {  //creates the function
  var enemy = game.createGameItem("enemy", 25); //creates the game item
  var redSquare = draw.bitmap('img/evilmaxxing flower.png'); //draws the image
  redSquare.x = -50; //x value scale
  redSquare.y = -50; //y value scale
  enemy.addChild(redSquare); //adds it to background
  enemy.x = x; //the x value
  enemy.y = y; //the y value
  enemy.velocityX = -3; //the velocity of the enemy
  redSquare.scaleX = 0.35 //the scale of the x value of the enemy
  redSquare.scaleY =0.35 //the scale of the y value of the enemy
  game.addGameItem(enemy); //calls the enemy
 
  enemy.onPlayerCollision = function () { //collusion function
    game.changeIntegrity(-10) //minuses the health by 10
    game.increaseScore(-100); //minuses score by 100
  }


  enemy.onProjectileCollision = function (){ //on collusion
    game.increaseScore(100); //increase score by 100
    enemy.fadeOut(); //fade out of existence
    enemy.shrink(); //shrinks
    enemy.flyTo(0,-100); //flies to the top left of the screen
  }
}


function createEnemy2(x, y) { //creates the function
  var enemy = game.createGameItem("enemy", 35); //creates enemy game item
  var redSquare = draw.bitmap('img/AndruwFireball.png'); //draws the image
  redSquare.x = -50; //x value size
  redSquare.y = -50; //y value size
  enemy.addChild(redSquare); //adds it to the background
  enemy.x = x; //position
  enemy.y = y; //position
  enemy.velocityX = -3; //speed
  redSquare.scaleX = 0.17 //x scale
  redSquare.scaleY =0.17 //y scale
  game.addGameItem(enemy); //adds the enemy to the game
  enemy.onPlayerCollision = function () { //on collusion function
    game.changeIntegrity(-99) //change hp
    game.increaseScore(-400); //change score
  }


  enemy.onProjectileCollision = function (){ //on projectile hit
    game.increaseScore(250); //change score
    enemy.fadeOut(); //fade out
    enemy.shrink(); //shrinks
    enemy.flyTo(0,-100); //changes the position
  }
}


function createEnemy3(x, y) { //creates the function
  var enemy = game.createGameItem("enemy", 35); //creates the game item enemy
  var redSquare = draw.bitmap('img/AndruwFighter.png'); //draws the enemy
  redSquare.x = -50; //scale of x value
  redSquare.y = -50; //scale of y value
  enemy.addChild(redSquare); //ads it on top of the background
  enemy.x = x; //position of x
  enemy.y = y; //position of y
  enemy.velocityX = -3; //speed
  redSquare.scaleX = 0.17 //scale of the image
  redSquare.scaleY =0.17 //scale of the image
  game.addGameItem(enemy); //ads the game item to the list
  enemy.onPlayerCollision = function () { //when the player hits the enemy
    game.changeIntegrity(-99) //minus 99 hp
    game.increaseScore(-400); //minus 400 score
  }


  enemy.onProjectileCollision = function (){ //on projectile hit
    game.increaseScore(500); //increase score
    enemy.fadeOut(); //fade
    enemy.shrink(); //shrink
    enemy.flyTo(0,-100); //flies to top left
  }
}


function createEnemy4(x, y) { //creates the function
  var enemy = game.createGameItem("enemy", 70); //makes the game item
  var redSquare = draw.bitmap('img/AndruwTitan.png'); //draws the image
  redSquare.x = -130; //size of square
  redSquare.y = -100; //size of square
  enemy.addChild(redSquare); //adds on top background
  enemy.x = x; //position
  enemy.y = y; //position
  enemy.velocityX = -1; //speed
  redSquare.scaleX = 0.45 //scale of x
  redSquare.scaleY =0.45 //scale of y
  game.addGameItem(enemy); //adds the item
  enemy.onPlayerCollision = function () { //on player collusion function
    game.changeIntegrity(-99) //subtracts hp
    game.increaseScore(-400); //subtracts score
  }


  enemy.onProjectileCollision = function (){ //projectile collusion function
    game.increaseScore(1000); //give 1000 score
    enemy.fadeOut(); //fade out
    enemy.shrink(); //shrink away
  }
}


function createReward(x, y) { //creates the function  
  var reward = game.createGameItem("enemy", 25); //creates the game item reward
  var blueSquare = draw.bitmap('img/OnwardAndUpward.png'); //draws the reward
  blueSquare.x = -25; //blue square posotion
  blueSquare.y = -25; //blue square position
  reward.addChild(blueSquare); //adds the blue square to the backgorund
  blueSquare.scaleX = 0.45 //scale of blue scale
  blueSquare.scaleY =0.45 //scale of blue square
  game.addGameItem(reward); //adds the item reward
  reward.velocityX = -3 //velocity of said object
  reward.onPlayerCollision = function () { //player collusion function
    game.changeIntegrity(-10) //minus 10 hp
    game.increaseScore(100); //+100 score
  }
  reward.onProjectileCollision = function (){ //projectile collusion function
    game.increaseScore(100); //increases score by 100
    reward.fadeOut(); //fades
    reward.shrink(); //shrinks
    reward.flyTo(0,-100); //flies to top left
    }
  }


  function createMarker(x, y) { //creates the function
    var marker = game.createGameItem("enemy", 25); //creates the game item marker
    var yellowSquare = draw.rect(50, 50, "yellow"); //draws a yellow square
    yellowSquare.x = -25; //size
    yellowSquare.y = -25; //size
    marker.addChild(yellowSquare); //adds the marker for yellow square on background
    marker.x = x; //position
    marker.y = y; //position
    marker.velocityX = -3; //velocity
    yellowSquare.scaleX = 1 //scale of the yellow square
    yellowSquare.scaleY =1 //scale of the yellow square
    game.addGameItem(marker); //adds the item as marker
    marker.onPlayerCollision = function () { //checks for player collusion
      startLevel(); //starts the level
      game.increaseScore(1000); //adds 100 score
    }
  }


 




    function startLevel() { //creates the function
// TODO 13 goes below here
var level = levelData[currentLevel];
var levelObjects = level.gameItems;
for (var i = 0; i < levelObjects.length; i++){
  var element = levelObjects[i];
  if (element.type === "sawblade"){
    createSawBlade(element.x, element.y);
      }
      if (element.type === "superspike"){
        createSuperSpike(element.x, element.y);
          }
  if (element.type === "enemy"){ //calls the element enemy
    createEnemy(element.x, element.y); //creates on specified x and y value of choice on leveldata
  }
  if (element.type === "enemy2"){ //calls the element enemy2
    createEnemy2(element.x, element.y);//creates on specified x and y value of choice on leveldata
  }
  if (element.type === "enemy3"){ //calls the element enemy3
    createEnemy3(element.x, element.y);//creates on specified x and y value of choice on leveldata
  }
  if (element.type === "enemy4"){ //calls the element enemy4
    createEnemy4(element.x, element.y);//creates on specified x and y value of choice on leveldata
  }
  if (element.type === "marker"){ //calls the element marker
    createMarker(element.x, element.y);//creates on specified x and y value of choice on leveldata
  }
  if (element.type === "reward"){ //calls the element reward
    createReward(element.x, element.y);//creates on specified x and y value of choice on leveldata
  }
}


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}


