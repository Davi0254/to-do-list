const input = document.getElementById("enter");
const button = document.getElementById('button-30');
const ol = document.getElementById("click");

function handleClick(event) {
    const clickedItem = event.target;
    clickedItem.classList.toggle("done");
}

ol.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        handleClick(event);
    }
});

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        const div = document.createElement("div");
        div.classList.add("list-item");

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.appendChild(document.createTextNode("delete"))

       div.appendChild(li);
       div.appendChild(deleteButton);
       ol.appendChild(div);
  }
})

function handleDelete(event) {
    const listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
}


ol.addEventListener("click", function(event) {
    if (event.target.tagName === "li") {
        handleClick(event);
    } else if (event.target.classList.contains("delete-button")) {
        handleDelete(event);
    }
})


