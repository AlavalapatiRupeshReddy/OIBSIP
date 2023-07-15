const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    pendingTasksList.appendChild(taskItem);
    taskInput.value = '';
  }
});

function createTaskItem(taskText) {
  const taskItem = document.createElement('li');
  const taskLabel = document.createElement('label');
  const checkbox = document.createElement('input');
  const taskTextSpan = document.createElement('span');
  const deleteButton = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      completeTask(taskItem);
    } else {
      uncompleteTask(taskItem);
    }
  });

  taskTextSpan.textContent = taskText;

  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.addEventListener('click', function() {
    deleteTask(taskItem);
  });

  taskLabel.appendChild(checkbox);
  taskLabel.appendChild(taskTextSpan);

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

function completeTask(taskItem) {
  taskItem.classList.add('completed');
  completedTasksList.appendChild(taskItem);
}

function uncompleteTask(taskItem) {
  taskItem.classList.remove('completed');
  pendingTasksList.appendChild(taskItem);
}

function deleteTask(taskItem) {
  taskItem.remove();
}
