const randomNumGen = (high: number, low: number) =>
  Math.floor(Math.random() * (high - low) + low);

module.exports = randomNumGen;
