const exp = require("constants");
const Enemy = require("../lib/Enemy.ts");
const Potion = require("../lib/Potion.ts");

jest.mock("../lib/Potion.ts");

describe("The Enemy", () => {
  it("creates an enemy obj", () => {
    const enemy = new Enemy("goblin", "sword");

    expect(enemy.name).toBe("goblin");
    expect(enemy.weapon).toBe("sword");
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
  });

  it("gets enemy health value", () => {
    const enemy = new Enemy("Matt");

    expect(enemy.getHealth()).toEqual(
      expect.stringContaining(enemy.health.toString())
    );
  });

  it("check if enemy is alive", () => {
    const enemy = new Enemy("Austin");

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;
    expect(enemy.isAlive()).toBeFalsy();
  });

  it("reduce enemy health", () => {
    const enemy = new Enemy("Drew");
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);
    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(999999);
    expect(enemy.health).toBe(0);
  });

  it("gets the enemy's attack value", () => {
    const enemy = new Enemy("Chris");

    enemy.strength = 10;

    expect(enemy.getAttackVal()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackVal()).toBeLessThanOrEqual(15);
  });

  it("gets a description of enemy weapon", () => {
    const enemy = new Enemy("goblin", "sword");

    expect(enemy.getDesc()).toEqual(expect.stringContaining("goblin"));
    expect(enemy.getDesc()).toEqual(expect.stringContaining("sword"));
  });
});
