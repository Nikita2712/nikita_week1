// promise is a class in JS 


// let promise = new Promise((fulfilled,notfullfilled)=> {
//     let num1 = 10;
//     let num2 = 15;
//     let sum = num1 + num2;
//     if(sum>24) {
//         fulfilled(sum);
//     } else {
//         notfullfilled(new Error("Promise not fullfilled"));
//     }
// });
// promise.then(()=>{
//     console.log("Promise was fulfiled")
// }).catch(()=>
// {
//     console.log("promise was not fulfilled")
// });

// function addTwono(n1,n2){
//     let sum=0;
//     setTimeout(()=>{
//         console.log(n1+n2);
//         sum = n1 + n2;
//     },5000);
//     return sum;
// }
// console.log(addTwono(4,2))



function add2(n1,n2){
    return new Promise((fulfilled,notfulfilled)=>{
        setTimeout(()=>{
            console.log("inside settime out")
            fulfilled(n1+n2);
        },5000);
        });

}

add2(2,5).then(()=>{
    console.log("promise was fulfilled")
}).catch(()=>{
    console.log("Promise was not fullfilled")
})