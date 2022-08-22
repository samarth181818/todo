let entries = 0;
let existingEntries = 2;
let taskList = document.querySelector(".task-list");

//ADD New Task Function

function addNew() {
  entries++;
  let input = document.getElementById("new-task");
  let inputValue = input.value;

  //Rejecting Empty Inputs
  if (inputValue === "") return;

  //Adding New Task

  let newDiv = document.createElement("div");
  newDiv.className = "task";
  newDiv.id = `task${existingEntries + entries}`;

  let newCheck = document.createElement("i");
  newCheck.className = "fa-solid fa-check check";
  newCheck.id = `check${existingEntries + entries}`;

  let newTaskName = document.createElement("p");
  newTaskName.className = "task-name";
  newTaskName.id = `taskName${existingEntries + entries}`;

  newTaskName.textContent = inputValue;

  let newDelete = document.createElement("button");
  newDelete.className = "delete";
  newDelete.id = `delete${existingEntries + entries}`;

  let newCross = document.createElement("i");
  newCross.className = "fa-solid fa-xmark cross";

  newDelete.appendChild(newCross);

  newDiv.appendChild(newCheck);
  newDiv.appendChild(newTaskName);
  newDiv.appendChild(newDelete);

  taskList.appendChild(newDiv);

  //Clearing Input
  input.value = "";

  newDiv.onclick = function() {taskDone(newDiv.id)};
  newDelete.onclick = function() {deleteTask(newDelete.id)};
}


//Task Done Function
function taskDone(taskId) {
  let taskDiv = document.querySelector(`#${taskId}`);
  taskDiv.style.backgroundColor = "#F9F2ED";
  taskDiv.style.border = "2px solid #FFB4B4";

  let taskName = document.querySelector(`#${taskId} p`);
  taskName.style.textDecoration = "line-through";
  taskName.style.color = "#FFB4B4";

  let check = document.querySelector(`#${taskId} .check`);
  check.style.opacity = 1;
}


//Deleting a Task
function deleteTask(deleteId) {
  // let num = taskId.slice(-1);
  let num = deleteId.replace("delete", "");

  let taskDiv = document.querySelector(`#task${num}`);
  // taskDiv.style.display = "none";
  taskDiv.style.opacity = "0";
  // taskDiv.style.display = "none";
  let wait = setTimeout(function() {
    taskDiv.style.display = "none";
  }, 300);
}


//ADD with Enter Key
let addBtn = document.getElementById("add-new");
document.addEventListener("keypress", function(event){
  if (event.key === "Enter"){
    // event.preventDefault();
    addBtn.click();
  }
});
