import React from 'react';
import {connect} from 'react-redux';
import viewsConsts from '../../consts/views';


const mapStateToProps = state => ({
    view: state.settings.view,

});

const mapDispatchToProps = dispatch => ({
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
                <button onClick={this._resumeDefaults} type="button" className="btn btn-danger">Restart</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);