let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('#items2');

let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('lebel');
    let updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';
    updateBtn.className = 'update';
    
    checkBox.style.marginLeft = "8px";
    label.style.paddingLeft = "5px";
    label.style.marginRight = "100px"
    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(updateBtn);
    return listItem;
}
let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    //binding li
    bindInTask(listItem, completeTask);
}

let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.style.paddingLeft = '10px';
    listItem.appendChild(deleteBtn);
    
    let update = listItem.querySelector('.update');
    update.className += ' completed'
    let completeUpdate = listItem.querySelector('.completed');
    completeUpdate.remove();
    
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    

    bindDeleteItems(listItem,deleteTask);
}
let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
 
let bindInTask = function(taskItem,checkboxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick; 
}

let bindDeleteItems = function(taskItem,deleteButtonClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for (let i = 0; i < todoUl.children.length; i++) {
    bindInTask(todoUl.children[i],completeTask); 
}
for (let i = 0; i < completeUl.children.length; i++) {
    bindDeleteItems(completeUl.children[i],deleteTask); 
}
form.addEventListener('submit', addTask);