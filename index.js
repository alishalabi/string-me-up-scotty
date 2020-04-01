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
  // TODO: remove extra spaces
  const retArray = lowerString.split(" ")
  return retArray.join("_")
}

function camelCase(string) {
  const splitArray = string.split(" ")
  // TODO: remove extra spaces
  let retArray = splitArray.map(word => {
    if (word == splitArray[0]) {
      return allLower(word)
    } else {
      return capitalize(word)
    }
  })
  return retArray.join("")
}

// TODO: urlEncoding

console.log("capitalize():")
console.log(capitalize("hello world"))
console.log("reverseCapitalize():")
console.log(reverseCapitalize("hello world"))
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
console.log(snakeCase("Hello World"))
console.log("camelCase():")
console.log(camelCase("Hello World"))
