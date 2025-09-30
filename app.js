let boxes=document.querySelectorAll(".box");
let restbtn= document.querySelector(".reser-btn");
let turn0 = true; // player x and player 0 is there 

const winPattern =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach(  (box)=>{
    box.addEventListener("click",()=>{
        console.log(" button was clicked");
        box.innerText="x";
        if(turn0){
            // player 0 turn
            box.innerText="0";
            turn0=false;
        }
        else{
            //player x turn 
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWiner=()=>{
    for(pattern of winPattern){
        console.log(pattern);
    }
}

