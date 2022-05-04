const playerNumGen = require("../util/random");
const playerPotion = require("./Potion.ts");
function Player(name = "") {
    this.name = name;
    this.health = playerNumGen(105, 95);
    this.strength = playerNumGen(12, 7);
    this.agility = playerNumGen(12, 7);
    this.inventory = [new playerPotion("health"), new playerPotion()];
}
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility,
    };
};
Player.prototype.getInventory = function () {
    return this.inventory.length ? this.inventory : false;
};
module.exports = Player;
