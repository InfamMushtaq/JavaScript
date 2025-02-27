let boxes = document.querySelectorAll(".box");
let key=true;
let winnerName = document.querySelector(".head");
let box0 = document.querySelector("#box0");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let moves=0;
let xScore = document.querySelector("#xScore");
let count1=0;
let oScore = document.querySelector("#oScore");
let count2=0;
let ogColor=box1.style.backgroundColor;
let ogColor2=winnerName.style.backgroundColor;
boxes.forEach((boxes) => 
    boxes.addEventListener("click",()=>{
    if(key){
        boxes.style.backgroundColor="#00d8d8"
        boxes.classList.add("active");
        boxes.innerText="X";
        key=false;
        boxes.style.pointerEvents="none";

    }
    else{
        boxes.innerText="0";
        key=true;
        boxes.style.backgroundColor="#d30303"
        boxes.classList.add("active");
        boxes.style.pointerEvents="none";
    }
    moves++;
    let winner=key?"0":"X";
    if(checkWinner(winner)){
        console.log("winner!" , winner);
         winnerName.innerText=`Player ${winner} wins!`
         disableBoxes();
         if(winner==="X"){
            count1++;
            winnerName.style.backgroundColor="#00d8d8"
             xScore.style.backgroundColor="#00d8d8"
            xScore.innerText=count1;
         }
         else if(winner==="0"){
            count2++;
            winnerName.style.backgroundColor="#d30303"
            oScore.style.backgroundColor="#d30303"
            oScore.innerText=count2;

         }
    }
    else if(moves===9){
        winnerName.innerText="Draw";
        console.log("Draw" );
        winnerName.style.backgroundColor="#3b44c4"
    }
     
}))
function checkWinner(player){
    return ((box0.innerText===box1.innerText && box1.innerText===box2.innerText && box0.innerText !="")||
    (box3.innerText===box4.innerText && box4.innerText===box5.innerText && box3.innerText!="")||
    (box6.innerText===box7.innerText && box7.innerText===box8.innerText && box6.innerText!="")||
    (box0.innerText===box3.innerText && box3.innerText===box6.innerText && box0.innerText!="")||
    (box1.innerText===box4.innerText && box4.innerText===box7.innerText && box1.innerText!="")||
    (box2.innerText===box5.innerText && box5.innerText===box8.innerText && box2.innerText!="")||
    (box0.innerText===box4.innerText && box4.innerText===box8.innerText && box0.innerText!="")||
    (box2.innerText===box4.innerText && box4.innerText===box6.innerText && box2.innerText!=""));
}
function disableBoxes(){
    boxes.forEach((boxes)=>{
boxes.style.pointerEvents="none";
    })
}
let btn1=document.querySelector(".btn1");
btn1.addEventListener("click",newGame)
function newGame(){
    boxes.forEach((boxes)=>{
        boxes.innerText=""
        boxes.classList.remove("active");
        boxes.style.pointerEvents="auto";
        boxes.style.backgroundColor=ogColor;
    })
winnerName.innerText="Tic-Tac-Toe";
winnerName.style.backgroundColor=ogColor2;
moves=0;
key=true;
xScore.style.backgroundColor= ogColor;
oScore.style.backgroundColor= ogColor;
}


let btn2=document.querySelector(".btn2");
btn2.addEventListener("click",resetGame)
function resetGame(){
    boxes.forEach((boxes)=>{
        boxes.innerText=""
        boxes.classList.remove("active");
        boxes.style.pointerEvents="auto";
        boxes.style.backgroundColor=ogColor;
    })
winnerName.innerText="Tic-Tac-Toe";
winnerName.style.backgroundColor=ogColor2;
moves=0;
key=true;
xScore.innerText=0;
oScore.innerText=0;
count1=0;
count2=0;
xScore.style.backgroundColor= ogColor;
oScore.style.backgroundColor= ogColor;
}