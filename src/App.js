import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import FilippovichGame from './applications/Filippovich';
import Clicker from './applications/clicker';
import Game from './applications/sushkevich';
import AppsTable from './AppsTable';
import Seven from './applications/vlad-seven/index'
import Six from './applications/vlad-six/index'

function App() {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <Router>
        <div className="container">
          <Route path="/" exact component={AppsTable} />
          <Route path="/app1" exact component={Clicker}/>
          <Route path="/vlad-seven" exact component={Seven}/>
          <Route path="/vlad-six" exact component={Six}/>
        </div>
      </Router>
=======
>>>>>>> master
        <Router>
            <div className="container">
                <Route path="/" exact component={AppsTable}/>
                <Route path="/app1" exact component={Clicker}/>
<<<<<<< HEAD
                <Route path="/vlad-seven" exact component={Seven}/>
                <Route path="/vlad-six" exact component={Six}/>
            </div>
        </Router>
=======
                <Route path="/s-sushkevich" exact component={Game}/>
                <Route path="/filippovich" exact component={FilippovichGame}/>
            </div>
        </Router>
>>>>>>> 77b78e054dd11faadf7c8e31b86689d409252bf0
>>>>>>> master
    );
}

export default App;
