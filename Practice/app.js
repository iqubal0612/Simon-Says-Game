let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
      if(started==false){
        console.log("Game is Started");
        started=true; 
      
         levelUp();
    }


});

function gameFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(() => {
        btn.classList.remove("flash");
    },300); 
}

function userFlash(btn){
    btn.classList.add("userflash"); 
    setTimeout(() => {
        btn.classList.remove("userflash");
    },300); 
}



 function levelUp(){
    userSeq=[]; 
    level++;
    h2.innerText=`Level ${level}`; 

    //random button choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor =  btns[randIdx]; 
    let randBtn = document.querySelector(`.${randColor}`);

    //  console.log(randIdx);
    //  console.log(randColor);
    //  console.log(randBtn);
    gameSeq.push(randColor);
     console.log(gameSeq);


    gameFlash(randBtn);
 }

function checkAns(idx){
    //console.log("curr level",level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was<b>${level}</b><br> press any Key to start`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="white";
       },200)
        reset();
    }
}

 function btnPress(){
   // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }

 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }
