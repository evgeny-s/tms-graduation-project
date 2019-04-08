import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ItemLine from '../itemLine';
import viewConsts from '../../consts/views';
import gameService from '../../services/gameService';
import levelService from '../../services/levelService';
import CreateMapService from '../../services/createMapService';
import itemTypes from '../../consts/itemTypes';
import keyTypes from '../../consts/keyTypes';
import './map.css';


const mapStateToProps = state => ({
    koordsPlayer: state.moves.koordsPlayer,
    viewPort: state.moves.viewPort,
    db: state.moves.db,
    logText: state.moves.logText,

    inputDifficultyValue: state.settings.inputDifficultyValue,

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

    bossesKilled: state.games.bossesKilled,
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
            payload: {
                exp: 100,
                log: '"Skill" has been collected.',
            },
        }),
        getCertification: () => dispatch({
            type: 'CERTIFICATION_COLLECTED',
            payload: {
                exp: 500,
                log: '"Certification" has been collected.',
            },
        }),
        getUltimate: () => dispatch({
            type: 'ULTIMATE_COLLECTED',
            payload: {
                exp: 1500,
                log: '"Ultimate skill" has been collected.',
            },
        }),
        getMedicine: () => dispatch({
            type: 'MEDICINE_COLLECTED',
            payload: {
                med: 1000,
                log: '"Medecine" has been collected.',
            },
        }),
        bossWallRuined: () => dispatch({
            type: 'BOSS_WALL_RUINED',
            payload: '"Boss wall" was destroyed.',
        }),
        bossAttacked: () => dispatch({
            type: 'BOSS_ATTACKED',
            payload: '"Boss" was attacked.',
        }),
        itemEdited: (side) => {
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
        itemNotEdited: (side) => {
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
                },
                log: 'Player made a move...',
            })
        },
        playerInjured: (count) => {
            let logText = '';
            if (count) {
                logText = 'Player was injured.';
            } else {
                logText = 'Player can\'t take this item.';
            }
            dispatch({
                type: 'PLAYER_INJURED',
                payload: {
                    count,
                    log: logText,
                },
            })
        },
        playerLevelUpped: () => dispatch({
            type: 'PLAYER_LEVEL_UPPED',
            payload: '"Player" level upped.',
        }),
        playerKilled: () => dispatch({
            type: 'PLAYER_KILLED',
            payload: 'Вы проиграли :(',
        }),
        playerWin: () => dispatch({
            type: 'PLAYER_WIN',
            payload: 'Вы победили :)',
        }),
        goToResults: () => dispatch({
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


class Map extends React.Component {
    _gameOver = (isWin) => {
        if (isWin) {
            this.props.playerWin();
        } else {
            this.props.playerKilled();
            this.props.goToResults();
        }
    };

    _itemLogic = (itemType, _keyType, koords, db, level) => {
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
                    this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
                    if (levelService.checkPlayerKilled(this.props.health)) {
                        this._gameOver(false);
                    }
                    this.props.bossWallRuined();
                    break;
                case itemTypes.BOSS:
                    this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
                    if (levelService.checkPlayerKilled(this.props.health)) {
                        this._gameOver(false);
                    }
                    this.props.bossAttacked();
                    if (levelService.checkBossLifes(this.props.bossesKilled)) {
                        this._gameOver(true);
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
            this.props.itemNotEdited(_keyType);
            this.props.playerInjured(levelService.checkLevelDamage(level, itemType));
            if (levelService.checkPlayerKilled(this.props.health)) {
                this._gameOver(false);
            }
        }
    };

    _moveLogic = (_keyType) => {
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

    _keyPressed = (e) => {
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

    componentWillMount() {
        this.props.createDB(new CreateMapService(this.props.inputDifficultyValue).createMap());
        document.addEventListener("keydown", this._keyPressed);
    };

    componentWillUnmount() {
        document.removeEventListener("keydown", this._keyPressed);
    };

    render() {
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

Map.propTypes = {
    koordsPlayer: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    viewPort: PropTypes.arrayOf(PropTypes.number),
    db: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    inputDifficultyValue: PropTypes.number,
    level: PropTypes.number,
    health: PropTypes.number,
    experience: PropTypes.number,
    experienceLeftToCollect: PropTypes.number,
    skills: PropTypes.number,
    skillsLeftToCollect: PropTypes.number,
    certifications: PropTypes.number,
    certificationsLeftToCollect: PropTypes.number,
    ultimate: PropTypes.number,
    ultimateLeftToCollect: PropTypes.number,
    bossesKilled: PropTypes.number,

    keyLeft: PropTypes.func,
    keyDown: PropTypes.func,
    keyUp: PropTypes.func,
    keyRight: PropTypes.func,
    getSkill: PropTypes.func,
    getCertification: PropTypes.func,
    getUltimate: PropTypes.func,
    getMedicine: PropTypes.func,
    bossWallRuined: PropTypes.func,
    bossAttacked: PropTypes.func,
    itemEdited: PropTypes.func,
    itemNotEdited: PropTypes.func,
    playerInjured: PropTypes.func,
    playerLevelUpped: PropTypes.func,
    playerKilled: PropTypes.func,
    playerWin: PropTypes.func,
    goToResults: PropTypes.func,
    createDB: PropTypes.func,


};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
