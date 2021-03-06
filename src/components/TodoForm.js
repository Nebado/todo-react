import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

function TodoForm(props) {
    let [input, setInput] = useState(props.edit ? props.edit.value : '');
    let [filter] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (/^[a-z]+(.*)(\\#iu)$/i.test(input)) {
            filter = '#IU';
            input = input.replace(/\\#iu/i, '');
        }
        if (/^[a-z]+(.*)(\\#inu)$/i.test(input)) {
            filter = '#INU';
            input = input.replace(/\\#inu/i, '');
        }
        if (/^[a-z]+(.*)(\\#niu)$/i.test(input)) {
            filter = '#NIU';
            input = input.replace(/\\#niu/i, '');
        }
        if (/^[a-z]+(.*)(\\#ninu)$/i.test(input)) {
            filter = '#NINU';
            input = input.replace(/\\#ninu/i, '');
        }

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            filter: filter,
            date: new Date().toLocaleDateString()
        });

        setInput('');
    };

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
          {props.edit ? (
              <>
                <input
                  type="text"
                  placeholder="Update your item"
                  value={input}
                  name="text"
                  className="input-todo edit"
                  onChange={handleChange}
                  />
                <button className="btn btn-todo btn-edit">Update</button>
              </>
          ) :
           (
               <>
                 <input
                   type="text"
                   placeholder="Add a task \#filter"
                   value={input}
                   name="text"
                   className="input-todo"
                   onChange={handleChange}
                   />
                 <button className="btn btn-todo">
                   <AiOutlinePlus className="add-icon" />
                 </button>
               </>
           )}
        </form>
    )
}

export default TodoForm;
