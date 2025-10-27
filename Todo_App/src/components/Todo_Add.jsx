import React, { useState, useEffect } from 'react';
import Task_list from './Task_list';

function Todo_Add() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState(() => {
    // Load tasks once from localStorage when component initializes
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('red');

  // Save to localStorage every time tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Show empty message when list is cleared
    if (tasks.length === 0) {
      setMessage('Your task list is empty');
      setMessageColor('red');
    }
  }, [tasks]);

  // Add new task
  const handleAdd = () => {
    if (text.trim() === '') return;

    const newTask = { id: Date.now(), text: text.trim() };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setText('');

    setMessage('Todo item created successfully!');
    setMessageColor('green');
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

    setMessage('Todo item deleted!');
    setMessageColor('red');
  };

  return (
    <>
      <div className="inputfield">
        <input
          type="text"
          placeholder="Add your task"
          className="task-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>+</button>
      </div>

      {/* Message Section */}
      {message && (
        <div className="msg" style={{ color: messageColor }}>
          <span>{message}</span>
        </div>
      )}

      {/* Task List Section */}
      {tasks.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <Task_list key={task.id} task={task} onDelete={handleDelete} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Todo_Add;
