// var rl = ("require-sync")
   
//   function getFromYear(year) {
// 	const century = Math.ceil(year / 100)
// 	var suffix = "th"
// 	if (century % 100 >= 10 && century % 100 <= 20) {
// 		suffix = "th"
// 	} else if (century % 10 === 1) {
// 		suffix = "st"
// 	} else if (century % 10 === 2) {
// 		suffix = "nd"
// 	} else if (century % 10 === 3) {
// 		suffix = "rd"
// 	}

// 	return century + suffix + " century"
// }

// console.log(getFromYear(1616)) 
 
function getNumberOfVowels(something) {
    var counter=0
    for (var i=0; i<something.length; i++){
        if ("aeiou".includes(something[i])){
            counter+=1
        }
    }
    return counter

}
console.log(getNumberOfVowels("hello my name is pema"))


   
    
    



