import React from 'react';
import {connect} from 'react-redux';
import './map.css';
import ItemLine from '../itemLine';
import db from '../../../db/db';


const mapStateToProps = state => ({
    koords: state.games.koords,
    viewPort: state.games.viewPort,
});

const mapDispatchToProps = dispatch => ({
        keyLeft: () => dispatch({
            type: "KEY_LEFT",
            payload: {
                x: -1,
                y: 0
            }
        }),
        keyDown: () => dispatch({
            type: "KEY_DOWN",
            payload: {
                x: 0,
                y: 1
            }
        }),
        keyUp: () => dispatch({
            type: "KEY_UP",
            payload: {
                x: 0,
                y: -1
            }
        }),
        keyRight: () => dispatch({
            type: "KEY_RIGHT",
            payload: {
                x: 1,
                y: 0
            }
        }),
    }
);


class Map extends React.Component {
    myRef = React.createRef();

    _focusingDivElement = () => {
        this.myRef.current.focus();
    };

    _keyPressed = (e) => {
        switch (e.keyCode) {
            case 37:
                this.props.keyLeft();
                break;
            case 40:
                this.props.keyDown();
                break;
            case 38:
                this.props.keyUp();
                break;
            case 39:
                this.props.keyRight();
                break;
            default:
                break;
        }
    };

    componentDidMount() {
        this.myRef.current.focus();
    };

    render() {
        const {viewPort} = this.props;

        return (
            <div ref={this.myRef} className="map" tabIndex="-1"
                 onClick={this._focusingDivElement} onKeyDown={this._keyPressed}>
                {
                    viewPort.map((viewPortValue, viewPortIndex) => (
                        db.map.map((value, index) => (
                            <ItemLine key={index} yKoord={index} itemsType={value}/>))
                                .filter( item => item.key >= viewPortValue && item.key <= viewPortValue)
                    ))
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
