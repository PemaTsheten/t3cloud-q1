var result = "Tom is at his computer.".split("")
const restrictedWords = ["banana", "orange", "apple", "peach", "grape"]

function checkUsername(username) {
	var isUserNameOk = true

	for (var i = 0; i < restrictedWords.length; i += 1) {
		var includesRestrictedWord = username.includes(restrictedWords[i])
		if (includesRestrictedWord) {
			isUserNameOk = false
		}
	}

	return isUserNameOk
}

console.log(checkUsername("mike45")) // true
console.log(checkUsername("apple45")) // false

var result = "john james jones".toLocaleUpperCase()

console.log(result)


Tom
  11:44 AM
var splitIntoWords = result.split(" ")

for (var i = 0; i < splitIntoWords.length; i += 1) {
	var currentWord = splitIntoWords[i]
	var lettersOfCurrentWord = currentWord.split("")
	var capitalizedLetter = lettersOfCurrentWord[0].toLocaleUpperCase()
	lettersOfCurrentWord[0] = capitalizedLetter
	var capitalizedWord = lettersOfCurrentWord.join("")
	splitIntoWords[i] = capitalizedWord
}
const capitalizedName = splitIntoWords.join(" ")
console.log(capitalizedName)

var sentance="hello how are you  edfrggyy today"
var longestwords = ""
var words = sentance.split(" ")

for ( var i=0; i<words.length; i++) {
    if (longestwords.length<words[i].length){
        longestwords=words[i]
    }

}
console.log(longestwords)
var sentance="hello are how you today"
var words = sentance.split(" ")
var shortestwords = words[0]
// ["hello", "how", "are", "you", "today"]
for (var i = 0; i < words.length; i++) {
    if(words[i].length < shortestwords.length) {
        shortestwords = words[i]
    }
    

}
console.log(shortestwords)


