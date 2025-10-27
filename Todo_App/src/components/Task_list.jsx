import React from 'react';

function Task_list({ task, onDelete }) {
  return (
    <li className="task-list">
      <span className="task-text">{task.text}</span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
}

export default Task_list;
