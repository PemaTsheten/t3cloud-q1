var rl = require('readline-sync'); 

var story = ""

story = story + "Once upon a time, there lived a person named "

var userName = rl.question("What's your name? ")
story = story + userName + ". "
story = story + "They came from the beautiful village of "

var villageName = rl.question("What's your village name? ")
story = story + villageName + ". "
story = story + "They became the world's greatest "

var profession = rl.question("What's your profession? ")
story = story + profession + ". "
story = story + "They were eating"

var food = rl.question("what do you eat? ")
story = story + food + ". " 
story = story + "They were sleeping in"

var bedtime =rl.question("where do you  sleep? ")
story = story + bedtime + ". "
console.log (story)

                