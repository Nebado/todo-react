import React from 'react';
import './App.css';
import TodoClock from './components/TodoClock';
import TodoList from './components/TodoList';
import TodoTimer from './components/TodoTimer';

function App() {
    return (
        <div className="todo-app">
          <TodoClock />
          <TodoList />
          <TodoTimer />
        </div>
    );
}

export default App;
