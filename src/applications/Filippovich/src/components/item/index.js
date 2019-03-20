import React from 'react';
import {connect} from 'react-redux';
import layout from '../../../db/db.json';
import './item.css'


const mapStateToProps = state =>({
    koords: state.games.koords,
});

const mapDispatchToProps = dispatch => ({
    keyDown: (e) => {
        const _type = '';
        switch (e.keyCode) {
            case '37':     //left
                console.log('left');
                dispatch({
                    type:"KEY_LEFT",
                    payload: {
                        y: -1
                    }});
                break;
            case '40':     //down
                console.log('down');
                dispatch({
                    type:"KEY_DOWN",
                    payload: {
                        x: -1
                    }});
                break;
            case '38':     //up
                console.log('up');
                dispatch({
                    type:"KEY_UP",
                    payload: {
                        y: 1
                    }});
                break;
            case '39':     //right
                console.log('right');
                dispatch({
                    type:"KEY_RIGHT",
                    payload: {
                        x: 1
                    }});
                break;
            default:
                console.log('default');
        }
    },
});

function Item({type, keyDown}) {
    const className = `item ${type}`;
    return (
        <div className={className} onKeyDown={keyDown}>

        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);