const potionNumGen = require("../util/random.ts");

function Potion(name?: string) {
  this.types = ["strenth", "agility", "health"];
  this.name = name || this.types[potionNumGen(this.types.length, 1)];
  this.value = name === "health" ? potionNumGen(40, 30) : potionNumGen(12, 7);
}

module.exports = Potion;
