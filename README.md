![npm](https://img.shields.io/npm/v/string-me-up-scotty)

The purpose of this package is to create a series of string methods to assist with string manipulation.

## Usage
Available methods:
- capitalize() - makes the first character of a given string uppercase
- reverseCapitalize() - makes the first character of a given string lowercase, makes all other letters uppercase
- allCaps() - makes all characters uppercase
- allLower() - makes all characters lowercase
- capitalizeWords() - makes the first character of each word uppercase
- removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
- kabobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
- snakeCase() - Removes extra space and replaces spaces with an underscore, and makes all characters lowercase
- camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces
