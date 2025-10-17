// async-await
async function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data: " + data)
            resolve("Data find");
        }, 3000);
    })
}

// async function allgetData(){
//     console.log("getting data 1........")
//     await getData(323)
//     console.log("getting data 2........")
//     await getData(33)
//     console.log("getting data 3........")
//     await getData(3433)
// }
// allgetData();


// iife function
// (async function (){
//     console.log("getting data 1........")
//     await getData(323)
//     console.log("getting data 2........")
//     await getData(33)
//     console.log("getting data 3........")
//     await getData(3433)
// })();

(async ()=>{
    console.log("getting data 1........")
    await getData(323)
    console.log("getting data 2........")
    await getData(33)
    console.log("getting data 3........")
    await getData(3433)
})();
