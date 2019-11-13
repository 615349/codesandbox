import React, { Component } from "react";
import { render } from "react-dom";
import { IProps, IState } from "./types";

class App extends Component<IProps, IState> {
  state = {
    age: 0
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(({ age }) => ({ age: age + 1 }));
  };

  render() {
    return (
      <>
        <div>name: {this.props.name}</div>
        <div>age: {this.state.age}</div>
        <button onClick={this.handleClick}>INCREASE AGE</button>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App name="jack" />, rootElement);

