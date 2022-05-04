const potionNumGen = require("../util/random.ts");
function Potion(name) {
    this.types = ["strenth", "agility", "health"];
    this.name = name || this.types[potionNumGen(this.types.length, 1)];
    //   if (this.name === "health") {
    //     this.value = randomNumGen(40, 30);
    //   }
    this.value = name === "health" ? potionNumGen(40, 30) : potionNumGen(12, 7);
}
module.exports = Potion;
