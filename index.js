/*
The purpose of this package is to create a series of string methods
to assist with string manipulation.

Available methods:
capitalize() - makes the first character of a given string uppercase
allCaps() - makes all characters uppercase
capitalizeWords() - makes the first character of each word uppercase
removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it
  is replaced by a single space.
kabobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase
camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces
*/

function capitalize(string) {
  const firstLetter = string.substring(0, 1).toUpperCase()
  const remainingLetters = string.substring(1, string.length)
  return firstLetter.concat(remainingLetters)
}

function allCaps(string) {
  let ret = ""
  const stringSplit = string.split("")
  for (let index = 0; index < string.length; index++) {
    letter = stringSplit[index].toUpperCase()
    ret = ret + letter
  }
  return ret
}

function allLower(string) {
  let ret = ""
  const stringSplit = string.split("")
  for (let index = 0; index < string.length; index++) {
    letter = stringSplit[index].toLowerCase()
    // console.log(letter)
    ret = ret + letter
  }
  return ret
}

function capitalizeWords(string) {
  let retArray = []
  let ret = ""
  const wordArray = string.split(" ")
  wordArray.forEach(word => {
    ret = ret + capitalize(word)
    const firstLetter = word.substring(0, 1).toUpperCase()
    const remainingLetters = word.substring(1, word.length)
    const formattedWord = firstLetter.concat(remainingLetters)
    retArray.push(formattedWord)
  })
  ret = retArray.join(" ")
  return ret
}

function removeExtraSpaces(string) {
  // const whiteList
  const trimmedString = string.trim()
  const words = trimmedString.split(" ")
  // console.log(words)
  let retArray = words.map(word => {
    let trimmedWord = word.trim()
    if (trimmedWord != " ") {
      return trimmedWord
    }
  })
  return retArray.join(" ")
  // console.log(trimmedString)
}

function kabobCase(string) {
  let lowerString = allLower(string)
  // Todo: remove extra spaces
  const retArray = lowerString.split(" ")
  return retArray.join("-")
}

function snakeCase(string) {
  let lowerString = allLower(string)
  // Todo: remove extra spaces
  const retArray = lowerString.split(" ")
  return retArray.join("_")
}

console.log("capitalize():")
console.log(capitalize("hello world"))
console.log("allCaps():")
console.log(allCaps("hello world"))
console.log("allLower():")
console.log(allLower("HELLO WORLD"))
console.log("capitalizeWords():")
console.log(capitalizeWords("hello world"))
console.log("removeExtraSpaces():")
console.log(removeExtraSpaces("  Hello  World  "))
console.log("kabobCase():")
console.log(kabobCase("Hello Word"))
console.log("snakeCase():")
console.log(snakeCase("Hello Word"))
