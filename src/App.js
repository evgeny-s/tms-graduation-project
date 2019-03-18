import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Clicker from './applications/clicker';
import SpaceInfo from './applications/SonaTa_spaceinfo';
import AppsTable from './AppsTable';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/" exact component={AppsTable} />
                    <Route path="/app1" exact component={Clicker}/>
                    <Route path="/SonaTa" exact component={SpaceInfo}/>
                </div>
            </Router>
        );
    }
}

export default App;