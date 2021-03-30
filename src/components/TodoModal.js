import React from 'react';

function TodoModal(props) {
    const showHideClassName = props.show ? "todo-modal show" : "todo-modal hide";

    const statusHandler = (e) => {
        props.setStatus(e.target.dataset.filter);
        props.onClose();
    };

    return (
        <div className={showHideClassName}>
          <h3>The Eisenhower Matrix</h3>
          <div>
            <button onClick={statusHandler} data-filter="iu">Important && Urgent</button>
            <button onClick={statusHandler} data-filter="inu">Important && Not Urgent</button>
            <button onClick={statusHandler} data-filter="niu">Not Important && Urgent</button>
            <button onClick={statusHandler} data-filter="ninu">Not Important && Not Urgent</button>
            <button onClick={statusHandler} data-filter="reset">RESET</button>
          </div>          
        </div>
    )
}

export default TodoModal;

