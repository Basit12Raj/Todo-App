import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-blue-700 ">Todo-App</h1>
      <div className="flex border rounded-lg overflow-hidden">
        <input
          type="text"
          className="px-4 py-2 flex-1"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-t last:border-b"
          >
            <span>{task}</span>
            <button
              className="px-3 py-1 bg-red-500 text-white font-semibold"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
