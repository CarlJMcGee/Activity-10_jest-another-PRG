const Potion = require("../lib/Potion.js");

test("creates potion obj", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toBeGreaterThanOrEqual(7);
  expect(potion.value).toBeLessThanOrEqual(12);
});

test("creates health potion", () => {
  const healthPotion = new Potion("health");

  expect(healthPotion.name).toBe("health");
  expect(healthPotion.value).toBeGreaterThanOrEqual(30);
  expect(healthPotion.value).toBeLessThanOrEqual(40);
});
