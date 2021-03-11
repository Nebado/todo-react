import React from 'react';
import FlipMove from 'react-flip-move';

class TodoClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render() {
        return (
            <p className="todo-clock">
                {this.state.time}
            </p>
        );
    }
}

export default TodoClock
