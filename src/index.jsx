import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> New react stuff: Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
