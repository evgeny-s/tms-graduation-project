import update from 'immutability-helper';
import playerStatsConsts from "../consts/playerStats";

const initialState = {
    playerStats: {
        [playerStatsConsts.LEVEL]: 1,
        [playerStatsConsts.HIGHSCORE]: 0,
        [playerStatsConsts.EXPERIENCE]: 0,
        [playerStatsConsts.CERTIFICATES]: 0,
        [playerStatsConsts.SKILLS]: 0,
    },
};

function playerStatsReducer(state = initialState, action) {
    switch (action.type) {
        case `GET_SKILL`:
            return update(state, {
                playerStats: {
                    $merge: {
                        skills: state.playerStats.skills + 1,
                    }
                }
            });

        case 'GET_CERTIFICATE':
            return update(state, {
                playerStats: {
                    $merge: {
                        certificates: state.playerStats.certificates + 1,
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

export default playerStatsReducer;