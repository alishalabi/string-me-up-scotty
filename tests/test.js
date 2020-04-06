// Tests congifgured using Jest Testing Library

const stringFuncs = require("../index")

test("canary test (should always pass)", () => {
  expect(1+1).toBe(2)
})

test("capitalize", () => {
  expect(stringFuncs.capitalize("hello world")).toBe("Hello world")
  expect(stringFuncs.capitalize("helLo wOrld")).toBe("HelLo wOrld")
})

test("reverseCapitalize", () => {
  expect(stringFuncs.reverseCapitalize("hello world")).toBe("hELLO WORLD")
  expect(stringFuncs.reverseCapitalize("helLo wOrld")).toBe("hELLO WORLD")
})

test("allCaps", () => {
  expect(stringFuncs.allCaps("hello world")).toBe("HELLO WORLD")
  expect(stringFuncs.allCaps("hELLO WoRlD")).toBe("HELLO WORLD")

})

test("allLower", () => {
  expect(stringFuncs.allLower("HELLO WORLD")).toBe("hello world")
  expect(stringFuncs.allLower("HEllO wOrLd")).toBe("hello world")
})

test("capitalizeWords", () => {
  expect(stringFuncs.capitalizeWords("hello world")).toBe("Hello World")
  expect(stringFuncs.capitalizeWords("hElLo wOrLd")).toBe("HElLo WOrLd")
})

test("removeExtraSpaces", () => {
  expect(stringFuncs.removeExtraSpaces(" Hello  World ")).toBe("Hello World")
  expect(stringFuncs.removeExtraSpaces("Hello      World")).toBe("Hello World")
})

test("kabobCase", () => {
  expect(stringFuncs.kabobCase("Hello World")).toBe("hello-world")
  expect(stringFuncs.kabobCase("  Hello  World  ")).toBe("hello-world")
})

test("snakeCase", () => {
  expect(stringFuncs.snakeCase("Hello World")).toBe("hello_world")
  expect(stringFuncs.snakeCase("  Hello  World  ")).toBe("hello_world")
})

test("camelCase", () => {
  expect(stringFuncs.camelCase("Hello World")).toBe("helloWorld")
  expect(stringFuncs.camelCase("  Hello  World  ")).toBe("helloWorld")
})
