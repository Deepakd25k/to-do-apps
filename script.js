function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskInput.value;
      taskList.appendChild(taskItem);
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });
  
      taskItem.appendChild(deleteButton);
      taskInput.value = '';
    }
  }
  