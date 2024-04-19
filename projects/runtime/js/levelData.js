var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY-470 }, //draws sawblade
          { type: "superspike", x: 4900, y: groundY-470 },//draws superspike
          { type: "superspike", x: 800, y: groundY-470 },//draws superspike
          { type: "superspike", x: 1200, y: groundY-470 },//draws superspike
          { type: "sawblade", x: 1300, y: groundY-470 }, //draws sawblade
          { type: "sawblade", x: 1500, y: groundY-470 }, //draws sawblade
          { type: "sawblade", x: 2700, y: groundY-470 }, //draws sawblade
          { type: "sawblade", x: 3000, y: groundY-470 }, //draws sawblade
          { type: "sawblade", x: 3200, y: groundY-370 }, //draws sawblade
          { type: "sawblade", x: 3500, y: groundY-370 }, //draws sawblade
          { type: "enemy", x: 2500, y: groundY-50 },//draws enemy
          { type: "enemy", x: 2800, y: groundY-50 },//draws enemy
          { type: "enemy", x: 2000, y: groundY-50 },//draws enemy
          { type: "enemy1", x: 1900, y: groundY-50 },//draws enemy
          { type: "enemy2", x: 500, y: groundY-50 },//draws enemy
          { type: "enemy", x: 600, y: groundY-50 },//draws enemy
          { type: "enemy", x: 700, y: groundY-50 }, //draws enemy
          { type: "reward", x: 3000, y: groundY-50 }, //draws reward
          { type: "marker", x: 3500, y: groundY-50 }, //draws marker
          { type: "sawblade", x: 4000, y: groundY-370 }, //draws sawblade
          { type: "sawblade", x: 4100, y: groundY-370 }, //draws sawblade
          { type: "sawblade", x: 4500, y: groundY-370 }, //draws sawblade
          { type: "sawblade", x: 5000, y: groundY-370 },//draws sawblade
          { type: "sawblade", x: 5100, y: groundY-470 },//draws sawblade
          { type: "sawblade", x: 5200, y: groundY-470 },//draws sawblade
          { type: "sawblade", x: 5300, y: groundY-470 },//draws sawblade
          { type: "sawblade", x: 5400, y: groundY-470 },//draws sawblade

        ],
      },
      {
        name: "save the princess",
        number: 6,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 4000, y: groundY-600 },//draws sawblade
          { type: "sawblade", x: 4100, y: groundY-600 },//draws sawblade
          { type: "sawblade", x: 4500, y: groundY-600 },//draws sawblade
          { type: "sawblade", x: 5000, y: groundY-600 },//draws sawblade
          { type: "sawblade", x: 5100, y: groundY-700 },//draws sawblade
          { type: "sawblade", x: 5200, y: groundY-700 },//draws sawblade
          { type: "sawblade", x: 5300, y: groundY-700 },//draws sawblade
          { type: "sawblade", x: 5400, y: groundY-700 },//draws sawblade

        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
