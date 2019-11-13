import React from "react";
import ReactDOM from "react-dom";
import Child from "./Child";

class App extends React.Component {
  state = {
    count: 0,
    foo: [100],
    person: null
  };

  fetchData = () => {
    return fetch("local.json")
      .then(response => {
        if (!response.ok) throw new Error("Response not OK");

        return response.json();
      })
      .then(person => {
        this.setState({ person });
      })
      .catch(e => console.error("Failed to fetch:", e));
  };

  componentDidMount() {
    this.fetchData();
  }

  handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { count, person, foo } = this.state;
    return (
      <>
        <h2>left: {3 - foo.length}</h2>
        <h1>Game played: {count}</h1>
        {person && (
          <>
            <h3>Name: {person.name}</h3>
            <h3>age: {person.age} </h3>
          </>
        )}
        <Child handleClick={this.handleClick} />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
