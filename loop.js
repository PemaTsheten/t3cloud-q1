// const rl = require('readline-sync');
//     for (var i=0; i<10; i++) {
//         var reply=rl.question("give me a number!" )
//     }
// var i = 0
// while (i < 10) {
//     console.log(i)
//     i += 1
// }

// var rl = require('readline-sync'); 18.1k (gzipped: 6.9k)
// var shouldLoopRun = true
// while (shouldLoopRun) {
//     var reply = rl.question("should i ask another queston?")
//     if (reply !== "yes") {
//         shouldLoopRun = false;
//     }
// }
const rl = require('readline-sync'); 
     const pwd = Number(rl.question("set a 4 diget password")) 
     if (isNaN(pwd)) {
        console.log("please enter your password")
     }else{ if(pwd.length !==4) {
        console.log("please enter valid password")
     }

     }
     
