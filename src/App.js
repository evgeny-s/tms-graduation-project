import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Clicker from './applications/clicker';
import Game from './applications/sushkevich';
import AppsTable from './AppsTable';

const App = (props) => {
    return (
        <Router>
            <div className="container">
                <Route path="/" exact component={AppsTable}/>
                <Route path="/app1" exact component={Clicker}/>
                <Route path="/s-sushkevich" exact component={Game}/>
            </div>
        </Router>
    );
};

export default App;
