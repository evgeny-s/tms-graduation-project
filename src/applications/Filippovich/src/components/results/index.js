import React from 'react';
import {connect} from 'react-redux';
import PlayerResult from './playerResult';
import viewsConsts from '../../consts/views';
import './results.css';


const mapStateToProps = state => ({
    playerList: state.highestScore.playerList,
    userResultMessage: state.highestScore.userResultMessage,
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
            <>
                <h3 className='offset-md-1 col-11 user-message'>{this.props.userResultMessage}</h3>
                    <table className='table table-sm table-hover col-10 offset-md-1 fixed_header'>
                       <thead>
                        <tr>
                            <th>#</th>
                            <th>Player Name</th>
                            <th>Step's count</th>
                            <th>Difficulty</th>
                            <th>Total score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.playerList.map(({id, name, steps, difficulty, score}, index) => (
                                <PlayerResult key={id} index={index + 1} name={name} steps={steps}
                                              difficulty={difficulty} score={score}/>
                            ))
                        }
                        </tbody>
                    </table>
                <button onClick={this._resumeDefaults} type='button'
                        className='col-2 offset-md-9 btn btn-danger'>Restart
                </button>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);