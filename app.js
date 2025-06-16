// const {sum, add, variable} = require("./text")
// const {name} = require("./mainFolder/cal")
// console.log("hey siva");
// console.log(name);
// console.log(sum);
// console.log(variable)
// console.log(add(3,5));

// (function (){
//     setTimeout(()=>{
//         console.log(a);
//         console.log(b);
//     },3000)
//     var a = 100;
//     let b = 200;
// })();

//---------------core modules crypto--------------------------
const crypto = require("crypto");

//pbkdf2Sync => password base key dertive function synchronous
//it is a sync

crypto.pbkdf2Sync("password", "salt", 5000, 50, "sha512")
    console.log("this is a sync code", keySync.toString("hex"));




//pbkdf2 => password base jey dervtive function 
//it is a async code
crypto.pbkdf2("password", "salt", 5000, 50, "sha512", (err, key) => {
    console.log("hey siva : ", key.toString("hex"))
})

console.log("next nuvve");