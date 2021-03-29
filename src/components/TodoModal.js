import React, {useState} from 'react';

function TodoModal(props) {
    const [show, setShow] = useState(false);
    const showHideClassName = props.show ? "todo-modal show" : "todo-modal hide";

    const statusHandler = (e) => {
        props.setStatus(e.target.outerText);
        props.onClose();
    };

    return (
        <div className={showHideClassName}>
          <h3>The Eisenhower Matrix</h3>
          <div>
            <button onClick={statusHandler}>IU</button>
            <button onClick={statusHandler}>INU</button>
            <button onClick={statusHandler}>NIU</button>
            <button onClick={statusHandler}>NINU</button>
            <button onClick={statusHandler}>RESET</button>
          </div>          
        </div>
    )
}

export default TodoModal;

