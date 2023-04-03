document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskForm = document.querySelector('#create-task-form');
const taskInput = document.querySelector('#new-task-description');
const taskList = document.querySelector('#tasks');
function handleTaskFormSubmit(event) {
  event.preventDefault();
  const taskText = taskInput.value;
  const listItem = document.createElement('li');
  listItem.innerText = taskText;
  taskList.appendChild(listItem);
  taskInput.value = '';
}
taskForm.addEventListener('submit', handleTaskFormSubmit);

});
