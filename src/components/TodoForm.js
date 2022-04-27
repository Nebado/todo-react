import React, {useState} from 'react';
import {BiListPlus} from 'react-icons/bi';

function TodoForm(props) {
    let [input] = useState(props.edit ? props.edit.value : '');
    let [filter] = useState('');

    const handleChange = e => {
        input = e.target.innerHTML;
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
            text: input.replace(/\&nbsp;/g, '').replace(/<\/?[^>]+(>|$)/g, ""),
            filter: filter,
            date: new Date().toLocaleDateString()
        });

        // TODO: fix it, to clear content in the input
        e.target.firstChild.innerHTML = '';
    };

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
          {props.edit ? (
              <>
                <div
                  contentEditable
                  className="input-todo edit"
                  onInput={handleChange}
                  suppressContentEditableWarning={true}
                >
                {input}
                </div>
                <button className="btn btn-todo btn-edit">Update</button>
              </>
          ) :
           (
               <>
                 <div
                   contentEditable
                   className="input-todo"
                   onInput={handleChange} 
                   suppressContentEditableWarning={true}
                 >
                  {input}
                 </div>
                 <button className="btn btn-todo">
                   <BiListPlus className="add-icon" />
                 </button>
               </>
           )}
        </form>
    )
}

export default TodoForm;
