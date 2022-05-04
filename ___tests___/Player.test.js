const Player = require("../lib/Player.ts");

test("creates player obj", () => {
  const player = new Player("Dan");

  expect(player.name).toBe("Dan");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strenth).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
});
