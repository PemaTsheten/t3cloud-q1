var rl = require('readline-sync'); 
function getNumberFromUser(){
    var reply = rl.question ("GiveMeaNumber")
    var numberOrNot = Number(reply)
    if(isNaN(numberOrNot)){
        console.log("you messed up")
    }else{
        return numberOrNot

    }
    }
var a = getNumberFromUser()
var b = getNumberFromUser()
console.log(a)
console.log(b)

