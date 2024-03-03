//my solution
// let img1 = document.querySelector("#img1");
// let img2 = document.querySelector("#img2");
// let swip = document.querySelector("#swip");

// swip.addEventListener("click",()=>{
//     console.log("button is clicked")
//     img1.src = "https://imgs.search.brave.com/-afbGQLMisWUGlpyKoT3x2BTJAcmszX6zllYH_wypdE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bGVuc2JhbGwteWVs/bG93LWFuZC1vcmFu/Z2UtbGlnaHRzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA",
//     img2.src = "https://imgs.search.brave.com/1zx2-9EUFj2_6Kq6875QTpM24uB1Pa-KmQb5TOBCrYw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjY2NjI5L3Bob3Rv/L3Nob290aW5nLXN0/YXItbWFya2V0LXdp/ZXNiYWRlbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bXdp/VWQwWl9ic1Jxa3pC/S2htemxxT1lrM2lE/RTRRSzNsc0NUVEpE/NDJrVT0";
// });

//sirs solution 
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let swip = document.querySelector("#swip");

swip.addEventListener("click",()=>{
    console.log("button is clicked")

    let src1 = img1.src;
    let src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
    
});
