document.getElementById('new_task').addEventListener('click', function() {
    var taskName = prompt('Nombre de la nueva tarea:');
    if (taskName !== null && taskName !== '') {
      var newRow = document.createElement('tr');
      var newCell = document.createElement('td');
      newCell.innerText = taskName;
      newRow.appendChild(newCell);
      newRow.addEventListener('click', function() {
        if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
          document.getElementById('ft_list').removeChild(newRow);
          saveTasks();
        }
      });
      document.getElementById('ft_list').insertBefore(newRow, document.getElementById('ft_list').firstChild);
      saveTasks();
    }
   });
   function saveTasks() {
    var tasks = Array.from(document.getElementById('ft_list').rows);
    var taskNames = tasks.map(function(taskRow) {
      return taskRow.cells[0].innerText;
    });
    localStorage.setItem('tasks', JSON.stringify(taskNames));
   }
   function loadTasks() {
    var taskNames = JSON.parse(localStorage.getItem('tasks'));
    if (taskNames !== null) {
      taskNames.forEach(function(taskName) {
        var newRow = document.createElement('tr');
        var newCell = document.createElement('td');
        newCell.innerText = taskName;
        newRow.appendChild(newCell);
        newRow.addEventListener('click', function() {
          if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
            document.getElementById('ft_list').removeChild(newRow);
            saveTasks();
          }
        });
        document.getElementById('ft_list').appendChild(newRow);
      });
    }
   }
   loadTasks();