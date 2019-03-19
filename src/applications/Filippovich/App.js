import React from 'react';
import Stats from './src/components/stats';
import Panel from './src/components/panel'
import './app.css'


function App() {
    return (
        <div className="container filippovichGame">
            <div className="col-12">Dungeon Crawler Game</div>
            <div className="user-interface row">
                <Stats/>
                <Panel/>
            </div>
        </div>
    );
}

export default App;