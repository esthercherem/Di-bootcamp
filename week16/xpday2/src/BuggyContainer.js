import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });

    if (counter === 4) {
      throw new Error('I crashed!');
    }
  };

  render() {
    const { counter } = this.state;
    return <div onClick={this.handleClick}>{counter}</div>;
  }
}

export default BuggyCounter;