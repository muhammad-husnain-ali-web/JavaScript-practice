let arr = [1,2,3,4,5]
let ar = arr.reduce((pre, cur)=>
    {
        return pre*cur;
    })
    console.log(`Product of arry: ${ar}`);
    console.log("Product of arry:",ar);
    let narr = arr.forEach((val)=>{
        console.log(val);
    })
    // console.log("new array: " + narr)
// let n = prompt(int("Enter a number for factorial: " ));
// fact = 0;
// for (let i = 1; i <= n; i++) {
//     fact *=i;
// }
// console.log("Factorial of number:" + fact);
let obj = {
    0: "crazy",
    1: "amazing",
    2: "fire",
}
let obj1 = {
    0: "engine",
    1: "food",
    2: "garment",
}
let obj2 = {
    0: "bros",
    1: "limited",
    2: "hub",
}
let rad1 = Math.floor(Math.random()*2);
let rad2 = Math.floor(Math.random()*2);
let rad3 = Math.floor(Math.random()*2);

console.log(`${obj[rad1]} ${obj1[rad2]} ${obj2[rad3]}`);