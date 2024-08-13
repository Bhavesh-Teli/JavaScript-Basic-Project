let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO=true; 
let count=0;
const winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";
            turnO=false;
            
        } else{
            box.innerText="X";
            turnO=true;
            
        }
        box.disabled=true;
        count++;
       let winner= checkWinner();
       if(count===9 && !winner){
        draw();
       }

    });
});
const draw=()=>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disable();
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
}
const checkWinner=()=>{
    for (let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=0 && pos2val!=0 && pos3val!=0){
            if(pos1val==pos2val && pos2val==pos3val){
                
                showWinner(pos1val);
                return true;

            }
        }
    }
};
const resetgame=()=>{
turnO=true;
enable();
msgContainer.classList.add("hide");
}
newbtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame);
