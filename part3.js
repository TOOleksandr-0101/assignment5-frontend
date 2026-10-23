let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "red";
    hoverBox.textContent = "You got scammed!";
});

hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "#0d6efd";
    hoverBox.textContent = "Cash is over! :(";
});

let textInput = document.getElementById("textInput");
let liveOutput = document.getElementById("liveOutput");

textInput.addEventListener("keyup", function() {
    liveOutput.textContent = textInput.value;
});

let num1Input = document.getElementById("calcNum1");
let num2Input = document.getElementById("calcNum2");
let calcResult = document.getElementById("calcResult");

let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");

addBtn.addEventListener("click", function() {
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    calcResult.textContent = n1 + n2;
});

subBtn.addEventListener("click", function() {
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    calcResult.textContent = n1 - n2;
});

mulBtn.addEventListener("click", function() {
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    calcResult.textContent = n1 * n2;
});

divBtn.addEventListener("click", function() {
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    if (n2 === 0) {
        calcResult.textContent = "No";
    } else {
        calcResult.textContent = n1 / n2;
    }
});
