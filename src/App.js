import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Clicker from './applications/clicker';
import Quots from './applications/meleshko';
import AppsTable from './AppsTable';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={AppsTable} />
          <Route path="/app1" exact component={Clicker}/>
         <Route path="/meleshko" exact component={Quots}/>
        </div>
      </Router>
    );
  }
}

export default App;
