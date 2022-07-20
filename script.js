const form = document.getElementById("form");
const tasksList = document.querySelector(".list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newTask = document.querySelector("#text-input").value;
  const listItem = document.createElement("li");
  tasksList.appendChild(listItem);
  listItem.textContent = newTask;
  listItem.classList.add("list-item");

  const divDelTexto = document.createElement("div");
  const botonBorrar = document.createElement("button");
  botonBorrar.innerHTML = "Eliminar";
  botonBorrar.classList.add("delete-btn");
  botonBorrar.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
  listItem.appendChild(divDelTexto);
  listItem.appendChild(botonBorrar);
  form.reset();
});
