import update from 'immutability-helper';
import map from '../db/map';
import mapItemTypesConsts from '../consts/mapItemTypes';
import playerStatsConsts from '../consts/playerStats';
import config from '../db/config';

const initialState = {
    viewportRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    viewportThreshold: config.viewportThreshold,
    map,
    playerCoordinateY: 6,
    playerCoordinateX: 10,
    playerStats: {
        [playerStatsConsts.LEVEL]: 1,
        [playerStatsConsts.HIGHSCORE]: 0,
        [playerStatsConsts.EXPERIENCE]: 0,
        [playerStatsConsts.CERTIFICATES]: 0,
        [playerStatsConsts.SKILLS]: 0,
    },
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

        case `GET_SKILL`:
            return update(state, {
                playerStats: {
                    $merge: {
                        skills: state.playerStats.skills + 1,
                    }
                }
            });
        case 'LEVEL_UP':
            return update(state, {
                playerStats: {
                    $merge: {
                        level: state.playerStats.level + 1,
                    }
                }
            });

        default:
            return state;
    }
}

export default gameReducer;

// ВОПРОС! Как сделать фокус на карту ???