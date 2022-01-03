import React from 'react';

class TodoObserver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionX: -515,
            positionY: -67,
            left: 10,
            right: 30,
            speed: 300,
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
            this.setState({
                positionX: -515
            });
        }

        if (this.state.right === 450) {
            this.setState({
                direction: 0,
                positionY: -196
            });
        }

        if (this.state.right === 30) {
            this.setState({
                direction: 1,
                positionY: -70
            });
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
            <div className="todo__observer" style={style}></div>
        );
    }
}

export default TodoObserver
