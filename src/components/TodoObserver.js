import React from 'react';

class TodoObserver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionX: -515,
            positionY: -67,
            left: 10,
            right: 90,
            speed: 350,
            direction: 1,
            stepNum: 64
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.step(),
            this.state.speed
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    step() {
        if (this.state.positionX === -3) {
            this.state.positionX = -515;
        }

        if (this.state.right === 450) {
            this.state.direction = 0;
            this.state.positionY = -196;
        }

        if (this.state.right === 90) {
            this.state.direction = 1;
            this.state.positionY = -67;
        }

        if (this.state.direction === 1) {
            this.setState({
                positionX: this.state.positionX + this.state.stepNum,
                right: this.state.right+10
            });
        } else {
            this.setState({
                positionX: this.state.positionX + this.state.stepNum,
                right: this.state.right-10
            });
        }
    }

    render() {
        let style = {
            backgroundPositionX: this.state.positionX,
            backgroundPositionY: this.state.positionY,
            right: this.state.right
        }
        return (
            <div className="todo-observer" style={style}></div>
        );
    }
}

export default TodoObserver
