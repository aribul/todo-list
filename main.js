const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (e) => {
    e.preventDefault(); //Al agregar esto, no se recarga la página cada vez que agregue una tarea nueva. De otro modo, al estar el boton dentro del form, eso sucederá
    
    const text = input.value;

    if (text !== " ") {
        const li = document.createElement("li");
        const p = document.createElement("p");
    
        p.textContent = text //p crea un elemento de parrafo con el valor que le devuelve input
        
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        input.value = ""; //Con esta linea, cuando agrego la tarea, el form vuelve a quedar en blanco
        empty.style.display = "none" //El mensaje de no hay tareas va a desaparecer cuando gregue una tarea
    }

   
});

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
 
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block"; //Vuelve a aparecer cuando no hay tareas en la lista. 
        }
    });
    return deleteBtn;
}