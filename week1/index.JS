//In javascript , we can declare a variable in 3 ways
//1. var
// 2.let
// 3.const

// var myName = "John";   
//can be redeclare , reinitialize 
// // console.log(myName);
// const arr1 = [];//cant manipulate 
// arr1.push("Nikita")
// // console.log(arr1)
// let a = 5;
// a=6;//only reinitialize

// {
//     var num = 5;
// }
//  console.log(num)




//string interpolation

// let fn ="Nikita"
// let ln ="dhankhar"
// console.log(fn+ln)
// let fullname= fn+" "+ln;
// console.log(fullname)
// console.log(`${fn}          ${ln}`)//string interpollation


//------------------------functions--------------------------
                                // normal function


// function add1(a,b){
//     console.log(a+b)
// }
// add1(1,2)
// arrow function
// let c = (a,b)=>{ 
//     return (a+b)
// }
// let c = (a,b)=>(a+b);  implicit return
// console.log(c(1,8))

// with default values 

// let c = (a , b = 0)=>{ 
//         return (a+b)
//     }

//     console.log(c(8))




                    // spread operator(...) deep learning

// let array = [5,10,15]
// console.log(...array)
// let arr1 = [...array]
// array.push(6)
// console.log(arr1,array)


// rest  operator(...) 
// let maxofnum=(...num)=>{
//     console.log(num)
// };
// maxofnum(1,2,3,4,5);

//object

let obj={
    "name":"john",
    age:24,
    
    add:{
        city:"malda",
        town:"gour"

    }
};
// let obj1 ={...obj} // shallow clonning
// let obj2 = JSON.parse(JSON.stringify(obj)); deep clonning
// console.log(obj.add.town);






