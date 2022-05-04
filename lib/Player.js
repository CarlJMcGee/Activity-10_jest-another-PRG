const playerNumGen = require("../util/random");
function Player(name = "") {
    this.name = name;
    this.health = playerNumGen(105, 95);
    this.strenth = playerNumGen(12, 7);
    this.agility = playerNumGen(12, 7);
}
module.exports = Player;
