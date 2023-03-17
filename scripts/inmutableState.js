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
//OBTENEMOS UNA COPIA IMNUTABLE
const getState = () => JSON.parse(JSON.stringify(state));
d.addEventListener("DOMContentLoaded", render);

//ESTABLECIENDO VALORES POR DEFECTO AL STATE
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
  nombre: "Alan",
});

//EN EL ESTADO MUTABLE PERMITIMOS LA MODIFICACION DEL ESTADO DIRECTAMENTE CREANDO UNA COPIA DEL OBJETO Y AGREGANDO OTRO ELEMETO
const items = getState();
// items.push("Tarea 4");
items.todoList.push("Tarea 4");
console.log("Estado Inmutable", state);

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  //ACTUALIZAR STATE DE FORMA REACTIVA
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: data.todoList });

  //limpiar el input
  $item.value = "";
  $item.focus();
});
