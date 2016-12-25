import React, { Component } from 'react';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showClock: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Clock.componentDidMount');
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log('Clock.componentWillUnmount');
    clearInterval(this.timerId);
  }

  handleClick() {
    this.setState((prevState) => ({
      showClock: !prevState.showClock
    }));
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Toggle Clock Visibility</button>
        <p>{this.state.showClock && this.state.date.toTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
