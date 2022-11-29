document.querySelector('.button').onclick = function(){
    var tasksDiv = document.querySelector("#tasks");

    if (tasksDiv.children.length < 5) {

        let div = document.createElement("div")
        div.classList.add("task");
        let input = document.createElement("input");
        input.type = "text";
        let button = document.createElement("button");
        button.classList.add("delete");
        button.innerHTML = "x";
        div.appendChild(input);
        div.appendChild(button);
        tasksDiv.appendChild(div);

    } else {
        alert("Siyahi doludur!");
    }


    var current_tasks = document.querySelectorAll(".delete");

    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = deleteFunction;
    }
}

document.querySelectorAll(".delete").forEach((el) => {
el.addEventListener("click", deleteFunction);
})

function deleteFunction(){
if (document.querySelector("#tasks").children.length == 1) {
    this.parentNode.querySelector("input").value = "";
} else {
    this.parentNode.remove();
}
}

document.querySelector(".sort-icon-holder").addEventListener("click", sortTable);

function sortTable(event) {
var table, rows, switching, i, x, y, shouldSwitch;
table = document.getElementById("tasks");
switching = true;
let asc = event.currentTarget.classList.contains("asc");
while (switching) {
   
  switching = false;
  rows = table.querySelectorAll(".task:not(#newtask");
 
 
  for (i = 0; i < (rows.length - 1); i++) {
   
    shouldSwitch = false;
   
    x = rows[i].querySelector("input");
    y = rows[i + 1].querySelector("input");

    if (asc) {
        if (x.value.toLowerCase() > y.value.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
    } else {
        if (x.value.toLowerCase() < y.value.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
    }
  }
  if (shouldSwitch) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
  }
}


let img = document.querySelector(".sort-icon-holder img");
if (asc) {
    event.currentTarget.classList.remove("asc");
    img.src = "img/black-up.png";
} else {
    event.currentTarget.classList.add("asc");
    img.src = "img/black-down.png";
}
}


// sort shekli hoverler
let img = document.querySelector(".sort-icon-holder img");

img.addEventListener("mouseenter", function() {

if (img.src.endsWith("gray-down.png")) {
    img.src = "img/black-down.png";
} else {
    img.src = "img/black-up.png"
}
})

img.addEventListener("mouseleave", function() {
if (img.src.endsWith("black-down.png")) {
    img.src = "img/gray-down.png";
} else {
    img.src = "img/gray-up.png"
}
}) 