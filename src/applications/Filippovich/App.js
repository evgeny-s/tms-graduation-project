import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GameSettings from './src/components/gameSettings';
import Stats from './src/components/stats';
import Panel from './src/components/panel';
import Results from './src/components/results';
import views from './src/consts/views';
import './app.css';


const mapStateToProps = state => ({
    view: state.common.view,
});


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

export default connect(mapStateToProps)(App);