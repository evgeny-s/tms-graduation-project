import React from 'react';
import {connect} from 'react-redux';
import viewsConsts from '../../consts/views';


const mapStateToProps = state => ({
    playerList: state.highestScore.playerList,
    // view: state.settings.view,

});

const mapDispatchToProps = dispatch => ({
    fetchPlayerList: () => dispatch({
        type: 'FETCH_PLAYER_LIST',
    }),
    clickRestartButton: () => dispatch({
        type: 'CHANGE_VIEW',
        payload: viewsConsts.SETTINGS,
    }),
    setDefaults: () => dispatch({
        type: 'SET_DEFAULTS',
    })
});

class Results extends React.Component
{
    componentWillMount()
    {
        this.props.fetchPlayerList();
    }

    _resumeDefaults = () =>
    {
        this.props.setDefaults();
        this.props.clickRestartButton();
    };

    render()
    {
        return (
            <div>
                <h1>Вы проиграли :(</h1>
                {
                    this.props.playerList.map(({id, name, steps, difficulty, score}) => (
                        <div key={id}>
                            <label>{name}</label>
                            <label>{steps}</label>
                            <label>{difficulty}</label>
                            <label>{score}</label>
                        </div>
                    ))
                }
                <button onClick={this._resumeDefaults} type="button" className="btn btn-danger">Restart</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);