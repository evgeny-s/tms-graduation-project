import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import FilippovichGame from './applications/Filippovich';
import Clicker from './applications/clicker';
import AppsTable from './AppsTable';

class App extends Component
{
    render()
    {
        return (
            <Router>
                <div className="container">
                    <Route path="/" exact component={AppsTable}/>
                    <Route path="/app1" exact component={Clicker}/>
                    <Route path="/filippovich" exact component={FilippovichGame}/>
                </div>
            </Router>
        );
    }
}

export default App;
