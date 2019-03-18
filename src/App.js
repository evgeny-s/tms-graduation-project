import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './applications/Tarasov_calc';

import Clicker from './applications/clicker';
import AppsTable from './AppsTable';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={AppsTable} />
          <Route path="/app1" exact component={Clicker}/>
          <Route path="/Igor_Tarasov" exact component={Calculator}/>
        </div>
      </Router>
    );
  }
}

export default App;
