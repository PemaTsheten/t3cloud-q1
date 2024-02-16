const numbers = [12, 44, 9.8473, 30, -12, 57382, 1, 0.3422]
 var highestNumber = numbers[0]
 var lowestNumber = numbers[0]
 var middleNumber = numbers[0]
 for ( var i=0; i<numbers.length; i++) {

    if (highestNumber<numbers[i]) {
         highestNumber = numbers[i]
     }
     if (lowestNumber >numbers[i]) {
        lowestNumber = numbers[i]
     }
     if (middleNumber = numbers[i]) {
        middleNumber = numbers[i]
     }
 }
        console.log(highestNumber)
       console.log(lowestNumber)
       console.log(middleNumber)
// const fruit = ["orange", "apple", "mango", "banana", "grapes","gova"]
// fruit.sort()
// console.log(fruit)

// const alphabet = ["i, e, o, l, t"]
// alphabet.sort()
// console.log(alphabet)



//  console.log(Math.max(...numbers))
//  console.log(Math.min(...numbers))

