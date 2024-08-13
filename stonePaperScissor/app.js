let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg")

const choices=document.querySelectorAll(".choice");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");

const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
   const randomidx= Math.floor(Math.random()*3);
    return option[randomidx];
}

const drawgame =()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="gray";
}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`You lose. Computer's ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
}


const playgame=(userchoice)=>{

const compchoice=gencompchoice();


if(userchoice === compchoice){
    drawgame();
} else{
    let userwin=true;
    if(userchoice ==="rock"){
        userwin = compchoice === "paper"? false:true;

    } else if(userchoice === "paper"){
        userwin = compchoice === "scissor" ? false:true; 
    }
    else{
        userwin = compchoice === "rock" ? false:true; 
    }
    showWinner(userwin,userchoice,compchoice);
}
}

choices.forEach((choice)=>{
     choice.addEventListener("click" , () => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
       // console.log("choice was clicked", userchoice);

     });
});