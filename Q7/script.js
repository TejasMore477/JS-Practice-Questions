let prog = document.querySelector(".progress");
let h5 = document.querySelector("h5");
let count = 0;
let timer = setInterval(()=>{
    if(count === 100){
        h5.style.opacity = 1;
        clearInterval(timer);
    }
    else{
        count++;
        prog.style.width = count + '%';

    }
},100)