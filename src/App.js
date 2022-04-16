import React from 'react';
import './App.css';
import TodoClock from './components/TodoClock';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="todo__overlay">
          <div className="todo__app">
            <div className="todo__app--left">
              <TodoClock />
              <TodoList />
            </div>
          </div>
        </div>
    );
}

export default App;
