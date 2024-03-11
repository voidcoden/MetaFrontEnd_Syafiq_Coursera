const { default: TestRunner } = require("jest-runner");
const jestTutorial = require("./jestTutorial");

test("returns the number plus 5", () => {
    expect(jestTutorial(1)).toBe(6);
})