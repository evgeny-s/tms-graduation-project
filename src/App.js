import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Clicker from './applications/clicker';
import AppsTable from './AppsTable';
import Seven from './applications/vlad-seven/index'
import Six from './applications/vlad-six/index'

function App() {
    return (
        <Router>
            <div className="container">
                <Route path="/" exact component={AppsTable}/>
                <Route path="/app1" exact component={Clicker}/>
                <Route path="/vlad-seven" exact component={Seven}/>
                <Route path="/vlad-six" exact component={Six}/>
            </div>
        </Router>
    );
}

export default App;
