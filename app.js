let boxes = document.querySelectorAll(".box");
let  resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg") 
let turnO = true; //playerO playerX

//2D ARRAY
let WinPatterns = [
    [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal \
  [2, 4, 6], // diagonal /
]

boxes.forEach((box) => {
   box.addEventListener("click", () => {
    if (turnO){
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
   });

});
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    };
}

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
}
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const showWinner = (Winner) =>{
    msg.innerText = `Congratulations!, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();



};

// check winner function

const checkWinner = () =>{
    for(let pattern of WinPatterns){
       
           let pos1Val = boxes[pattern[0]].innerText;
           let pos2Val = boxes[pattern[1]].innerText;
           let pos3Val = boxes[pattern[2]].innerText;

           if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
              
              if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
              }

           }
     
           


           //  If no winner and all boxes are filled, it's a draw
  let isDraw = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false; // found empty box, not a draw yet
    }
  });

  if (isDraw) {
    msg.innerText = "Game Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};
    }





// button events
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
