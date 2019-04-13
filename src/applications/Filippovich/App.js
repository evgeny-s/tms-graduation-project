import React from 'react';
import PropTypes from 'prop-types';
import GameSettings from './src/containers/gameSettings';
import Stats from './src/containers/stats';
import Panel from './src/containers/panel';
import Results from './src/containers/results';
import views from './src/consts/views';
import './app.css';

function App({view})
{
    return (
        <div className="container filippovichGame">
            <div className="user-interface row">
                <h1 className="game-name col-12">Dungeon Warriors Game</h1>
                {view === views.SETTINGS && <GameSettings/>}
                {view === views.GAME && <React.Fragment>
                                            <Stats/>
                                            <Panel/>
                                        </React.Fragment>}
                {view === views.RESULTS && <Results/>}
            </div>
        </div>
    );
}

App.propTypes = {
    view: PropTypes.string,
};

export default App;