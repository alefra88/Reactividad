const d = document;
  

  //EL STATE
  const state = {
    todoList:[]
  }


  //TEMPLATE UI
  const template = () => {
    if(state.todoList.length<1){
      return `<p><em>Lista sin tareas por hacer</em></p>`;
    }

    let todos = state.todoList.map(item => `<li>${item}</li>`).join("");

    return todos;
  }


  //RENDER UI
  const render = () => {
    console.log(state);
    const $list = d.getElementById("todo-list");
    if(!$list) return;
    $list.innerHTML = template();
  }

  d.addEventListener("DOMContentLoaded",render)

  d.addEventListener("submit", (e) => {
    if (!e.target.matches("#todo-form")) return false;

    e.preventDefault();
    const $item = d.getElementById("todo-item");
    if(!$item) return;
    //Agrega item a la lista
    // let $li = d.createElement("li");
    // $li.textContent = $item.value;
    // $list.appendChild($li);

    //Actualizar state y UI
    state.todoList.push($item.value);
    render();
    //limpiar el imput
    $item.value = "";
    $item.focus();
});
