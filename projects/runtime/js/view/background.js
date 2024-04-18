var background = function (window) {
    'use strict';
   
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
   
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
       
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
       
        // container which will be returned
        var background;
       
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree;
      var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();


            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#7A048F');
            background.addChild(backgroundFill);
           
            // TODO 2: - Add a moon and starfield
            for (var stars = 0; stars <= 100; stars++) { // this draws the stars
                var circle = draw.circle(0.25, "white", "white", 2); // this is the property for stars
                    circle.x = canvasWidth * Math.random();
                        circle.y = groundY * Math.random();
                            background.addChild(circle);
            }




            var moon = draw.bitmap("img/Moon.png");
            moon.x = canvasWidth-900;
            moon.y = canvasHeight-1500;
            moon.scaleX = 1;
            moon.scaleY = 1;
            background.addChild(moon);
           
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?


            var buildingColors = ["#661160", "#8E3387", "#5B0655", "#891672", "#B32196"];
            for (var i = 0; i < 5; i++) { //built for loop, set it to zero, i is less than 5
                var buildingHeight = 300 * Math.random(); //made variable buildingHeight and set it to 300
                var building = draw.bitmap("img/BackgroundIsland.png", "#B32163", 1); //draws the building
                building.x = 300 * i; //200 times zero, and everytime it runs, it'll render it 200 pixels away from the other building
                building.y = groundY - buildingHeight; //subs the height
                background.addChild(building); //adds the building to the child
                buildings.push(building); //taking the building we just created and pushing it to the buildings array
              }
           
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/totem.png");  // this draws the tree  up to 68
tree.x = canvasWidth-300;
tree.y = groundY-515;
background.addChild(tree);
           
        } // end of render function - DO NOT DELETE
       
       
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
           
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 3;


if (tree.x < -200) {
  tree.x = canvasWidth;
}
           
    if (tree.x < -350) {
        tree.x = canvasWidth
    }
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
              building.x = building.x - 0.12


              if (building.x < - 100){
                building.x = canvasWidth;
              }


            }


        } // end of update function - DO NOT DELETE
       
       
       
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
       
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
       
        /* render and return the background */
        render();
        return background;
    };
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}


