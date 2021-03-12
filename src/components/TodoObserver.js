import React from 'react';

class TodoObserver extends React.Component {
    constructor(props) {
        super(props);
        this.position = 0;
        this.speed = 5;
        this.direction = 1;
        this.stepNum = 1;
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.step(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    step() {
        // TODO
    }

    render() {
        return (
            <div className="todo-observer"></div>
        );
    }
}

export default TodoObserver
