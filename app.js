let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let resetText=document.querySelector(".reset-text");
let turnO=true;

const winPatterns=[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

resetBtn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
      box.innerText="";
      box.disabled=false;
      resetText.style.display="none";
    })
    
})

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
});

});

const checkWinner =()=> {

    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!='' && pos2val!='' && pos3val!=''){
            if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner");
            boxes.forEach((box)=>{
                box.disabled=true;
                resetText.innerText=`Congratulations ${pos1val} you are the winner. Please reset the game`
                resetText.style.display="block";

            })
            }
        }
    }
}




