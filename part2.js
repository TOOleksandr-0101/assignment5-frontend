let paragraph = document.getElementById("contentParagraph");
let changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function() {
    paragraph.textContent = "Hello! The text is changed.";
});

let styleBox = document.getElementById("styleBox");
let changeBgBtn = document.getElementById("changeBgBtn");
let changeFontBtn = document.getElementById("changeFontBtn");

changeBgBtn.addEventListener("click", function() {
    styleBox.style.backgroundColor = "yellow";
});

changeFontBtn.addEventListener("click", function() {
    styleBox.style.fontSize = "24px";
});

let itemList = document.getElementById("itemList");
let addItemBtn = document.getElementById("addItemBtn");
let removeItemBtn = document.getElementById("removeItemBtn");

addItemBtn.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    itemList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", function() {
    let lastItem = itemList.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
});
