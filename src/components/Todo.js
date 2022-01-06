import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { BsTrash, BsPencil } from 'react-icons/bs';
import FlipMove from 'react-flip-move';

function Todo({todos, completeTodo, removeTodo, updateTodo, filteredTodos}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    const items = filteredTodos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo__row complete' : 'todo__row'}
          key={index}
          >
          <div className='todo__text' key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
            <span className='todo__date'>{todo.date}</span>
          </div>
          <span className='filter' key={todo.filter}>
            {todo.filter}
          </span>

        <div className="icons">
            <BsTrash
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
              />
              <BsPencil
                onClick={() => setEdit({id: todo.id, value: todo.text })}
                className='edit-icon'
                />
          </div>
        </div>
    ));

    return (
        <div>
          <FlipMove duration={300} easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
            {items}
          </FlipMove>
        </div>
    );
}

export default Todo;
