import React from 'react';
import {connect} from 'react-redux';
import './map.css';
import ItemLine from '../itemLine';
import gameService from '../../services/gameService';
import levelService from '../../services/levelService';
import itemTypes from '../../consts/itemTypes';
import keyTypes from '../../consts/keyTypes';
import playerStats from '../../consts/playerStats';


const mapStateToProps = state => ({
    koordsPlayer: state.moves.koordsPlayer,
    viewPort: state.moves.viewPort,
    db: state.moves.db,

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
        playerInjured : (count) => dispatch({
            type: 'PLAYER_INJURED',
            payload: count,
        }),
        playerLevelUpped: () => dispatch({
            type: 'PLAYER_LEVEL_UPPED',
        })
    }
);


class Map extends React.Component
{
    _moveLogic = (_keyType) =>
    {
        if (!gameService.isWall(_keyType, this.props.koordsPlayer, this.props.db)) {
            if (gameService.isNextItem(itemTypes.POLE, _keyType, this.props.koordsPlayer, this.props.db)) {
                this.props.itemNotEdited(_keyType);
            }
            if (gameService.isNextItem(itemTypes.SKILL, _keyType, this.props.koordsPlayer, this.props.db)) {
                if (levelService.checkLevelLogic(this.props.level, itemTypes.SKILL)) {
                    this.props.getSkill();
                    this.props.itemEdited(_keyType);
                    if (levelService.checkLevelUp(this.props.level, itemTypes.SKILL, this.props.skills)) {
                        this.props.playerLevelUpped();
                    }
                } else {
                    this.props.playerInjured();
                }

            }
            if (gameService.isNextItem(itemTypes.CERTIFICATION, _keyType, this.props.koordsPlayer, this.props.db)) {

                let levelLogic = levelService.checkLevelLogic(this.props.level, itemTypes.CERTIFICATION, this.props.skills);
                if (levelLogic.accepted) {
                        this.props.getCertification();
                        this.props.itemEdited(_keyType);
                } else {
                    this.props.playerInjured(levelLogic[1]);
                    this.props.itemNotEdited(_keyType);

                }

                // if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT) {
                //     this.props.getCertification();
                //     this.props.itemEdited(_keyType);
                // } else {
                //     this.props.itemNotEdited(_keyType);
                // }
            }

            if (gameService.isNextItem(itemTypes.ULTIMATE, _keyType, this.props.koordsPlayer, this.props.db)) {

                this.props.getUltimate();
                this.props.itemEdited(_keyType);
            }


            if (gameService.isNextItem(itemTypes.MEDECINE, _keyType, this.props.koordsPlayer, this.props.db)) {
                this.props.getMedicine();
                this.props.itemEdited(_keyType);
            }


            if (gameService.isNextItem(itemTypes.BOSSWALLSMALL, _keyType, this.props.koordsPlayer, this.props.db)) {
                if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT
                    && this.props.certifications >= playerStats[this.props.level].CERTIFICATION_COUNT) {
                    this.props.bossWallRuined();
                    this.props.itemEdited(_keyType);
                } else {
                    this.props.itemNotEdited(_keyType);
                }
            }

            if (gameService.isNextItem(itemTypes.BOSS, _keyType, this.props.koordsPlayer, this.props.db)) {
                if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT
                    && this.props.certifications >= playerStats[this.props.level].CERTIFICATION_COUNT) {

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
        document.addEventListener("keydown", this._keyPressed);
    };

    componentWillUnmout()
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
