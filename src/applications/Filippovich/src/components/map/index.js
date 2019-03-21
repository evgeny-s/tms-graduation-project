import React from 'react';
import {connect} from 'react-redux';
import './map.css';
import ItemLine from '../itemLine';
import db from '../../../db/db';


const mapStateToProps = state =>({
    koords: state.games.koords,

});

const mapDispatchToProps = dispatch => ({
    keyDown: (e) => {
        switch (e.keyCode) {
            case 37:
                dispatch({
                    type:"KEY_LEFT",
                    payload: {
                        x: -1,
                        y: 0
                    }});
                break;
            case 40:
                dispatch({
                    type:"KEY_DOWN",
                    payload: {
                        x: 0,
                        y: 1
                    }});
                break;
            case 38:
                dispatch({
                    type:"KEY_UP",
                    payload: {
                        x: 0,
                        y: -1
                    }});
                break;
            case 39:
                dispatch({
                    type: "KEY_RIGHT",
                    payload: {
                        x: 1,
                        y: 0
                    }});
                break;
            default:
                break;
        }
    },
});


class Map extends React.Component{
    myRef = React.createRef();

    focusingDivElement = () => {
        this.myRef.current.focus();

    };

    componentDidMount() {
        this.myRef.current.focus();
    };

    render()
    {
        const {keyDown} = this.props;
        return (
            <div ref={this.myRef} className="map" tabIndex="-1" onClick={this.focusingDivElement} onKeyDown={keyDown}>

                {
                    db.map.map((value, index) => (
                        <ItemLine key={index} yKoord={index} itemsType={value}/>
                    ))
                }



            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
