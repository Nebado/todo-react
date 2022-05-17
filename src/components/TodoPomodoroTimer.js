import React from 'react';
import beepAudio from '../sounds/bell.mp3';

class TodoPomodoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      minutes: 25,
      seconds: 0,
      initSec: 60,
      breakShortMin: 5,
      breakLongMin: 15,
      breaks: 0,
      typeOfBreak: 'short',
      process: 'work',
      textWork: 'Hard Work',
      textBreak: 'Short Break',
    };

    this.timerStart = this.timerStart.bind(this);
    this.timerStop  = this.timerStop.bind(this);

    this.audio = new Audio(beepAudio);
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

  takeShortBreak() {
    this.notifySound();

    this.setState({
      minutes: 5,
      seconds: 0,
      start: false,
      process: 'break',
      typeOfBreak: 'short',
      textBreak: 'Short Break',
      breaks: this.state.breaks + 1
    });
  }

  takeLongBreak() {
    this.notifySound();

    this.setState({
      minutes: 15,
      seconds: 0,
      start: false,
      process: 'break',
      typeOfBreak: 'long',
      textBreak: 'Long Break',
      breaks: 0
    });
  }

  timerStart() {
    this.setState({
      start: true,
    });
  }

  timerStop() {
    this.notifySound();

    if (this.state.process === 'break') {
      this.setState({
        minutes: (this.state.typeOfBreak === 'short') ? this.state.breakShortMin : this.state.breakLongMin,
        seconds: 0,
      });
    }
    
    if (this.state.process === 'work') {
      this.setState({
        minutes: 25,
        seconds: 0,
      });
    }

    this.setState({
      start: false,
    });
  }

  tickTimer() {
    if (this.state.start) {
      let currentMin = this.state.minutes;
      let currentSec = this.state.seconds - 1;          

      if (currentSec < 0) {
        currentMin -= 1;
        currentSec = this.state.initSec - 1;
      }

      if (currentMin < 0 && this.state.process === 'work') {
        if (this.state.breaks === 4) {
          this.takeLongBreak();

          return false;
        }

        this.takeShortBreak();

        return false;
      }

      if (currentMin < 0 && this.state.process === 'break') {
        this.setState({
          minutes: '25',
          seconds: '0',
          process: 'work'
        });
        this.timerStop();

        return false;
      }

      this.setState({
        minutes: currentMin,
        seconds: currentSec
      });
    }
  }

  notifySound() {
    this.audio.play();
  }

  render() {
    return (
      <div className="todo__pomodoro--timer">
        {(this.state.process === 'work' && this.state.start === true) ? 
          (<h3 className="pomodoro__timer--title">{this.state.textWork}</h3>) 
          : 
          (<></>)
        }
        {(this.state.process === 'break' && this.state.start === true) ? 
          (<h3 className="pomodoro__timer--title">{this.state.textBreak}</h3>) 
          : 
          (<></>)
        }
        <div className="pomodoro__timer--time">
          {(this.state.minutes < 10) ? "0"+this.state.minutes : this.state.minutes}:
          {(this.state.seconds < 10) ? "0"+this.state.seconds : this.state.seconds}
        </div>
        <div className="btn__group">
          <button className="btn btn-todo" onClick={this.timerStart}>Start</button>
          <button className="btn btn-todo" onClick={this.timerStop}>Stop</button>
        </div>
      </div>
    );
  }
}

export default TodoPomodoroTimer;
