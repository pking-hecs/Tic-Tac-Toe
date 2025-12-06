let boxes = document.querySelectorAll('.cell');

let turnO = false;

const patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        console.log("Box was clicked.");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();
        box.disabled = true;
    })
});

const checkWinner = () => {
    for (let pat of patterns) {
        let a = boxes[pat[0]].innerText;
        let b = boxes[pat[1]].innerText;
        let c = boxes[pat[2]].innerText;

        if (a != "" && b != "" && c != "") {
            if (a === b && b === c) {
                setTimeout(() => {
                    if (a == "X") alert("Winner X!!!");
                    else if (a == "O") alert("Winner O!!!");
                    reset();
                }, 1); 

            }
        }
    }
}

let reset = () => {
    turnO = false;
    location.reload();
}

document.getElementById('reset').addEventListener("click", () => {
    location.reload();
});
