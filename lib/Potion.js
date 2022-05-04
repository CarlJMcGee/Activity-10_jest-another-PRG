const randomNumGen = (high, low) => Math.floor(Math.random() * (high - low) + low);
function Potion(name) {
    this.types = ["strenth", "agility", "health"];
    this.name = name || this.types[randomNumGen(this.types.length, 1)];
    //   if (this.name === "health") {
    //     this.value = randomNumGen(40, 30);
    //   }
    this.value = name === "health" ? randomNumGen(40, 30) : randomNumGen(12, 7);
}
module.exports = Potion;
