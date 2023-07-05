import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  componentDidUpdate() {
    console.log('after update');
  }

  render() {
    const { favoriteColor } = this.state;
    return (
      <>
        <h1>My favorite color is: {favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color to blue</button>
      </>
    );
  }
}

export default Color;