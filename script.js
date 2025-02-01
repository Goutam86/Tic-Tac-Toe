let boxes = document.querySelectorAll(".box");
let win = document.querySelector(".win");
let msg = document.querySelector(".msg");
let rstbtn = document.getElementsByClassName("resetbtn")[0];
let newbtn = document.getElementsByClassName("newbtn")[0];

const winners = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let val0 = true;

const showwinner = (winner) => {
    win.innerText = `Congratulations! Winner is ${winner}`;
    boxes.forEach(box => {
        box.disabled = true;
    })
    win.classList.remove("hide");

}

function checkwinner() {
    for (let winner of winners) {

        let pos1 = boxes[winner[0]].innerText;
        let pos2 = boxes[winner[1]].innerText;
        let pos3 = boxes[winner[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner");
                showwinner(pos1);
            }


        }



    }
}
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (val0) {
            box.innerText = "0";
            val0 = false;
        } else {
            box.innerText = "X";
            val0 = true;
        }
        checkwinner();
        box.disabled = true
    });
});
rstbtn.addEventListener("click", () => {
    val0 = true;

    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    win.classList.add("hide");
    boxes.disabled = false;
});
newbtn.addEventListener("click", () => {
    val0 = true;

    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    win.classList.add("hide");
    boxes.disabled = false;
});

