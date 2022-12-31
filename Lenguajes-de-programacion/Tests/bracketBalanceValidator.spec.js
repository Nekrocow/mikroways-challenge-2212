const { bracketBalanceValidator } = require("../bracketBalanceValidator")

describe("bracketBalanceValidator", () => {
  it("should return true if called with ''", () => {
    expect(bracketBalanceValidator("")).toBe(true)
  })
  it("should return true if called with []", () => {
    expect(bracketBalanceValidator("[]")).toBe(true)
  })
  it("should return true if called with [][]", () => {
    expect(bracketBalanceValidator("[][]")).toBe(true)
  })
  it("should return true if called with [[]]", () => {
    expect(bracketBalanceValidator("[[]]")).toBe(true)
  })
  it("should return true if called with [[[][]]]", () => {
    expect(bracketBalanceValidator("[[[][]]]")).toBe(true)
  })
  it("should return false if called with ][", () => {
    expect(bracketBalanceValidator("][")).toBe(false)
  })
  it("should return false if called with ][][", () => {
    expect(bracketBalanceValidator("][][")).toBe(false)
  })
  it("should return false if called with [][]][", () => {
    expect(bracketBalanceValidator("[][]][")).toBe(false)
  })
})
