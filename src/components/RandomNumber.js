import React from 'react';


class RandomNumber extends React.Component {
  updateNumber() {
    let value = Math.round(Math.random() * 100);
    this.props.onUpdate(value);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>RANDOM NUMBER: { this.props.number }</h1>
        <button onClick={() => this.updateNumber()}>Randomize</button>
      </div>
    );
  }
}

export default RandomNumber;