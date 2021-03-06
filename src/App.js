import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import FilippovichGame from './applications/Filippovich';
import Game from './applications/sushkevich';
import SpaceInfo from './applications/SonaTa_spaceinfo';
import AppsTable from './AppsTable';
import Seven from './applications/vlad-seven'
import Six from './applications/vlad-six'
import Recipe from './applications/kotko'


function App() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={AppsTable} />
            <Route path="/s-sushkevich" exact component={Game}/>
            <Route path="/filippovich" exact component={FilippovichGame}/>
            <Route path="/vlad-seven" exact component={Seven}/>
            <Route path="/vlad-six" exact component={Six}/>
            <Route path="/kotko" exact component={Recipe}/>
            <Route path="/SonaTa" exact component={SpaceInfo}/>
        </div>
      </Router>
    );
}

export default App;