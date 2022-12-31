const { romanizeNumber } = require("../romanizeNumber")

describe("romanizeNumber", () => {
  it("should return 'I' if called with (1, true)", () => {
    expect(romanizeNumber(1, true)).toBe("I")
  })
  it("should return 'd' if called with (500, false)", () => {
    expect(romanizeNumber(500, false)).toBe("d")
  })
  it("should return 'cclxxxiv' if called with (284, false)", () => {
    expect(romanizeNumber(284, false)).toBe("cclxxxiv")
  })
  it("should return 'CCLXXXIV' if called with (284, true)", () => {
    expect(romanizeNumber(284, true)).toBe("CCLXXXIV")
  })
  it("should return 'mccxxxiv' if called with (1234, false)", () => {
    expect(romanizeNumber(1234, false)).toBe("mccxxxiv")
  })
  it("should return 'I̅X̅CMXCIX if called with (9999)", () => {
    expect(romanizeNumber(9999)).toBe("I̅X̅CMXCIX")
  })
  it("should return an error message if called with a number < 1", () => {
    expect(romanizeNumber(-1)).toBe("Sorry, can't convert numbers smaller than 1!")
  })
  it("should return an error message if called with a number > 9999", () => {
    expect(romanizeNumber(10000)).toBe("Sorry, can't convert numbers bigger than 9999!")
  })
})
