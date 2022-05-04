const Player = require("../lib/Player.ts");
const Potion = require("../lib/Potion.ts");

jest.mock("../lib/Potion.ts");

test("creates player obj", () => {
  const player = new Player("Dan");

  expect(player.name).toBe("Dan");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("gets player stats", () => {
  const player = new Player("Ben");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

test("gets player inventory", () => {
  const player = new Player("Andrew");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});
