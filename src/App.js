import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD

import FilippovichGame from './applications/Filippovich';
import Clicker from './applications/clicker';
import Game from './applications/sushkevich';
=======
>>>>>>> SonaTa.SpaceInfo
import SpaceInfo from './applications/SonaTa_spaceinfo';
import AppsTable from './AppsTable';


function App {
        return (
            <Router>
                <div className="container">
<<<<<<< HEAD
                    <Route path="/" exact component={AppsTable}/>
                    <Route path="/app1" exact component={Clicker}/>
                    <Route path="/s-sushkevich" exact component={Game}/>
                    <Route path="/filippovich" exact component={FilippovichGame}/>
=======
                    <Route path="/" exact component={AppsTable} />
>>>>>>> SonaTa.SpaceInfo
                    <Route path="/SonaTa" exact component={SpaceInfo}/>
                </div>
            </Router>
        );
    }


export default App;