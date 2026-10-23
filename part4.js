let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("You cannot enter  into the sheet because there is nothing here.");
        return;
    }

    tasks.push(taskText);

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    let span = document.createElement("span");
    span.textContent = taskText;
    span.style.cursor = "pointer";

    span.addEventListener("click", function() {
        span.classList.toggle("completed-task");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        li.remove();
        let index = tasks.indexOf(taskText);
        if (index > -1) {
            tasks.splice(index, 1);
        }
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
});
