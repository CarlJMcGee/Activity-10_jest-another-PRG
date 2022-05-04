const enemyNumGen = require("../util/random.ts");
const enemyPotion = require("./Potion.ts");
function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new enemyPotion();
    this.health = enemyNumGen(95, 85);
    this.strength = enemyNumGen(10, 5);
    this.agility = enemyNumGen(10, 5);
}
Enemy.prototype.getHealth = function () {
    return `The ${this.name}'s health is at ${this.health}!`;
};
Enemy.prototype.isAlive = function () {
    return this.health > 0 ? true : false;
};
Enemy.prototype.reduceHealth = function (dmg) {
    this.health -= dmg;
    if (this.health < 0) {
        this.health = 0;
    }
};
Enemy.prototype.getAttackVal = function () {
    const min = (this.strength -= 5);
    const max = (this.strength += 5);
    return enemyNumGen(max, min);
};
Enemy.prototype.getDesc = function () {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};
module.exports = Enemy;
export {};
