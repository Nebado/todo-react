import React, {useState} from 'react';
import TodoModal from './TodoModal';
import {MdFilterList} from 'react-icons/md';

function TodoFilter({setStatus}) {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    
    return (
        <div className="todo__filter">
          <TodoModal onClose={handleHide} show={show} setStatus={setStatus} />
          <button onClick={handleShow} className="btn btn-filter">
            <MdFilterList className="filter filter-icon" />
          </button>
        </div>
    )
}

export default TodoFilter;



