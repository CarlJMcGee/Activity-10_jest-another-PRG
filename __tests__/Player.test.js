const Player = require("../lib/Player.ts");
const Potion = require("../lib/Potion.ts");

jest.mock("../lib/Potion.ts");

describe("The Player", () => {
  it("creates player obj", () => {
    const player = new Player("Dan");

    expect(player.name).toBe("Dan");
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });

  it("gets player stats", () => {
    const player = new Player("Ben");

    expect(player.getStats()).toHaveProperty("potions");
    expect(player.getStats()).toHaveProperty("health");
    expect(player.getStats()).toHaveProperty("strength");
    expect(player.getStats()).toHaveProperty("agility");
  });

  it("gets player inventory", () => {
    const player = new Player("Andrew");

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
  });

  it("gets player health value", () => {
    const player = new Player("Matt");

    expect(player.getHealth()).toEqual(
      expect.stringContaining(player.health.toString())
    );
  });

  it("check if player is alive", () => {
    const player = new Player("Austin");

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;
    expect(player.isAlive()).toBeFalsy();
  });

  it("reduce player health", () => {
    const player = new Player("Drew");
    const oldHealth = player.health;

    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(999999);
    expect(player.health).toBe(0);
  });

  it("gets the player's attack value", () => {
    const player = new Player("Chris");

    player.strength = 10;

    expect(player.getAttackVal()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackVal()).toBeLessThanOrEqual(15);
  });

  it("adds potion to inventory", () => {
    const player = new Player("Ryan");
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
  });

  it("uses potion from inventory", () => {
    const player = new Player("Maddie");
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
  });
});
