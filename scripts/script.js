const d = document,
  $item = d.getElementById("todo-item")
  $list = d.getElementById("todo-list");

d.addEventListener("submit", (e) => {
    if (!e.target.matches("#todo-form")) return false;

    e.preventDefault();

    //Agrega item a la lista
    let $li = d.createElement("li");
    $li.textContent = $item.value;
    $list.appendChild($li);
    //limpiar el imput
    $item.value = "";
    $item.focus();
});
