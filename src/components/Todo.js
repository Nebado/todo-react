import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import FlipMove from 'react-flip-move';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
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

    const items = todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
          >
          <div className='todo-text' key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>

          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
              />
              <TiEdit
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
