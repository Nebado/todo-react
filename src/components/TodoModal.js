import React, {useState} from 'react';

function TodoModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const showHideClassName = props.show ? "todo-modal show" : "todo-modal hide";

    
    return (
        <div className={showHideClassName}>
          <h3>The Eisenhower Matrix</h3>
          <div>
            <button>IU</button>
            <button>INU</button>
            <button>NIU</button>
            <button>NINU</button>
          </div>          
        </div>
    )
}

export default TodoModal;

