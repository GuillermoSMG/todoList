const tasksList = document.querySelector(".list");

class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("task")) || [];
    this.lastId = this.tasks[this.tasks.length - 1]?.id + 1 || 0;
  }

  addTask(taskText) {
    const id = this.lastId;
    this.lastId++;

    const newTask = {
      id: id,
      task: taskText,
    };

    this.tasks.push(newTask);
    this.saveTasks();
    this.renderOneTask(newTask);
  }

  renderOneTask(newTask) {
    const oneListItem = document.createElement("li");
    oneListItem.id = newTask.id;
    tasksList.appendChild(oneListItem);
    oneListItem.textContent = newTask.task;
    oneListItem.classList.add("list-item");
    const deleteBtn = document.createElement("button");
    oneListItem.appendChild(deleteBtn);
    deleteBtn.innerHTML = "Eliminar";
    deleteBtn.classList.add("delete-btn", "on-focusBtn");
    deleteBtn.addEventListener("click", (event) => {
      this.deleteTask(newTask.id);
    });
  }

  renderTasks(tasks) {
    this.tasks.forEach((task) => {
      this.renderOneTask(task);
    });
  }

  deleteTask(id) {
    const taskToDelete = document.getElementById(id);
    taskToDelete.remove();
    const index = this.tasks.findIndex((task) => task.id == id);
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  deleteAllTasks() {
    localStorage.clear();
    this.tasks = [];
    tasksList.innerHTML = "";
  }

  saveTasks() {
    localStorage.setItem("task", JSON.stringify(this.tasks));
  }
}

const tarea = new Tasks();

const form = document.querySelector("#form");

const deleteAllBtn = document.querySelector("#delete-all");
deleteAllBtn.addEventListener("click", (event) => {
  let confirmation = confirm(
    "¿Está seguro que desea eliminar todas las tareas?"
  );
  if (confirmation) {
    tarea.deleteAllTasks();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.querySelector(".text-input").value;
  tarea.addTask(inputText);
  form.reset();
});

document.addEventListener("DOMContentLoaded", (event) => {
  tarea.renderTasks(tarea.tasks);
});
