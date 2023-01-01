const grid = document.querySelector(".grid");
const create = document.querySelector(".create");
const show = document.querySelector(".show");
let choice = 16;
updateGrid(choice);

create.addEventListener("click", ()=> {
    choice = prompt("Enter a number");
    if (show.textContent === "Remove Border") {
        show.textContent = "Show Border";
    }
    updateGrid(parseInt(choice));
})

show.addEventListener("click", ()=> {
    if (show.textContent === "Show Border") {
        showBorder();
        show.textContent = "Remove Border";
    }
    else {
        removeBorder();
        show.textContent = "Show Border";
    } }
)

grid.addEventListener("mouseover", (event)=> {
    if (event.target !== grid) {
      event.target.style.backgroundColor = "rebeccapurple";
    }
})

function updateGrid(number) {
    if (isNaN(number) || number < 1 || number > 100 || number === null) {
        alert("Enter a number from 1 to 100");
        return;
    }
    while (grid.firstElementChild !== null) {
        grid.removeChild(grid.firstElementChild);
    }
    for (gridElement = 0; gridElement < number ** 2; gridElement++) {
        div = document.createElement("div");
        div.style.height = `${100/number}%`;
        div.style.width = `${100/number}%`;
        grid.appendChild(div);
    }    
}

function showBorder() {
    const gridChildren = [...grid.children];
    for (item of gridChildren) {
        item.setAttribute("class", "borders");
    }
}

function removeBorder() {
    const gridChildren = [...grid.children];
    for (let item of gridChildren) {
        item.removeAttribute("class");
    }    
}