// promises
// function as(){
//     return new Promise((resolve, reject)=>{
        // let a = Math.random();
        // if(a<0.5)
        // {
        //     console.log(a);
        //     reject(new "random")
        // }
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("Success")
//         }, 3000)
//     })
// }

// function as2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 3");
//             resolve("Success")
//         }, 3000)
//     })
// }
// console.log("Facting data 1.......")
// let p1 = as()
// p1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log("Error" + err);
// })
// console.log("Facting data 2.......")
// let p2 = as2()
// p2.then((res)=>{
//     console.log(res)
// })

// .than catch
// function as(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("Success")
//         }, 3000)
//     })
// }

// function as2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 3");
//             resolve("Success")
//         }, 3000)
//     })
// }
// console.log("Facting data 1.......")
// as().then((res)=>{
//     console.log(res)
//     console.log("Facting data 2.......")
//     as2().then((res)=>{
//     console.log(res)
// })
// })

// promise chaining
// function as(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("Success")
//         }, 3000)
//     })
// }
// function as2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data 3");
//             resolve("Success")
//         }, 3000)
//     })
// }

// console.log("Facting data 1.......")
// as().then((res)=>{
//     console.log("Facting data 2.......")
//     return as2()
// }).then((res)=>{
//     console.log(res)
// })

// console.log("Facting data 1.......")
// as().then((res)=>{
//     console.log("Facting data 2.......")
//     return as2()
// }).then((res)=>{
//     console.log("Facting data 1.......")
//     return as();
// }).then((res)=>{
//     console.log(res);
// })


// practice Question 
// function getData(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Data: " + data)
//             resolve("Data find");
//         }, 3000);
//     })
// }

// console.log("Facting data 1.......")
// getData(2).then((res)=>{
//     console.log("Facting data 2.......")
//     return getData(67)
// }).then((res)=>{
//     console.log("Facting data 3.......")
//     return getData(435)
// }).then((res)=>{
//     console.log("Facting data 4.......")
//     return getData(435)
// }).then((res)=>{
//     console.log(res)
// })



function getData(data){
    return new Promise((resolve, reject)=>{
        let a = Math.random();
        if(a<0.5)
        {
            console.log(a);
            reject(new "random")
        }
        setTimeout(() => {
            console.log("Data: " + data)
            resolve("Data find");
        }, 3000);
    })
}

console.log("Facting data 1.......")
getData(2).then((res)=>{
    console.log("Facting data 2.......")
    return getData(67)
}).catch((err)=>{
    console.log(err)
}).then((res)=>{
    console.log("Facting data 3.......")
    return getData(435)
}).catch((err)=>{
    console.log(err)
}).then((res)=>{
    console.log("Facting data 4.......")
    return getData(435)
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})