import React from 'react';
import {connect} from 'react-redux';
import './map.css';
import Item from '../item';
import ItemLine from '../itemLine';
import gameService from '../../services/gameService';
import itemTypes from "../../consts/itemTypes";
import keyTypes from '../../consts/keyTypes';


const mapStateToProps = state => ({
    koordsPlayerX: state.games.koordsPlayerX,
    koordsPlayerY: state.games.koordsPlayerY,
    viewPort: state.games.viewPort,
    certifications: state.games.certifications,
    skills: state.games.skills,
    db: state.games.db,
});

const mapDispatchToProps = dispatch => ({
        keyLeft: () => dispatch({
            type: 'KEY_LEFT',
        }),
        keyDown: () => dispatch({
            type: 'KEY_DOWN',
        }),
        keyUp: () => dispatch({
            type: 'KEY_UP',
        }),
        keyRight: () => dispatch({
            type: 'KEY_RIGHT',
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
        itemEdited: (side) =>
        {
            let _x, _y;
            switch (side) {
                case 'up':
                    _x = 0;
                    _y = -1;
                    break;
                case 'down':
                    _x = 0;
                    _y = 1;
                    break;
                case 'left':
                    _x = -1;
                    _y = 0;
                    break;
                case 'right':
                    _x = 1;
                    _y = 0;
                    break;
                default:
                    break;
            }
            dispatch({
                type: 'ITEM_EDITED',
                payload: {
                    x: _x,
                    y: _y,
                }
            })
        }
    }
);


class Map extends React.Component
{
    _keyPressed = (e) =>
    {
        let keyType;
        switch (e.keyCode) {
            case 37:
                keyType = keyTypes.LEFT;
                if (!gameService.isWall(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                    if (gameService.isCertificate(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        this.props.certificationCollected();
                        console.log('left');

                        this.props.itemEdited(keyType);
                    }

                    if (gameService.isSkill(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        if (this.props.certifications >= 5) {
                            this.props.skillCollected();
                            this.props.itemEdited(keyType);

                        }
                    }

                    this.props.keyLeft();
                }
                break;
            case 40:
                keyType = keyTypes.DOWN;
                if (!gameService.isWall(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                    if (gameService.isCertificate(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        this.props.certificationCollected();
                        this.props.itemEdited(keyType);
                    }

                    if (gameService.isSkill(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        if (this.props.certifications >= 5) {
                            this.props.skillCollected();
                            this.props.itemEdited(keyType);

                        }
                    }

                    this.props.keyDown();
                }
                break;
            case 38:
                keyType = keyTypes.UP;
                if (!gameService.isWall(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                    if (gameService.isCertificate(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        this.props.certificationCollected();
                        this.props.itemEdited(keyType);

                    }

                    if (gameService.isSkill(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        if (this.props.certifications >= 5) {
                            this.props.skillCollected();
                            this.props.itemEdited(keyType);

                        }
                    }
                    this.props.keyUp();

                }
                break;
            case 39:
                keyType = keyTypes.RIGHT;
                if (!gameService.isWall(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                    if (gameService.isCertificate(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        this.props.certificationCollected();
                        this.props.itemEdited(keyType);
                    }

                    if (gameService.isSkill(keyType, this.props.koordsPlayerX, this.props.koordsPlayerY, this.props.db)) {
                        if (this.props.certifications >= 5) {
                            this.props.skillCollected();
                            this.props.itemEdited(keyType);
                        }
                    }

                    this.props.keyRight();
                }
                break;
            default:
                break;
        }
    };

    componentWillMount() {
        document.addEventListener("keydown", this._keyPressed);
    };

    componentWillUnmout() {
        document.removeEventListener("keydown", this._keyPressed);
    };

    renderViewPort()
    {
        let result = [];
        for (let i = 0; i < 10; i++) {
            let yIndex = this.props.viewPort[0] + i;
            result.push(
                <div key={yIndex} className="itemLine">
                    {
                        this.props.db[yIndex].map((value, index) => (

                        <Item key={index} yKoord={yIndex} xKoord={index} type={value}/>
                        ))
                    }
                </div>);

            /*<ItemLine key={i} yKoord={yIndex} itemsType={this.props.db[yIndex]}/>);*/

        }
        return result;
    };

    render()
    {
        return (
            <div className="map" >
                {
                    // this.props.viewPort.map((rowId) => (
                    // {<div key={rowId} className="itemLine">}
                            //{
                                // Object.keys(this.props.db[rowId]).map((value, index) => (
                                //     <Item key={`${rowId}-${index}`} yKoord={index} type={value}/>))
                            // }
                        // </div>
                    // ))






                    // this.props.viewPort.map((viewPortValue) => (
                    //
                    //     this.props.db.map((value, index) =>
                    //         {
                    //             return <ItemLine key={index} yKoord={index} itemsType={value}/>
                    //         }
                    //     )
                    //             .filter( item => item.key >= viewPortValue && item.key <= viewPortValue)
                    // ))


                    // db.map((value, index) => (
                    //     ))
                    //     .filter( item => item.key >= viewPort[0] && item.key <= viewPort[viewPort.length - 1] )
                    this.renderViewPort.bind(this)()
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
