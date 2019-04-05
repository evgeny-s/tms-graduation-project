import React from 'react';
import {connect} from 'react-redux';
import './map.css';
import ItemLine from '../itemLine';
import viewConsts from '../../consts/views';
import gameService from '../../services/gameService';
import levelService from '../../services/levelService';
import CreateMapService from '../../services/createMapService';
import itemTypes from '../../consts/itemTypes';
import keyTypes from '../../consts/keyTypes';


const mapStateToProps = state => ({
    koordsPlayer: state.moves.koordsPlayer,
    viewPort: state.moves.viewPort,
    db: state.moves.db,

    inputLevelValue: state.settings.inputLevelValue,

    level: state.games.level,
    health: state.games.health,
    experience: state.games.experience,
    experienceLeftToCollect: state.games.experienceLeftToCollect,
    skills: state.games.skills,
    skillsLeftToCollect: state.games.skillsLeftToCollect,
    certifications: state.games.certifications,
    certificationsLeftToCollect: state.games.certificationsLeftToCollect,
    ultimate: state.games.ultimate,
    ultimateLeftToCollect: state.games.ultimateLeftToCollect,
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
        getSkill: () => dispatch({
            type: 'SKILL_COLLECTED',
            payload: 100,
        }),
        getCertification: () => dispatch({
            type: 'CERTIFICATION_COLLECTED',
            payload: 500,
        }),
        getUltimate: () => dispatch({
            type: 'ULTIMATE_COLLECTED',
            payload: 1500,
        }),
        getMedicine: () => dispatch({
            type: 'MEDICINE_COLLECTED',
            payload: 1000,
        }),
        bossWallRuined: () => dispatch({
            type: 'BOSS_WALL_RUINED'
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
        },
        itemNotEdited: (side) =>
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
                type: 'ITEM_NOT_EDITED',
                payload: {
                    x: _x,
                    y: _y,
                }
            })
        },
        playerInjured: (count) => dispatch({
            type: 'PLAYER_INJURED',
            payload: count,
        }),
        playerLevelUpped: () => dispatch({
            type: 'PLAYER_LEVEL_UPPED',
        }),
        // playerKilled: () => dispatch({
        //     type: 'PLAYER_KILLED',
        // }),
        playerKilled: () => dispatch({
            type: 'CHANGE_VIEW',
            payload: viewConsts.RESULTS,
        }),

        createDB: ([map, playerKoords, viewPort]) => dispatch({
            type: 'CREATE_DB',
            payload: {
                map,
                playerKoords,
                viewPort,
            },
        }),
    }
);


class Map extends React.Component
{
    _itemLogic = (itemType, _keyType, koords, db, level) =>
    {
        if (levelService.checkLevelLogic(level, itemType)) {
            switch (itemType) {
                case itemTypes.SKILL:
                    this.props.getSkill();
                    break;
                case itemTypes.CERTIFICATION:
                    this.props.getCertification();
                    break;
                case itemTypes.ULTIMATE:
                    this.props.getUltimate();
                    break;
                case itemTypes.MEDECINE:
                    this.props.getMedicine();
                    break;
                case itemTypes.BOSSWALLSMALL:
                case itemTypes.BOSSWALLBIG:
                case itemTypes.BOSS:
                    this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
                    if (levelService.checkPlayerKilled(this.props.health)) {
                        this.props.playerKilled();
                    }
                    break;
                default:
                    break;
            }
            this.props.itemEdited(_keyType);
            if (levelService.checkLevelUp(level, this.props.skills, this.props.certifications, this.props.ultimate)) {
                this.props.playerLevelUpped();
            }
        } else {
            this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
            if (levelService.checkPlayerKilled(this.props.health)) {
                this.props.playerKilled();
            }
            this.props.itemNotEdited(_keyType);
        }
    };

    _moveLogic = (_keyType) =>
    {
        if (!gameService.isWall(_keyType, this.props.koordsPlayer, this.props.db)) {
            if (gameService.isNextItem(itemTypes.POLE, _keyType, this.props.koordsPlayer, this.props.db)) {
                this.props.itemNotEdited(_keyType);
            }
            for (let item in itemTypes) {
                if (itemTypes[item] !== itemTypes.POLE && itemTypes[item] !== itemTypes.PLAYER && itemTypes[item] !== itemTypes.WALL) {
                    if (gameService.isNextItem(itemTypes[item], _keyType, this.props.koordsPlayer, this.props.db)) {
                        this._itemLogic(itemTypes[item], _keyType, this.props.koordsPlayer, this.props.db, this.props.level);
                    }
                }
            }
            return true;
        } else
            return false;
    };

    _keyPressed = (e) =>
    {
        let keyType;
        switch (e.keyCode) {
            case 37:
                keyType = keyTypes.LEFT;
                if (this._moveLogic(keyType))
                    this.props.keyLeft();
                break;
            case 40:
                keyType = keyTypes.DOWN;
                if (this._moveLogic(keyType))
                    this.props.keyDown();
                break;
            case 38:
                keyType = keyTypes.UP;
                if (this._moveLogic(keyType))
                    this.props.keyUp();
                break;
            case 39:
                keyType = keyTypes.RIGHT;
                if (this._moveLogic(keyType))
                    this.props.keyRight();
                break;
            default:
                break;
        }
    };

    componentWillMount()
    {
        this.props.createDB(new CreateMapService(this.props.inputLevelValue).createMap());


        document.addEventListener("keydown", this._keyPressed);
    };

    componentWillUnmount()
    {
        document.removeEventListener("keydown", this._keyPressed);
    };

    render()
    {
        return (
            <div className="map">
                {
                    this.props.viewPort.map((yIndex) => (
                        <ItemLine key={yIndex} yKoord={yIndex} itemsType={this.props.db[yIndex]}/>))
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
