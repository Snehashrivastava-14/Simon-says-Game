let gameseq=[];
let userseq=[];
let btns=["y","g","r","b"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
    console.log("game started");
    start=true;
    levelup();
    }
    
});
function gameflash(btn){
 btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
       setTimeout(function(){
           btn.classList.remove("userflash");
       }, 250);
   }

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranidx=Math.floor(Math.random()*3);
    let randclr=btns[ranidx];
    let ranbtn=document.querySelector(`.${randclr}`);
    // console.log(ranidx);
    // console.log(randclr);
    // console.log(ranbtn);
    gameseq.push(randclr);
    console.log(gameseq);
    gameflash(ranbtn);
}
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! your Score was <b>${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
     reset();
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    userclr=btn.getAttribute("id");
    userseq.push(userclr);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}
