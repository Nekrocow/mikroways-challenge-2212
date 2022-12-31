const { changeCalculator } = require("../changeCalculator")

describe("changeCalculator", () => {
  it("should return [0] if called with (100, 100)", () => {
    expect(changeCalculator(100,100)).toEqual([0])
  })
  it("should return [20, 5] if called with (100, 75)", () => {
    expect(changeCalculator(100, 75)).toEqual([20, 5])
  })
  it("should return [100, 20, 5] if called with (200, 75)", () => {
    expect(changeCalculator(200, 75)).toEqual([100, 20, 5])
  })
  it("should return [500, 50, 5, 2, 1] if called with (1000, 442)", () => {
    expect(changeCalculator(1000, 442)).toEqual([500, 50, 5, 2, 1])
  })
  it("should return [200, 200, 50] if called with (500, 50)", () => {
    expect(changeCalculator(500, 50)).toEqual([200, 200, 50])
  })
  it("should return [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] if called with (1889, 1)", () => {
    expect(changeCalculator(1889, 1)).toEqual([1000, 500, 200, 100, 50, 20, 10, 5, 2, 1])
  })
  it("should return an error message if called with payment < 1", () => {
    expect(changeCalculator(-4, 8)).toBe("Please, enter valid amounts!")
  })
  it("should return an error message if called with price < 1", () => {
    expect(changeCalculator(5, -2)).toBe("Please, enter valid amounts!")
  })
  it("should return an error message if called with price > payment", () => {
    expect(changeCalculator(5, 50)).toBe("Please, enter valid amounts!")
  })
})
