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

test("gets player health value", () => {
  const player = new Player("Matt");

  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

test("check if player is alive", () => {
  const player = new Player("Austin");

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;
  expect(player.isAlive()).toBeFalsy();
});

test("reduce player health", () => {
  const player = new Player("Drew");
  const oldHealth = player.health;

  player.reduceHealth(5);
  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(999999);
  expect(player.health).toBe(0);
});
