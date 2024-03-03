let textarea = document.querySelector("textarea");
let span = document.querySelector("span");

textarea.addEventListener("input",()=>{
   span.textContent = textarea.value.length
});