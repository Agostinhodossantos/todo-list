//Button
var addButton = document.getElementById("add-button");
var emptButton = document.getElementById("empty-button");
var saveListButton = document.getElementById("save-button");
var clearCompletedButton = document.getElementById("clear-completed-button");
//List

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");


//Event
addButton.addEventListener('click', addToDoItem);
clearCompletedButton.addEventListener('click', clearCompletedToDoItems);
emptButton.addEventListener("click", emptyList);
saveListButton.addEventListener("click", saveList);

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }
    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerHTML,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function emptyList() {
    var toDoItems = toDoList.children;

    while (toDoList.length > 0) {
        toDoList.item(0).remove();
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}