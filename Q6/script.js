let hedr = document.querySelector("header");
let main = document.querySelector("main");

hedr.addEventListener("click",(event)=>{
    if(event.target.id === "tab1"){
        main.style.backgroundColor = "gray"
    }
    else if(event.target.id === "tab1")
        main.style.backgroundColor = "pink"
    
    else if(event.target.id === "tab2")
        main.style.backgroundColor = "white"
    
    else if(event.target.id === "tab3")
        main.style.backgroundColor = "green"
    
    else if(event.target.id === "tab4")
        main.style.backgroundColor = "blue"
    
    else if(event.target.id === "tab5")
        main.style.backgroundColor = "red"
    
})