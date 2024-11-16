const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let tasks = [];

addButton.addEventListener('click', () => {
  const task = inputField.value.trim();

  if (task) {
    tasks = [...tasks, task];

    inputField.value = '';

    renderTasks();
  }
});

function renderTasks() {
  todoList.innerHTML = ''; 
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', () => {
      tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
      renderTasks();
    });

    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);
  });

  
  console.clear();
  console.log("Current Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
}
