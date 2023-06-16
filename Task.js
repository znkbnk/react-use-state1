//Task.js
import React, { useState } from 'react';

const Task = ({ task, completeTask, deleteTask }) => {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => completeTask(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  const completeTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const addTask = (event) => {
    event.preventDefault();
    const title = event.target.task.value;
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    event.target.task.value = '';
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Enter a task" />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;
