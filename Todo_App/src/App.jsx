import React from 'react';
import './App.css';
import Todo_Add from './components/Todo_Add.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="container">
      <h1>
        ToDo List <i className="fa-solid fa-book"></i> <i className="fa-solid fa-pen"></i>
      </h1>
      <Todo_Add />
    </div>
  );
}

export default App;
