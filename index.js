const tasksList = document.querySelector(".list");

class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("task")) || [];
    this.lastId = this.tasks[this.tasks.length - 1]?.id || 0;
  }

  addTask(taskText) {
    const id = this.lastId;
    this.id++;

    const newTask = {
      id: id,
      task: taskText,
    };

    this.tasks.push(newTask);
    this.saveTasks();
    this.renderOneTask(newTask.id, newTask.task);
  }

  renderOneTask(id, taskText) {
    const newTask = {
      id: id,
      task: taskText,
    };

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
      const listItem = document.createElement("li");
      listItem.id = task.id;
      tasksList.appendChild(listItem);
      listItem.textContent = task.task;
      listItem.classList.add("list-item");
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.innerHTML = "Eliminar";
      deleteBtn.classList.add("delete-btn", "on-focusBtn");
      deleteBtn.addEventListener("click", (event) => {
        this.deleteTask(task.id);
      });
    });
  }

  deleteTask(id) {
    const taskToDelete = document.getElementById(id);
    taskToDelete.remove();
    const index = this.tasks.findIndex((task) => task.id == id);
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem("task", JSON.stringify(this.tasks));
  }
}

const tarea = new Tasks();

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.querySelector(".text-input").value;
  tarea.addTask(inputText);
  form.reset();
  tarea.renderOneTask();
});

document.addEventListener("DOMContentLoaded", (event) => {
  tarea.renderTasks(tarea.tasks);
});
