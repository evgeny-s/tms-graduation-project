import update from 'immutability-helper';
import map from '../db/map';
import mapItemTypesConsts from '../consts/mapItemTypes';
import config from '../db/config';

let initialPlayerY;
let initialPlayerX;

outer: for (let row in map) {
    for (let col in map[row]) {
        if (map[row][col] === mapItemTypesConsts.PLAYER) {
            initialPlayerY = +row;
            initialPlayerX = +col;
            break outer;
        }
    }
}

const initialState = {
    viewportRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    viewportThreshold: config.viewportThreshold,
    map,
    playerCoordinateY: initialPlayerY,
    playerCoordinateX: initialPlayerX,
};

function gameReducer(state = initialState, action) {
    switch (action.type) {

        case 'MOVE_LEFT':
            return update(state, {
                $merge: {
                    playerCoordinateX: state.playerCoordinateX - 1,
                },
                map: {
                    [state.playerCoordinateY]: {
                        [state.playerCoordinateX]: {
                            $set: mapItemTypesConsts.TRACK
                        },
                        [state.playerCoordinateX - 1]: {
                            $set: mapItemTypesConsts.PLAYER
                        }
                    }
                },
            });

        case 'MOVE_RIGHT':
            return update(state, {
                $merge: {
                    playerCoordinateX: state.playerCoordinateX + 1,
                },
                map: {
                    [state.playerCoordinateY]: {
                        [state.playerCoordinateX]: {
                            $set: mapItemTypesConsts.TRACK
                        },
                        [state.playerCoordinateX + 1]: {
                            $set: mapItemTypesConsts.PLAYER
                        }
                    }
                },
            });

        case 'MOVE_UP':
            return update(state, {
                $merge: {
                    playerCoordinateY: state.playerCoordinateY - 1,
                },
                map: {
                    [state.playerCoordinateY]: {
                        [state.playerCoordinateX]: {
                            $set: mapItemTypesConsts.TRACK
                        }
                    },
                    [state.playerCoordinateY - 1]: {
                        [state.playerCoordinateX]: {
                            $set: mapItemTypesConsts.PLAYER
                        }
                    },
                },
            });

        case 'MOVE_DOWN':
            return update(state, {
                $merge: {
                    playerCoordinateY: state.playerCoordinateY + 1,
                },
                map: {
                    [state.playerCoordinateY]: {
                        [state.playerCoordinateX]: {
                            $set: mapItemTypesConsts.TRACK
                        }
                    },
                    [state.playerCoordinateY + 1]: {
                        [state.playerCoordinateX]: {
                            $set: mapItemTypesConsts.PLAYER
                        }
                    },
                },
            });

        case 'SCROLL_MAP':
            return update(state, {
                $merge: {
                    viewportRows: action.payload,
                }
            });

        case 'BREAK_BOSS_WALLS':
            let newState = state;

            Object.keys(state.map).map((row) => {
                Object.keys(state.map[row]).map((col) => {
                    if (state.map[row][col] === mapItemTypesConsts.BOSS_WALL) {
                        newState = update(newState, {
                            map: {
                                [row]: {
                                    [col]: {
                                        $set: mapItemTypesConsts.TRACK,
                                    }
                                }
                            }
                        });
                    }
                })
            });

            return newState;

        case 'RESET_MAP':
            return update(state, {
                $merge: {
                    ...initialState
                }
            });

        default:
            return state;
    }
}

export default gameReducer;
