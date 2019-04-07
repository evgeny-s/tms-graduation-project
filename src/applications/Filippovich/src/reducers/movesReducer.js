import update from 'immutability-helper';
// import db from '../../db/db';
import itemTypes from '../consts/itemTypes';

const initialState = {
    koordsPlayer: {
        // x: 0,
        // y: 0
    },
    // viewPort: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    viewPort: [],
    prevPoleType: itemTypes.POLE,
    nextPoleType: itemTypes.POLE,
    // db: db.map,
    db: [],
    movesCount: 0,
};

function movesReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'CREATE_DB': return update(state, {
           $merge: {
               viewPort: action.payload.viewPort,
               db: action.payload.map,
               koordsPlayer: {
                  x: action.payload.playerKoords.x,
                  y: action.payload.playerKoords.y,
               },
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
                    prevPoleType: state.nextPoleType,
                    movesCount: state.movesCount + 1,
                }
            });
        case 'KEY_DOWN':
            let newViewPort_down = state.viewPort;
            if (state.koordsPlayer.y >= state.viewPort[7] && state.koordsPlayer.y <= state.db.length - 4)
                newViewPort_down = [].concat(state.viewPort.slice(1, state.viewPort.length),
                    +state.viewPort.slice(state.viewPort.length - 1) + 1);

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
                    prevPoleType: state.nextPoleType,
                    movesCount: state.movesCount + 1,
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
                    movesCount: state.movesCount + 1,
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
                    movesCount: state.movesCount + 1,
                },
            });
        case 'ITEM_EDITED':
            return update(state, {
                db: {
                    [state.koordsPlayer.y + action.payload.y]: {
                        [state.koordsPlayer.x + action.payload.x]: {
                            $set: itemTypes.PLAYER
                        }
                    }
                },
                $merge: {
                    nextPoleType: itemTypes.POLE
                }
            });
        case 'ITEM_NOT_EDITED':
            let tempPoleType = state.db[state.koordsPlayer.y + action.payload.y][state.koordsPlayer.x + action.payload.x];
            return update(state, {
                db: {
                    [state.koordsPlayer.y + action.payload.y]: {
                        [state.koordsPlayer.x + action.payload.x]: {
                            $set: itemTypes.PLAYER
                        }
                    }
                },
                $merge: {
                    nextPoleType: tempPoleType,
                }
            });
        default:
            return state;
    }
}

export default movesReducer;