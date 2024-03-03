//method 1

/*

let h3 = document.querySelector("h3");
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if(inp1.value === "" || inp2.value === ""){
        h3.textContent = "ERROR,SOME INPUT FIELDS ARE EMPTY!";
        h3.style.color = "red";
    }
    else{
        h3.textContent = "";
    }
})

*/

//method 2

 let h3 = document.querySelector("h3");
 let inp = document.querySelectorAll("#inp");
 let form = document.querySelector("form");

console.log(inp.length)

 form.addEventListener("submit", (event)=>{
    event.preventDefault();

    for(let i=0; i<inp.length; i++){
       if(inp[i].value.trim() === ""){
            h3.textContent = "error, some fields are missing";
            h3.style.color = "red";
            break;   
       }
       else{
        h3.textContent = "";
       }
    }
 })