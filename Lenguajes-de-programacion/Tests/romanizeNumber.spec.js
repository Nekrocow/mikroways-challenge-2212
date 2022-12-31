const { romanizeNumber } = require("../romanizeNumber")

describe("romanizeNumber", () => {
  it("should return 'I' if called with (1, true)", () => {
    expect(romanizeNumber()).toBe("I")
  })
  it("should return  if called with []", () => {
    expect(romanizeNumber()).toBe()
  })
  it("should return  if called with [][]", () => {
    expect(romanizeNumber()).toBe()
  })
  it("should return  if called with [[]]", () => {
    expect(romanizeNumber()).toBe()
  })
  it("should return  if called with [[[][]]]", () => {
    expect(romanizeNumber()).toBe()
  })
  it("should return false if called with ][", () => {
    expect(romanizeNumber()).toBe(false)
  })
  it("should return false if called with ][][", () => {
    expect(romanizeNumber()).toBe(false)
  })
  it("should return false if called with [][]][", () => {
    expect(romanizeNumber()).toBe(false)
  })
})
