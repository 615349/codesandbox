import * as React from "react";
import { render } from "react-dom";

const handleChange = Symbol();

class App extends React.Component {
  state = {
    name: "John"
  };

  [handleChange] = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.name}
          onChange={this[handleChange]}
        />
        <div>name: {this.state.name}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
