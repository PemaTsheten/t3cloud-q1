const rl = require('readline-sync'); 
const fs = require('node:fs');

const pwd = Number(rl.question("set a 4 diget password")) 
if (isNaN(pwd) && pwd.length !==4){
console.log("Please enter a vaild 4 digit password")
}else{
    fs.writeFileSync("pwd.txt",""+pwd)
}
     