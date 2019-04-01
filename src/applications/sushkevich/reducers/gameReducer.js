import update from 'immutability-helper';
import map from '../db/map';
import mapItemTypesConsts from '../consts/mapItemTypes';
import config from '../db/config';

const initialState = {
    viewportRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    viewportThreshold: config.viewportThreshold,
    map,
    playerCoordinateY: 6,
    playerCoordinateX: 10,
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
            let nextMap = state.map;

            Object.keys(nextMap).map((row) => {
                Object.keys(nextMap[row]).map((col) => {
                    if (nextMap[row][col] === mapItemTypesConsts.BOSS_WALL) {
                        nextMap[row][col] = mapItemTypesConsts.TRACK;
                    }
                })
            });

            return update(state, {
                $merge: {
                    map: nextMap,
                },
            });

        default:
            return state;
    }
}

export default gameReducer;

// ВОПРОС! Как сделать фокус на карту ???