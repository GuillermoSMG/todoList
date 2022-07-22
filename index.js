const tasksList = document.querySelector(".list");

class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("task")) || [];
    this.lastId = this.tasks[this.tasks.length - 1].id || 0;
  }

  addTask(taskText) {
    const id = this.lastId + 1;
    this.lastId++;

    const newTask = {
      id: id,
      task: taskText,
    };

    this.tasks.push(newTask);
    this.saveTasks();
  }

  deleteTask(id) {
    const taskToDelete = document.getElementById(id);
    taskToDelete.remove();
    const index = this.tasks.findIndex((task) => task.id == id);
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  renderTasks() {
    this.tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.id = task.id;
      tasksList.appendChild(listItem);
      listItem.textContent = task.task;
      listItem.classList.add("list-item");
      /* form.reset(); */
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.innerHTML = "Eliminar";
      deleteBtn.classList.add("delete-btn", "on-focusBtn");
      deleteBtn.addEventListener("click", (event) => {
        this.deleteTask(task.id);
      });
    });
  }

  saveTasks() {
    localStorage.setItem("task", JSON.stringify(this.tasks));
  }
}

const tarea = new Tasks();
tarea.addTask("comer");
tarea.addTask("pasear1");
tarea.addTask("pasear2");
tarea.addTask("pasear3");
tarea.renderTasks();
console.log(tarea.tasks);
console.log(tarea.tasks[tarea.tasks.length - 1].id);
