//for button
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
//for game

const botChoice=()=>{
let str=["stone","paper","scissor"];
let bot=Math.floor(Math.random(str)*3);
return str[bot];
}


let userScore=0;
let botScore=0;

let message=document.querySelector(".tittle");
let orignalText=message.innerText;

let bgcolor=document.querySelector(".outer");
let orignalColor=bgcolor.style.backgroundColor;

let computerScore=document.querySelector("#computerscore");
let bgcolor2= computerScore.style.backgroundColor;

let yourScore=document.querySelector("#userscore");
let bgcolor3= yourScore.style.backgroundColor;

let choice=document.querySelectorAll(".choice");
 choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute( "id");
    let bot=botChoice();
    console.log(userChoice,bot);

    //if game draws
    if(bot==userChoice){
        message.innerText="Draw";
        bgcolor.style.backgroundColor="yellow";
        setTimeout(()=>{
message.innerText=orignalText
bgcolor.style.backgroundColor=orignalColor;
        },2000)
    }
else{

    //if bot won
    if(bot=="stone"&&userChoice=="scissor"||bot=="paper"&&userChoice=="stone"||bot=="scissor"&&userChoice=="paper"){
        botScore++;
        computerScore.innerText=botScore;
        message.innerText="Bot Wins!";
        bgcolor.style.backgroundColor="red";
         computerScore.style.backgroundColor="#51ff0d"
        setTimeout(()=>{
message.innerText=orignalText
bgcolor.style.backgroundColor=orignalColor;
computerScore.style.backgroundColor=bgcolor2;

        },2000)
    }

    //if user won
    else if(userChoice=="stone"&&bot=="scissor"||userChoice=="paper"&&bot=="stone"|| userChoice=="scissor"&&bot=="paper"){
        userScore++;
        yourScore.innerText=userScore;
        message.innerText="You Win!";
        bgcolor.style.backgroundColor="green";
        yourScore.style.backgroundColor="#51ff0d"
        setTimeout(()=>{
message.innerText=orignalText
bgcolor.style.backgroundColor=orignalColor;
 yourScore.style.backgroundColor=bgcolor2;
        },2000)
    }
}
})
});