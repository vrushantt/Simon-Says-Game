let gameseq = [];
let userseq = [];
let btns = ["red","yellow","green","blue"];

let started = false;
let level= 0;
let h2= document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;
        levelup();
    }
});                  

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },1000)};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300)};

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameflash(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
}

function checkAns(idx){ 
    if(gameseq[idx] === userseq[idx]){
        if(gameseq.length == userseq.length){
          setTimeout(levelup,1000);
        }
    }else{
    h2.innerHTML = `Game Over!! Your Score was <b>${level}</b><br> Press Any Key To Start.`
    console.log("Game Over");
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";

    },1000);
    reset();
}};

function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}


let allBtn = document.querySelectorAll(".btn");
for(let i=0;i<allBtn.length;i++){
    allBtn[i].addEventListener("click",btnPress)
};

function reset(){
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}