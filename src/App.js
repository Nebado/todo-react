import React from 'react';
import './App.css';
import TodoClock from './components/TodoClock';
import TodoTimer from './components/TodoTimer';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="todo__overlay">
          <div className="todo__app">
            <TodoClock />
            <TodoList />
            <TodoTimer />
          </div>
        </div>
    );
}

export default App;
