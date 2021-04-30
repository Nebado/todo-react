import React, {useState} from 'react';
import TodoModal from './TodoModal';
import {TiFilter} from 'react-icons/ti';

function TodoFilter({setStatus}) {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    
    return (
        <div className="todo__filter">
          <TodoModal onClose={handleHide} show={show} setStatus={setStatus} />
          <button onClick={handleShow} className="btn btn-filter">
            <TiFilter className="filter filter-icon" />
          </button>
        </div>
    )
}

export default TodoFilter;



