let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let h1 = document.querySelector("h1");

let count;
let int;
start.addEventListener("click", ()=>{
    count = 0;
    int = setInterval(()=>{
        h1.textContent = count;
        count++;
    },1000)
})
stop.addEventListener("click", ()=>{
    clearInterval(int);
})