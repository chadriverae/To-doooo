const tasksContainer = document.getElementById('tasks-container');
const addTaskItem = document.getElementById("add-task")

document.getElementById("add-task").addEventListener("click", function() {
    const taskName = prompt('Enter the name of the new task:');
    
    if (taskName) {
        // Create a new list item
        const newTask = document.createElement('li');

        // Create a new checkbox input
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create a label for the checkbox
        const label = document.createElement('label');
        label.textContent = taskName;

        // Assign an ID to the checkbox and label
        const taskId = `task${tasksContainer.children.length + 1}`;
        checkbox.id = taskId;
        label.htmlFor = taskId;

        // Append the checkbox and label to the list item
        newTask.appendChild(checkbox);
        newTask.appendChild(label);

        // Insert a divider after the new task (if needed)
        const divider = document.createElement('div');
        divider.className = 'divider';

        // Append the new list item to the tasks container
        tasksContainer.appendChild(newTask);
        tasksContainer.appendChild(divider);
    }
});

