import React, {useState} from 'react';
import TodoModal from './TodoModal';
import {TiFilter} from 'react-icons/ti';

function TodoFilter() {
    const [show, setShow] = useState(false);
   
    const handleShow = () => setShow(true);

    return (
        <div>
          <TodoModal show={show} />
          <button onClick={handleShow} className="todo-filter">
            <TiFilter className="filter-icon" />
          </button>
        </div>
    )
}

export default TodoFilter;



