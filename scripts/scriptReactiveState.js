const d = document;

//EL STATE
const state = {
  todoList: [],
  nombre: "",
};

//TEMPLATE UI
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }

  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");

  return todos;
};

//RENDER UI
const render = () => {
  console.log(state);
  const $list = d.getElementById("todo-list");
  if (!$list) return;
  $list.innerHTML = template();
};
// ACTUALIZAR ESTADO DE FORMA REACTIVA
const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
  render();
};
d.addEventListener("DOMContentLoaded", render);

//ESTABLECIENDO VALORES POR DEFECTO AL STATE
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
  nombre: "Alan",
});

//EN EL ESTADO MUTABLE PERMITIMOS LA MODIFICACION DEL ESTADO DIRECTAMENTE CREANDO UNA COPIA DEL OBJETO Y AGREGANDO OTRO ELEMETO
const items = state.todoList;
items.push("Tarea 4");
console.log("Estado mutable", state);

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  //Actualizar state y UI
  state.todoList.push($item.value);
  render();
  //limpiar el input
  $item.value = "";
  $item.focus();
});
