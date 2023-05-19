let buttonlike = document.querySelector("#button-like");
let numbercount = document.queryselector(".number");
let buttons = document.querySelector(".buttons");

let number = 0;

buttonlike.addEventlistener("click", () => {
    buttons.classlist.add("border-button");
    buttonlike.classlist.add("active");

    number += 1;
    numberCount. innerHTML = number;
});