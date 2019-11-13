import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  render() {
    const { lastname: name } = this.props;
    return <>NAME: {name}</>;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App lastname="johnny" />, rootElement);
