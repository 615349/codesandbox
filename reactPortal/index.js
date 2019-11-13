import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Lightbox extends Component {
  el = document.createElement("div");

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class App extends Component {
  state = {
    showLightbox: false
  };

  handleOpen = e => {
    e.preventDefault();
    this.setState({ showLightbox: true });
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ showLightbox: false });
  };

  render() {
    const { showLightbox } = this.state;
    return (
      <Fragment>
        <button onClick={this.handleOpen}>OPEN</button>
        {showLightbox && (
          <Lightbox>
            <div className="lightbox-container">
              <div className="overlay" />
              <div className="content">
                <div className="close-btn" onClick={this.handleClose}>
                  x
                </div>
                <div className="lightbox-content">
                  some content in the lightbox
                </div>
              </div>
            </div>
          </Lightbox>
        )}
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

