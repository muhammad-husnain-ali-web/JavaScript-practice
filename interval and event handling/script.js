let btn = document.querySelector(".thm");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let childcontainer = document.querySelector(".childcontainer");
let child = document.querySelector(".child");

let th = "white";
btn.addEventListener("click", ()=>{
    if(th == "white")
    {
        body.classList.add("black")
        body.classList.remove("white")
        th = "black"
    }
    else
    {
        body.classList.add("white")
        body.classList.remove("black")
        th = "white"
    }
})
// event propergation
child.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log(e)
    alert("Child is clicked");
})
childcontainer.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("childcontainer is clicked");
})
container.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("container is clicked");
})
body.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})

// setinterval and settimeout

let boxes = document.querySelector(".box");
function randomcolor(){
    let rad1 = Math.floor((Math.random()*256)+1);
    let rad2 = Math.floor((Math.random()*256)+1);
    let rad3 = Math.floor((Math.random()*256)+1);
    return `rgb(${rad1}, ${rad2}, ${rad3})`
}

let a = setInterval(()=>{
    boxes.style.backgroundColor = randomcolor();
}, 100)
boxes.addEventListener("click", (e)=>{
    clearInterval(a)
})

// let a = setTimeout(()=>{
//     boxes.style.backgroundColor = randomcolor();
// }, 5000)
// boxes.addEventListener("click", (e)=>{
//     clearInterval(a)
// })
