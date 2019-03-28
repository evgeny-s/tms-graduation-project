import update from 'immutability-helper';
import db from '../../db/db';

const initialState = {
    koordsPlayer: {
        x: 11,
        y: 12
    },
    viewPort: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    prevPoleType: 'pole',
    nextPoleType: 'pole',
    buttonText: 'Sound On',
    level: 1,
    health: 100,
    experience: 0,
    skills: 0,
    skillsLeftToCollect: 10,
    certifications: 0,
    certificationsLeftToCollect: 5,
    ultimate: 0,
    ultimateLeftToCollect: 3,
    medicine: 0,
    medicineLeftToCollect: 1,
    db: db.map,
};

function gamesReducer(state = initialState, action)
{
    switch (action.type) {
        case 'CERTIFICATION_COLLECTED':
            return update(state, {
                $merge: {
                    certifications: state.certifications + 1,
                }
            });
        case 'SKILL_COLLECTED':
            return update(state, {
                $merge: {
                    skills: state.skills + 1,
                }
            });
        case 'BOSS_WALL_RUINED':
            return update(state, {
                $merge: {
                    experience: state.experience + 100,
                }
            });
        case 'ITEM_EDITED':
            return update(state, {
                db: {
                    [state.koordsPlayer.y + action.payload.y]: {
                        [state.koordsPlayer.x + action.payload.x]: {
                            $set: 'player'
                        }
                    }
                },
                $merge: {
                    nextPoleType: 'pole'
                }
            });
        case 'ITEM_NOT_EDITED':
            let tempPoleType = state.db[state.koordsPlayer.y + action.payload.y][state.koordsPlayer.x + action.payload.x];
            console.log(tempPoleType);
            return update(state, {
                db: {
                    [state.koordsPlayer.y + action.payload.y]: {
                        [state.koordsPlayer.x + action.payload.x]: {
                            $set: 'player'
                        }
                    }
                },
                $merge: {
                    nextPoleType: tempPoleType,
                }
            });

        case 'KEY_UP':
            let newViewPort_up = state.viewPort;
            if (state.koordsPlayer.y <= state.viewPort[2] && state.koordsPlayer.y >= 3)
                newViewPort_up = [state.viewPort.slice(0, 1) - 1].concat(state.viewPort.slice(0, state.viewPort.length - 1));

            return update(state, {
                koordsPlayer: {
                    y: {
                        $set: state.koordsPlayer.y - 1
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        }
                    },
                },
                $merge: {
                    viewPort: newViewPort_up,
                    prevPoleType: state.nextPoleType
                }
            });
        case 'KEY_DOWN':
            let newViewPort_down = state.viewPort;
            if (state.koordsPlayer.y >= state.viewPort[7] && state.koordsPlayer.y <= state.db.length - 4)
                newViewPort_down = [].concat(state.viewPort.slice(1, state.viewPort.length), +state.viewPort.slice(state.viewPort.length - 1) + 1);

            return update(state, {
                koordsPlayer: {
                    y: {
                        $set: state.koordsPlayer.y + 1
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        }
                    },
                },
                $merge: {
                    viewPort: newViewPort_down,
                    prevPoleType: state.nextPoleType
                }
            });
        case 'KEY_LEFT':
            return update(state, {
                koordsPlayer: {
                    x: {
                        $set: state.koordsPlayer.x - 1
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        },
                    },
                },
                $merge: {
                    prevPoleType: state.nextPoleType,
                },
            });
        case 'KEY_RIGHT':
            return update(state, {
                koordsPlayer: {
                    x: {
                        $set: state.koordsPlayer.x + 1
                    }
                },
                db: {
                    [state.koordsPlayer.y]: {
                        [state.koordsPlayer.x]: {
                            $set: state.prevPoleType
                        },
                    },
                },
                $merge: {
                    prevPoleType: state.nextPoleType,
                },
            });
        case 'CLICK_SOUND_BUTTON':
            return update(state, {
                $merge: {
                    buttonText: action.payload,
                }
            });
        default:
            return state;
    }
}

export default gamesReducer;