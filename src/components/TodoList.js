import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import Todo from './Todo';
import TodoObserver from './TodoObserver';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Run once when the app start
    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        saveLocalTodos();
    }, [todos]);

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    const filterHandler = () => {
        switch(status) {
        case 'iu':
            setFilteredTodos(todos.filter(todo => todo.filter === '#IU'));
            break;
        case 'inu':
            setFilteredTodos(todos.filter(todo => todo.filter === '#INU'));
            break;
        case 'niu':
            setFilteredTodos(todos.filter(todo => todo.filter === '#NIU'));
            break;
        case 'ninu':
            setFilteredTodos(todos.filter(todo => todo.filter === '#NINU'));
            break;
        case 'reset':
            setFilteredTodos(todos);
            break;
        default:
            setFilteredTodos(todos);
            break;
        }
    }

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };

    return (
        <div className="todo__container">
          <h1>What's the Plan for Today?</h1>
          <TodoObserver />
          <div className="todo__wrapper">
            <TodoForm onSubmit={addTodo} />
            <TodoFilter setStatus={setStatus} />
          </div>
          <div className="todo__list">
            <Todo
              filteredTodos={filteredTodos}
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              />
          </div>
        </div>
    );
}

export default TodoList;
