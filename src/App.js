import React from 'react';
import './App.css';
import TodoClock from './components/TodoClock';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="todo-app">
        <TodoClock />
        <TodoList />
        </div>
    );
}

export default App;
