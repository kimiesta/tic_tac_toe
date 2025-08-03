const boxes=document.querySelectorAll(".box");
let true0=true;
const winner=document.getElementById("winlogic");
const reset=document.getElementById("resetbtn");
reset.addEventListener("click", () => {
    reset.onclick = () => {
    boxes.forEach(box => box.textContent = "");
    winner.style.visibility = "hidden";
    true0 = true;
    gameOver = false;
};
});
let gameover=false;
const winpattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
boxes.forEach((box) => {
    
        box.addEventListener("click",() => {
            if (gameover==false) {
                if (box.innerHTML=="o"|| box.innerHTML=="x") {
                    return;
                }
                else if (true0) {
                    box.innerHTML=`o`;
                    true0=false;
                    box.dis
                }
                else if (true0==false){
                    box.innerHTML=`x`;
                    true0=true;
                }
                checkwinner();
            }  
        }); 
});

const checkwinner= ()=> {
    for (let pattern of winpattern)
    {
       if(boxes[pattern[0]].innerHTML ==`x` && boxes[pattern[1]].innerHTML ==`x` && boxes[pattern[2]].innerHTML ==`x`)
        {
            winner.innerHTML="x-player is the winner";
            winner.style.visibility="visible";
            gameover=true;
        }
        else if(boxes[pattern[0]].innerHTML =="o" && boxes[pattern[1]].innerHTML =="o" && boxes[pattern[2]].innerHTML =="o")
        {
            winner.innerHTML="o-player is the winner";
            winner.style.visibility="visible";
            gameover=true;
        }
    }
}


