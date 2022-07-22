const tasksList = document.querySelector(".list");

class Tasks {
  constructor() {
    this.tasks = [];
    this.lastId = 0;
  }

  addTask(taskText) {
    const id = this.lastId + 1;
    this.lastId++;

    const newTask = {
      id: id,
      task: taskText,
    };

    this.tasks.push(newTask);
  }

  deleteTask(id) {
    const taskToDelete = document.getElementById(id);
    taskToDelete.remove();
    this.tasks.splice(id, 1);
    const index = this.tasks.findIndex((task) => task.id == id);
    this.tasks.splice(index, 1);
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

  saveTasks() {}
}

const tarea = new Tasks();
tarea.addTask("comer");
tarea.addTask("pasear1");
tarea.addTask("pasear2");
tarea.addTask("pasear3");
tarea.renderTasks();
console.log(tarea.tasks);
