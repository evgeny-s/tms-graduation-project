import React from 'react';
import {connect} from 'react-redux';
import './map.css';
import ItemLine from '../itemLine';
import gameService from '../../services/gameService';
import db from '../../../db/db';
import itemTypes from "../../consts/itemTypes";
import keyTypes from '../../consts/keyTypes';


const mapStateToProps = state => ({
    koordsPlayer: state.games.koordsPlayer,
    viewPort: state.games.viewPort,
    certifications: state.games.certifications,
    skills: state.games.skills,
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
        certificationCollected: () =>
            dispatch({
                type: 'CERTIFICATION_COLLECTED',
                payload: 1,
            }),
        skillCollected: () =>
            dispatch({
                type: 'SKILL_COLLECTED',
                payload: 1,
            }),
        // changeColor: (y, x) => dispatch({
        //     type: "CHANGE_ITEM_COLOR",
        //     payload: {
        //         y,
        //         x,
        //         poleType: "pole"
        //     },
        // })
        edited: () =>
            dispatch({
                type: 'ITEM_EDITED',
                payload: 'pole'
            })
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
                if(!gameService.isWall(keyTypes.LEFT, this.props.koordsPlayer)){
                    if(gameService.isCertificate(keyTypes.LEFT, this.props.koordsPlayer)){
                        this.props.certificationCollected();

                        gameService.changeDB(keyTypes.LEFT, this.props.koordsPlayer);
                        // this.props.edited();
                    }

                    if(gameService.isSkill(keyTypes.LEFT, this.props.koordsPlayer)){
                        if(this.props.certifications >= 25){
                            this.props.skillCollected();
                        }
                    }

                    this.props.keyLeft();
                }
                break;
            case 40:
                if(!gameService.isWall(keyTypes.DOWN, this.props.koordsPlayer)){
                    if(gameService.isCertificate(keyTypes.DOWN, this.props.koordsPlayer)){
                        this.props.certificationCollected();

                        gameService.changeDB(keyTypes.DOWN, this.props.koordsPlayer);
                        // this.props.edited();
                    }

                    if(gameService.isSkill(keyTypes.DOWN, this.props.koordsPlayer)){
                        if(this.props.certifications >= 25){
                            this.props.skillCollected();
                        }
                    }

                    this.props.keyDown();
                }
                break;
            case 38:
                if(!gameService.isWall(keyTypes.UP, this.props.koordsPlayer)){
                    if(gameService.isCertificate(keyTypes.UP, this.props.koordsPlayer)){
                        this.props.certificationCollected();

                        gameService.changeDB(keyTypes.UP, this.props.koordsPlayer);
                        this.props.edited();
                    }

                    if(gameService.isSkill(keyTypes.UP, this.props.koordsPlayer)){
                        if(this.props.certifications >= 25){
                            this.props.skillCollected();
                        }
                    }
                    this.props.keyUp();

                }
                break;
            case 39:
                if(!gameService.isWall(keyTypes.RIGHT, this.props.koordsPlayer)){
                    if(gameService.isCertificate(keyTypes.RIGHT, this.props.koordsPlayer)){
                        this.props.certificationCollected();

                        gameService.changeDB(keyTypes.RIGHT, this.props.koordsPlayer);
                        // this.props.edited();
                    }

                    if(gameService.isSkill(keyTypes.RIGHT, this.props.koordsPlayer)){
                        if(this.props.certifications >= 25){
                            this.props.skillCollected();
                        }
                    }

                    this.props.keyRight();
                }
                break;
            default:
                break;
        }
    };

    componentDidMount() {
        this.myRef.current.focus();
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.viewPort === this.props.viewPort) {
            console.log('asdf');
            return true;
        }
        return true;
    }


    render() {
        const {viewPort} = this.props;

        return (
            <div ref={this.myRef} className="map" tabIndex="-1"
                 onClick={this._focusingDivElement} onKeyDown={this._keyPressed}>
                {
                    viewPort.map((viewPortValue) => (
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
