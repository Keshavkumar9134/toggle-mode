const btn = document.querySelector("#mode");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");

let mode = "light";

btn.addEventListener("click",()=>{
    if(mode ==="light"){
        mode="dark";
        // body.style.backgroundColor="black";
        // body.style.color="white";
        body.classList.add("dark");
        body.classList.remove("white");
        h2.innerText="Dark Mode On";
    
    }
    else{
        mode="light";
        // body.style.backgroundColor="white";
        // body.style.color = "black";
        body.classList.add("white");
        body.classList.remove("dark");
        h2.innerText="Light Mode On";
    }
    console.log(mode);
    
})

