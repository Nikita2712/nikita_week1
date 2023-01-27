                         //.map() function
// let newarr=[];
// for(let i = 0;i<arr1.length;i++){
//     newarr[i] = arr1[i] * arr1[i];
// }
// console.log(newarr);





// let arr1 = [1,2,3,4,5,6];
// // in js a function is also a java script object
// let newarr2 = arr1.map((ele)=>{
//     return ele*ele*ele;
// })
// console.log(newarr2);


// for each
// let arr1 = [1,2,3,4,5,6];
// arr1.forEach((element) => {
//     console.log(element)
// });



// .filter()

// let arr1 = [1,2,3,4,5,6];
// let arr2 = arr1.filter((ele)=>{
//     return ele % 2 == 0
// })
// console.log(arr2);

// find()

// let arr1 = [1,2,3,4,5,6];
// let array=arr1.find((ele)=>{
//     return ele % 3 == 0
// });
// console.log(array)
//but only will find upto fst match


//sort()

// let arr1=[2,1,9,8,7,3,4,6,5]
// let Array=arr1.sort()
// console.log(Array)

// let arr1=[2,1,9,8,7,3,4,6,5]
// let Array=arr1.sort
// ((e1,e2)=>{
//     e1 = Number(e1);
//     e2 = Number(e2);   -->comparitabe
//     return e1-e2
// })




                               // object destructuring


// let myobj = {
//     name:"Alex",
//     age:4,
//     no:{
//         ph:8367358707,
//         reg:12001684
//     }
// };
// let{name:myName , age} = myobj;
// console.log(myName,age)



                                         // object matching

// let obj1={name:"arpan"}
// let obj2={name:"arpan"}

// function equal(obj1,obj2){
//     if(obj1===obj2){
//         return true;
//     }
//     if(Object.keys(obj1).length != Object.keys(obj2).length){
//         return false;
//     }
//     for(let key of Object.keys(obj1)){
//         if(typeof obj2[key === "undefined"]){
//             return false
//         }
//         if(obj2[key]!==obj1[key]){
//                 return false;
//         }

//     }
//     return true;
// }
// console.log(equal(obj1,obj2))


// Map and set 

// let map = new Map();
// map.set(1,"nikita");
// map.set(2,"mee")
// console.log();
// map.entries()
// map.has()
// map.keys()
// map.values()


// let set  = new Set();
// set.add(1)
// set.add(-1)
// set.size()
// set.has()
// set.delete()






//class
class Animal{
    noOflegs;
    color;

    constructor(noOflegs,color){
        this.noOflegs=noOflegs;
        this.color=color;
    }
    showAnimal() {
        console.log(`animal color     ${this.color}`)
    }
}
let animal = new Animal(4,"red")
console.log(animal.showAnimal())