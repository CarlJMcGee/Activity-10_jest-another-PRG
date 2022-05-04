const playerNumGen = require("../util/random.ts");
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
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};
Player.prototype.isAlive = function () {
    return this.health > 0 ? true : false;
};
Player.prototype.reduceHealth = function (dmg) {
    this.health -= dmg;
    if (this.health < 0) {
        this.health = 0;
    }
};
Player.prototype.getAttackVal = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;
    return playerNumGen(max, min);
};
Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};
Player.prototype.usePotion = function (index) {
    const potion = this.getInventory().splice(index, 1)[0];
    switch (potion.name) {
        case "agility":
            this.agility += potion.value;
            break;
        case "strength":
            this.strength += potion.value;
            break;
        case "health":
            this.health += potion.value;
            break;
    }
};
module.exports = Player;
