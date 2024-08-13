document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    
    // Check if the body has the dark-mode class
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Set the initial icon based on the current mode
    toggleButton.textContent = isDarkMode ? 'dark_mode' : 'light_mode';

    toggleButton.addEventListener('click', () => {
        // Toggle the dark-mode class on the body
        document.body.classList.toggle('dark-mode');
        
        // Update the icon based on the current mode
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? 'dark_mode' : 'light_mode';
    });
    
    const tasksContainer = document.getElementById('tasksContainer');
    const addTaskItem = document.getElementById("addTaskContainer")

    addTaskItem.addEventListener("click", function() {
        const taskName = prompt('Enter the name of the new task:');
        
        if (taskName) {
            // Create a new list item
            const newTask = document.createElement('li');
            
            // Create a new checkbox input
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            // Create a label for the checkbox
            const taskNameInput = document.createElement('input');
            taskNameInput.type = "text";
            taskNameInput.value = taskName;
            taskNameInput.className = "taskName"
            
            // Create delete icon
            const icon = document.createElement('i');
            icon.textContent = "delete";
            icon.className = "material-icons deleteTaskIcon";

            // Append the checkbox and label to the list item
            newTask.appendChild(checkbox);
            newTask.appendChild(taskNameInput);
            newTask.appendChild(icon);
            
            // Insert a divider after the new task
            const divider = document.createElement('div');
            divider.className = 'divider';
            
            // Append the new list item to the tasks container
            tasksContainer.appendChild(newTask);
            tasksContainer.appendChild(divider);
        }
    });

    function deleteParent(event) {
        // Make sure the clicked element is an icon
        if (event.target.classList.contains('deleteTaskIcon')) {
            // Get the <li> element that contains the clicked icon
            const liElement = event.target.closest('li');
            const nextSibling = liElement.nextElementSibling;
            
            // Remove the <li> element
            liElement.remove();

            // Remove the following divider if it exists
            if (nextSibling && nextSibling.classList.contains('divider')) {
                nextSibling.remove();
            }
        }
    }
    tasksContainer.addEventListener('click', deleteParent);
});
