import React, { Component } from "react";

class Toao extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return <h1>I am User</h1>;
  }
}
export default Toao;
