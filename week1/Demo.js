// let n = 10;

// function testFunction(a){
//     console.log(a);
// }

// function demoFunction(){
//     let b = n+20;
//     testFunction(b);
// }
// demoFunction();
function DemoFunction() {
    return [1,2];
}

let [abc,def] = DemoFunction();
console.log(`Abc: is ${abc} and def is ${def}`);