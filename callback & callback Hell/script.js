// callback
// function calculate(a,b, callback)
// {
//     callback(a,b);
// }

// calculate(1,3, (a,b)=>{
//     console.log(a+b)
// })

// function sum(a,b)
// {
//     console.log(a+b)
// }

// function calculate(a,b, callback)
// {
//     callback(a,b);
// }

// calculate(1,3, sum)

// callback hell
// function calculate(a,b, callback)
// {
//     setTimeout(() => {
//         console.log("Sum of "+a+ " & "+b+ ": " + a+b)
//         if(callback)
//         {
//             callback();
//         }
//     }, 2000);
// }
// console.log("sum 1....")
// calculate(2,4 , ()=>{

//     console.log("sum 2....")
//     calculate(6,4, ()=>{

//         console.log("sum 3....")
//         calculate(67,87 , ()=>{

//             console.log("sum 4....")
//             calculate(5,98 ,()=>{
//                 console.log("end....")
//             })

            
//         })
//     })
// })

let res=undefined;
function calculate(a,b, callback)
{
    setTimeout(() => {
        console.log("Sum of "+a+ " & "+b+ ": " + a+b)
        
        if(callback)
        {
            callback();
        }
        return (a+b);
    }, 2000);

}
console.log("sum 1....")
res= calculate(0,1 , ()=>{

    console.log("sum 2....")
    res = calculate(res,2, ()=>{

        console.log("sum 3....")
        res = calculate(res,3 , ()=>{

            console.log("sum 4....")
            res = calculate(res,4 ,()=>{
                console.log("Final Sum: " , res)
                console.log("end....")
            })

            
        })
    })
})


// function getdata(a, Nextdata)
// {
//     setTimeout(() => {
//         console.log("Data: " + a)
//         if(Nextdata)
//         {
//             Nextdata();
//         }
//     }, 2000);
// }
// console.log("Data 1....")
// getdata(2 , ()=>{

//     console.log("Data 2....")
//     getdata(6, ()=>{

//         console.log("Data 3....")
//         getdata(67, ()=>{

//             console.log("Data 4....")
//             getdata(5,()=>{
//                 console.log("end....")
//             })
//         })
//     })
// })
