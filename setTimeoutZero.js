console.log("hello number");

setTimeout(()=>{//its also executes after callstack is empty,but ur seeing time is 0 second its not take long time , but we will see this is async code its standaerd follow
    console.log("run this immeditly")
},0);

setTimeout(()=>{
    console.log("run this after upper setTimeout function")
},1000);
let a = 7;
let b = 10;
function multiplication(a,b){
    let result = a*b;
    return result;
}

let c = multiplication(a,b);

console.log("the answer is : ", c);