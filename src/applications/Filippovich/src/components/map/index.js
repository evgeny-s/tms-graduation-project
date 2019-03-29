import React from 'react';
import {connect} from 'react-redux';
import './map.css';
import ItemLine from '../itemLine';
import gameService from '../../services/gameService';
import itemTypes from '../../consts/itemTypes';
import keyTypes from '../../consts/keyTypes';
import playerStats from '../../consts/playerStats';


const mapStateToProps = state => ({
    koordsPlayer: state.games.koordsPlayer,
    viewPort: state.games.viewPort,

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
        getCertification: () =>
            dispatch({
                type: 'CERTIFICATION_COLLECTED',
            }),
        getSkill: () =>
            dispatch({
                type: 'SKILL_COLLECTED',
            }),
        bossWallRuined: () =>
            dispatch({
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
                if (!gameService.isWall(keyType, this.props.koordsPlayer, this.props.db)) {
                    if (gameService.isNextItem(itemTypes.POLE, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.itemNotEdited(keyType);
                    }

                    if (gameService.isNextItem(itemTypes.SKILL, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.getSkill();
                        this.props.itemEdited(keyType);
                    }

                    if (gameService.isNextItem(itemTypes.CERTIFICATION, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT) {
                            this.props.getCertification();
                            this.props.itemEdited(keyType);
                        } else {
                            this.props.itemNotEdited(keyType);
                        }
                    }

                    if (gameService.isNextItem(itemTypes.BOSSWALLSMALL, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT
                            && this.props.certifications >= playerStats[this.props.level].CERTIFICATION_COUNT) {
                            this.props.bossWallRuined();
                            this.props.itemEdited(keyType);
                        } else {
                            this.props.itemNotEdited(keyType);
                        }
                    }

                    if (gameService.isNextItem(itemTypes.BOSS, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT
                            && this.props.certifications >= playerStats[this.props.level].CERTIFICATION_COUNT) {

                        }
                    }

                    this.props.keyLeft();
                }
                break;
            case 40:
                keyType = keyTypes.DOWN;
                if (!gameService.isWall(keyType, this.props.koordsPlayer, this.props.db)) {
                    if (gameService.isNextItem(itemTypes.POLE, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.itemNotEdited(keyType);
                    }

                    if (gameService.isNextItem(itemTypes.SKILL, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.getSkill();
                        this.props.itemEdited(keyType);
                    }

                    if (gameService.isNextItem(itemTypes.CERTIFICATION, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT) {
                            this.props.getCertification();
                            this.props.itemEdited(keyType);
                        } else {
                            this.props.itemNotEdited(keyType);
                        }
                    }

                    if (gameService.isNextItem(itemTypes.BOSSWALLSMALL, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT
                            && this.props.certifications >= playerStats[this.props.level].CERTIFICATION_COUNT) {
                            this.props.bossWallRuined();
                            this.props.itemEdited(keyType);
                        } else {
                            this.props.itemNotEdited(keyType);
                        }
                    }


                    this.props.keyDown();
                }
                break;
            case 38:
                keyType = keyTypes.UP;
                if (!gameService.isWall(keyType, this.props.koordsPlayer, this.props.db)) {
                    if (gameService.isNextItem(itemTypes.POLE, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.itemNotEdited(keyType);
                    }

                    if (gameService.isNextItem(itemTypes.SKILL, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.getSkill();
                        this.props.itemEdited(keyType);

                    }

                    if (gameService.isNextItem(itemTypes.CERTIFICATION, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT) {
                            this.props.getCertification();
                            this.props.itemEdited(keyType);
                        } else {
                            this.props.itemNotEdited(keyType);
                        }
                    }

                    if (gameService.isNextItem(itemTypes.BOSSWALLSMALL, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT
                            && this.props.certifications >= playerStats[this.props.level].CERTIFICATION_COUNT) {
                            this.props.bossWallRuined();
                            this.props.itemEdited(keyType);
                        } else {
                            this.props.itemNotEdited(keyType);
                        }
                    }

                    this.props.keyUp();
                }
                break;
            case 39:
                keyType = keyTypes.RIGHT;
                if (!gameService.isWall(keyType, this.props.koordsPlayer, this.props.db)) {
                    if (gameService.isNextItem(itemTypes.POLE, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.itemNotEdited(keyType);
                    }

                    if (gameService.isNextItem(itemTypes.SKILL, keyType, this.props.koordsPlayer, this.props.db)) {
                        this.props.getSkill();
                        this.props.itemEdited(keyType);
                    }

                    if (gameService.isNextItem(itemTypes.CERTIFICATION, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT) {
                            this.props.getCertification();
                            this.props.itemEdited(keyType);
                        }
                        else {
                            this.props.itemNotEdited(keyType);
                        }
                    }

                    if (gameService.isNextItem(itemTypes.BOSSWALLSMALL, keyType, this.props.koordsPlayer, this.props.db)) {
                        if (this.props.skills >= playerStats[this.props.level].SKILL_COUNT
                            && this.props.certifications >= playerStats[this.props.level].CERTIFICATION_COUNT) {
                            this.props.bossWallRuined();
                            this.props.itemEdited(keyType);
                        } else {
                            this.props.itemNotEdited(keyType);
                        }
                    }


                    this.props.keyRight();
                }
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
