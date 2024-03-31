let btn = document.querySelectorAll(".box");
let win = document.querySelector(".winner");
let ret = document.querySelector(".reset");
let turnO = true;
let count = 0;
let winningPattren = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameDraw=()=>{
    win.innerText=`Game was Draw`;
    win.classList.remove("hide");
}
let result = (winner) => {
    win.innerText = `Winner is Player ${winner}`;
    win.classList.remove("hide");
}
btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "brown";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#e0777d";
            turnO = true;
        }
        count++;
        box.disabled = true;
         let iswinner =checkwinner();
         if(count===9 && !iswinner){
            gameDraw();
         }
      
    })

})
let disableBox = () => {
    for (box of btn) {
        box.disabled = true;
    }
}


let checkwinner = () => {
    for (pattren of winningPattren) {
        let pos1 = btn[pattren[0]].innerText;
        let pos2 = btn[pattren[1]].innerText;
        let pos3 = btn[pattren[2]].innerText;
         if(pos1!=""&& pos2!="" && pos3!=""){
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner");
                let winner = pos1;
                result(winner);


                disableBox();

            }

         }
    }


}
ret.addEventListener("click", () => {
    turnO = true;
    for (box of btn) {
        box.disabled = false;
        box.innerText = "";



    }
    win.classList.add("hide");

})
