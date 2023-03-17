const d = document;

//EL STATE
const state = {
  todoList: [],
  nombre: "",
};

//TEMPLATE UI
const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }

  let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");

  return todos;
};

//AGREGAR STATE AL TEMPLATE QUE GENERA COMPONENTE UI (STATE LOCAL)
template.data = {
  todoList: [],
};
//RENDER UI
const render = () => {
  console.log("Estado global", state);
  console.log("Estado local", template.data);

  const $list = d.getElementById("todo-list");
  if (!$list) return;
  $list.innerHTML = template();
};
// ACTUALIZAR ESTADO DE FORMA REACTIVA
const setState = (obj) => {
  for (let key in obj) {
    if (template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key];
    }
  }
  render();
};
//OBTENEMOS UNA COPIA IMNUTABLE
const getState = () => JSON.parse(JSON.stringify(template.data));
d.addEventListener("DOMContentLoaded", render);

//ESTABLECIENDO VALORES POR DEFECTO AL STATE
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  //ACTUALIZAR STATE DE FORMA REACTIVA
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  //limpiar el input
  $item.value = "";
  $item.focus();
});
