function getNumberFromUser() {
    var reply = rl.question("give me a number: ")
    var numberOrNot = number(reply)
    if(isNaN(numberOrNot)) {
        throw "Input must be a vaild number."
    }else{
        return numberOrNot
    }
}
    try {
        var a = getNumberFromUser()
        console.log(a)
        var b = getNumberFromUser()
        console.log(b)
    }catch (err) {
        console.log(err)
    }
    
    
    
