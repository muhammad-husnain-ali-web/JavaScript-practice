let dots = document.querySelectorAll("span");
let i = document.querySelector(".ibox");
let r = document.querySelector(".rbox");
let p = document.querySelector(".pbox");
let s = document.querySelector(".sbox");
let c = document.querySelector(".cbox");

let items = ["Initializing Hacking", "Reading your Files",
        "Password files Detected", "Sending all Password and personal files to server", "Cleaning up"
]

let rad1 = undefined;
        function randomcolor(){
            rad1 = Math.floor((Math.random()*7)+1);
            return rad1;
        }
    
        async function getData(data, val){
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    console.log(val);
                    resolve("Data find");
                }, rad1*1000);
            })
        }

        async function run() {
            for(val of items)
                {
                    await getData("i" , val);
                }
        }
        run();