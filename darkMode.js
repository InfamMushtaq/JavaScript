let body=document.querySelector("body");
let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    if(btn.getAttribute("class")=="light"){
        btn.classList.add("dark");
        body.classList.add("bdark") 
        btn.classList. remove("light");
        btn.innerText="Light Mode";
        body.classList. remove("blight");
    }
    else{
        btn.classList.add("light");
        body.classList.add("blight") 
        btn.classList. remove("dark");
        btn.innerText="Dark Mode";
        body.classList.remove("bdark");
    }
})