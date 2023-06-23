document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let taskIdCounter = 1; // Counter to assign unique task IDs

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const startDate = new Date(document.getElementById('start-date').value);
        const endDate = new Date(document.getElementById('end-date').value);

        // Adjust the time to Central Time Zone offset
        const timezoneOffset = 5 * 60 * 60 * 1000; // Central Time Zone offset in milliseconds (5 hours)
        startDate.setTime(startDate.getTime() + timezoneOffset);
        endDate.setTime(endDate.getTime() + timezoneOffset);
        const isCompleted = false;

        const task = {
            id: taskIdCounter,
            name: name,
            description: description,
            startDate: startDate,
            endDate: endDate,
            isCompleted: isCompleted
        };

        // Get existing tasks from localStorage
        let tasks = localStorage.getItem('tasks');
        tasks = tasks ? JSON.parse(tasks) : [];

        // Add new task to the array
        tasks.push(task);

        // Save updated tasks to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Increment the task ID counter
        taskIdCounter++;

        // Clear form inputs
        taskForm.reset();

        // Update task list display
        displayTasks();
    });

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = ''; // Clear previous tasks

        // Get tasks from localStorage
        let tasks = localStorage.getItem('tasks');
        tasks = tasks ? JSON.parse(tasks) : [];

        // Sort tasks by start date in ascending order
        tasks.sort((a, b) => a.startDate - b.startDate);

        // Iterate over tasks and create list items
        tasks.forEach(function(task) {
            const listItem = document.createElement('li');
            const startDateTimeString = task.startDate.toLocaleString('en-US', { timeZone: 'America/Chicago', hourCycle: 'h24' });
            const endDateTimeString = task.endDate.toLocaleString('en-US', { timeZone: 'America/Chicago', hourCycle: 'h24' });

            listItem.innerHTML = `
                <strong>Name:</strong> ${task.name}<br>
                <strong>Start Date:</strong> ${startDateTimeString}<br>
                <strong>End Date:</strong> ${endDateTimeString}<br>
                <strong>Days Remaining:</strong> ${calculateDaysRemaining(new Date(task.endDate))}<br>
                <strong>Description:</strong> <span class="description">${task.description}</span><br>
                <input type="checkbox" class="status-checkbox" data-task-id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
                <button class="delete-button" data-task-id="${task.id}">X</button>
            `;

            // Add click event listener to show/hide description
            const descriptionElement = listItem.querySelector('.description');
            listItem.addEventListener('click', function() {
                descriptionElement.classList.toggle('show');
            });

            // Add change event listener to update task status
            const statusCheckbox = listItem.querySelector('.status-checkbox');
            statusCheckbox.addEventListener('change', function() {
                const taskId = parseInt(statusCheckbox.dataset.taskId);
                updateTaskStatus(taskId, statusCheckbox.checked);
            });

            // Add click event listener to delete task
            const deleteButton = listItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function() {
                const taskId = parseInt(deleteButton.dataset.taskId);
                confirmDeleteTask(taskId);
            });

            // Set task status color
            if (task.isCompleted) {
                listItem.style.color = 'green'; // Completed tasks in green
            } else if (task.endDate < new Date()) {
                listItem.style.color = 'red'; // Overdue tasks in red
            }

            taskList.appendChild(listItem);
        });
    }

    // Function to calculate days remaining
    function calculateDaysRemaining(endDate) {
        const currentDate = new Date();
        const remainingTime = endDate.getTime() - currentDate.getTime();
        const daysRemaining = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
        return daysRemaining;
    }

    // Function to update task status
    function updateTaskStatus(taskId, isCompleted) {
        let tasks = localStorage.getItem('tasks');
        tasks = tasks ? JSON.parse(tasks) : [];

        // Find the task with the given ID
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            // Update the task's completion status
            task.isCompleted = isCompleted;

            // Save the updated tasks to localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Update the task list display
            displayTasks();
        }
    }

    // Function to confirm task deletion
    function confirmDeleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            deleteTask(taskId);
        }
    }

    // Function to delete task
    function deleteTask(taskId) {
        let tasks = localStorage.getItem('tasks');
        tasks = tasks ? JSON.parse(tasks) : [];

        // Find the task with the given ID
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            // Remove the task from the array
            tasks.splice(taskIndex, 1);

            // Save the updated tasks to localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Update the task list display
            displayTasks();
        }
    }

    // Load and display tasks on page load
    displayTasks();
});