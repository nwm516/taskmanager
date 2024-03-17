import React, { useState } from 'react';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [nextId, setNextId] = useState(1);

    function addTask(title) {
        const newTask = {
            id: nextId,
            title: title,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setNextId(nextId + 1);
    };

    function toggleTaskCompletion(id) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed  // Allows the task to be flipped back and forth, if needed
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div>
            {/* Input field */}
            <input type="text" id="taskInput" />
            <button onClick={() => addTask(document.getElementById('taskInput').value)}>
                Add Task
            </button>
    
            {/* Task List */}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
    
                        <span style={{ marginLeft: '1rem' }}>
                            {task.completed ? 'Completed' : 'Incomplete'}
                        </span>
    
                        <button onClick={() => toggleTaskCompletion(task.id)}>
                            Toggle Completion
                        </button>
                    </li>
                ))}
            </ul>    
        </div>
    );
    
}

export default TaskManager;