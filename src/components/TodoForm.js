import React, {useState, useEffect, useRef} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {TiFilter} from 'react-icons/ti';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    const filterHandler = (e) => {
        console.log(e);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
          {props.edit ? (
              <>
                <input
                  type="text"
                  placeholder="Update your item"
                  value={input}
                  name="text"
                  className="todo-input edit"
                  onChange={handleChange}
                  ref={inputRef}
                  />
                <button className="todo-button edit">Update</button>
              </>
          ) :
           (
               <>
                 <input
                   type="text"
                   placeholder="Add a task"
                   value={input}
                   name="text"
                   className="todo-input"
                   onChange={handleChange}
                   ref={inputRef}
                   />
                 <button className="todo-button">
                   <AiOutlinePlus className="add-icon" />
                 </button>
                 <div className="todo-filter" onClick={filterHandler} >
                   <TiFilter className="filter-icon" />
                 </div>
               </>
           )}
        </form>
    )
}

export default TodoForm;
