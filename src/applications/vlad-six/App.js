import React, { Component } from 'react';

import Header from './containers/Header'
import Content from './containers/Content'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="book">
          <Header/>
          <Content/>
      </div>
    );
  }
}

export default App;
