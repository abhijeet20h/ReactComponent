/* eslint-disable no-undef */
import React, { Component } from "react";
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  onClickIncrementHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  onClickDecrementHandler = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  onClickResetHandler = () => {
    console.log("onClickResetHandler");
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <>
        <h1>Counter Demo</h1>
        <div>
          <button
            className="btn btn-primary m-3"
            onClick={() => this.onClickDecrementHandler()}
          >
            -
          </button>
          {this.state.counter}
          <button
            className="btn btn-primary m-3"
            onClick={() => this.onClickIncrementHandler()}
          >
            +
          </button>

          <button
            className="btn btn-primary m-3"
            onClick={() => this.onClickResetHandler()}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}
export default Count;
