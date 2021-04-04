import React from 'react';

class TodoTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            _state: false,
            seconds: 60,
            minutes: 0,
            secText: '',
            minText: ''
        };
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };
    
    stopTimer = e => {
        e.preventDefault();

        clearInterval(this.intervalID);
        
        this.setState({
            _state: false
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (!this.state.input)
            return;

        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
        
        this.setState({
            input: '',
            minutes: this.state.input-1,
            seconds: 59,
            _state: true
        });

        this.intervalID = setInterval(
            () => this.countDown(),
            1000
        );
    };
    
    countDown() {
        if (this.state.seconds === 0) {
            this.setState({
                minutes: this.state.minutes-1,
                seconds: 60,
            });
        }

        this.setState({
            seconds: this.state.seconds - 1
        });

        if (this.state.minutes < 0) {
            this.setState({
                minutes: this.state.minutes+1,
                seconds: 0,
                _state: false
            });
            
            clearInterval(this.intervalID);
            return false;
        }

        if (this.state.seconds < 10) {
            this.setState({
                seconds: this.state.seconds
            });
        } else {
            this.setState({
                seconds: this.state.seconds
            });
        }
        if (this.state.minutes < 10) {
            this.setState({
                minutes: this.state.minutes
            });
        } else {
            this.setState({
                minutes: this.state.minutes
            });
        }
    };
    
    render() {
        return (
            <div className="todo-timer">
              <form onSubmit={this.handleSubmit}>
                {this.state._state ? (
                    <>                    
                      <div className="timer">
                        {this.state.minutes < 10 ? ('0'+this.state.minutes) : this.state.minutes}:
                        {this.state.seconds < 10 ? ('0'+this.state.seconds) : this.state.seconds}
                      </div>
                      <button className="todo-button" onClick={this.stopTimer}>Stop</button>
                    </>
                ) :
                 (
                     <>
                       <input
                         type="number"
                         placeholder="Timer (min)"
                         value={this.state.input}
                         name="number"
                         min="0"
                         max="60"
                         className="todo-input"
                         onChange={this.handleChange}
                         />
                       <button className="todo-button">Ok</button>
                     </>
                 )}
            </form>
                </div>
        );
    }
}

export default TodoTimer
