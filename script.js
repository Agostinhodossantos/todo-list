var addButton = document.getElementById("add-button");
addButton.addEventListener('click', addToDoItem);

var clearCompletedButton = document.getElementById("clear-completed-button");
clearCompletedButton.addEventListener('click', clearCompletedToDoItems);

var emptButton = document.getElementById("empty-button");
emptButton.addEventListener("click", emptyList);


var saveListButton = document.getElementById("save-button");
saveListButton.addEventListener("click", saveList);



function saveList() {
    alert("save button clicked");
}

function emptyList() {
    alert("emptyList");
}

function clearCompletedToDoItems() {
    alert(" clearCompletedToDoItems clicked");
}

function addToDoItem() {
    alert("Add button clicked!");
}