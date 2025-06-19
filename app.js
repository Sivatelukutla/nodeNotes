// // const {sum, add, variable} = require("./text")
// // const {name} = require("./mainFolder/cal")
// // console.log("hey siva");
// // console.log(name);
// // console.log(sum);
// // console.log(variable)
// // console.log(add(3,5));

// // (function (){
// //     setTimeout(()=>{
// //         console.log(a);
// //         console.log(b);
// //     },3000)
// //     var a = 100;
// //     let b = 200;
// // })();

// //---------------core modules crypto--------------------------
// const crypto = require("crypto");

// //pbkdf2Sync => password base key dertive function synchronous
// //it is a sync
// //never every dont use sync code 
// crypto.pbkdf2Sync("password", "salt", 5000, 50, "sha512")
// console.log("this is sync")




// //pbkdf2 => password base jey dervtive function 
// //it is a async code
// crypto.pbkdf2("password", "salt", 5000, 50, "sha512", (err, key) => {
//     console.log("hey siva : ", key.toString("hex"))
// })

// console.log("next nuvve");

// console.log("Chaitanya");

// setTimeout(() => console.log("!"), 5000); // macrotask

// let myArr = [];

// let fethData = async () => {
//     let theData = await fetch('https://fakestoreapi.com/users/1');
//     let res = await theData.json();
//     myArr = res;
//     console.log(myArr); // will print user object
// };

// fethData();

// console.log("Hello World!");

// const a = 100;

// setImmediate(()=>{
//     console.log("siva")
// })

// process.nextTick(()=>{
//     console.log("process.nextTick()")
// })

// Promise.resolve(console.log("promise object"))

// setTimeout(()=>{
//     console.log("setTimeout")
// },1000)

// function add(){
//     console.log(`function is ${a}`)
// }

// add()

// console.log("console.log of this code")

let a = 100;

function add(){
    console.log("a", a)
}

add()

console.log("last line")