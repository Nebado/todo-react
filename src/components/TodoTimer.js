import React from 'react';

class TodoTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            minutes: 25,
            seconds: 0,
            initSec: 60
        };

        this.timerStart = this.timerStart.bind(this);
    }
    componentDidMount() {
        this.intervalIdTimer = setInterval(
            () => this.tickTimer(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalIdTimer);
    }
    timerStart(event) {
        this.setState({
            start: true
        });
    }
    tickTimer() {
        if (this.state.start) {
            let currentMin = this.state.minutes;
            let currentSec = this.state.seconds-1;
            
            if (currentSec < 0) {
                currentMin -= 1;
                currentSec = this.state.initSec-1;
            }

            if (currentMin < 0) {
                this.state.start = false;
                return;
            }
            
            this.setState({
                minutes: currentMin,
                seconds: currentSec
            });

        }
    }
    render() {
        return (
            <div>
              <div className="todo__timer">{(this.state.minutes < 10) ? "0"+this.state.minutes : this.state.minutes}:
                {(this.state.seconds < 10) ? "0"+this.state.seconds : this.state.seconds}</div>
              <button className="btn btn-todo" onClick={this.timerStart}>Start</button>
              <button className="btn btn-todo">Stop</button>
            </div>
        )
    }
}

export default TodoTimer;
