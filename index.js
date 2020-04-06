function capitalize(string) {
  const firstLetter = string.substring(0, 1).toUpperCase()
  const remainingLetters = string.substring(1, string.length)
  return firstLetter.concat(remainingLetters)
}

function reverseCapitalize(string) {
  const firstLetter = string.substring(0, 1).toLowerCase()
  const remainingLetters = string.substring(1, string.length)
  return firstLetter.concat(remainingLetters.toUpperCase())
}

function allCaps(string) {
  return string.toUpperCase()
}

function allLower(string) {
  let ret = ""
  const stringSplit = string.split("")
  for (let index = 0; index < string.length; index += 1) {
    letter = stringSplit[index].toLowerCase()
    ret = ret + letter
  }
  return ret
}

function capitalizeWords(string) {
  const wordArray = string.split(" ")
  let retArray = wordArray.map(word => {
    return capitalize(word)
  })
  return retArray.join(" ")
}

function removeExtraSpaces(string) {
  const trimmedString = string.trim()
  const words = trimmedString.split(" ")
  let retArray = words.filter(word => word !== "")
  return retArray.join(" ")
}

function kabobCase(string) {
  let lowerString = allLower(string)
  lowerString = removeExtraSpaces(lowerString)
  const retArray = lowerString.split(" ")
  return retArray.join("-")
}

function snakeCase(string) {
  let lowerString = allLower(string)
  lowerString = removeExtraSpaces(lowerString)
  const retArray = lowerString.split(" ")
  return retArray.join("_")
}

function camelCase(string) {
  let trimmedString = removeExtraSpaces(string)
  const splitArray = trimmedString.split(" ")
  const retArray = splitArray.map(word => {
    if (word == splitArray[0]) {
      return allLower(word)
    } else {
      return capitalize(word)
    }
  })
  return retArray.join("")
}

module.exports.capitalize = capitalize
module.exports.reverseCapitalize = reverseCapitalize
module.exports.allCaps = allCaps
module.exports.allLower = allLower
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kabobCase = kabobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase

// TODO: urlEncoding

console.log("capitalize(hello world):")
console.log(capitalize("hello world"))
console.log("reverseCapitalize(hello world):")
console.log(reverseCapitalize("hello world"))
console.log("allCaps(hello world):")
console.log(allCaps("hello world"))
console.log("allLower(HELLO WORLD):")
console.log(allLower("HELLO WORLD"))
console.log("capitalizeWords(hello world):")
console.log(capitalizeWords("hello world"))
console.log("removeExtraSpaces(  Hello  World  ):")
console.log(removeExtraSpaces("  Hello  World  "))
console.log("kabobCase(Hello  Word ):")
console.log(kabobCase("Hello  Word "))
console.log("snakeCase(Hello  Word ):")
console.log(snakeCase("Hello  Word "))
console.log("camelCase(Hello     World ):")
console.log(camelCase("Hello     World "))
