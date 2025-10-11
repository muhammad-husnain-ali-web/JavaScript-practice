arr = [1, 2, 5, 6,  3, 4]
// let narr = arr.map((e)=>{
//     return e;
// })
// console.log(arr);
// console.log(narr);
let narr = arr.map((e)=>{
    return e*e;
})
console.log(arr);
console.log(narr);

let n = arr.filter((e)=>{
    return e%2 == 0;
})
console.log(n);

let fact = arr.reduce((prev, curr)=>{
    return prev*curr;
})
console.log(fact)
let max = arr.reduce((prev, curr)=>{
    return prev >curr ? prev : curr;
})
console.log(max)