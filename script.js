const form = document.getElementById("form");
const tasksList = document.querySelector(".list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newTask = document.querySelector("#text-input").value;
  let myObjOfTasks = { task: newTask };
  addTask(newTask);
  myArrayOfTasks(myObjOfTasks);
});

document.addEventListener("DOMContentLoaded", (event) => {
  myArray.forEach((task) => {
    addTask(Object.values(task));
  });
});

function addTask(newTask) {
  const listItem = document.createElement("li");
  tasksList.appendChild(listItem);
  listItem.textContent = newTask;
  listItem.classList.add("list-item");
  form.reset();
  const deleteBtn = document.createElement("button");
  listItem.appendChild(deleteBtn);
  deleteBtn.innerHTML = "Eliminar";
  deleteBtn.classList.add("delete-btn", "on-focusBtn");
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
}

let myArray = JSON.parse(localStorage.getItem("task")) || [];

function myArrayOfTasks(myObjOfTasks) {
  myArray.push(myObjOfTasks);
  let myObjJSON = JSON.stringify(myArray);
  localStorage.setItem("task", myObjJSON);
  console.log(localStorage.getItem("task"));
}

function tasksId() {
  let lastId = localStorage.getItem("lastId") || -1;
  let newId = JSON.parse(lastId) + 1;
  localStorage.setItem("lastId", JSON.stringify(newId));
  return newId;
}
