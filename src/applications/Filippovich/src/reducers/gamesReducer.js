import update from 'immutability-helper';
import playerStats from '../consts/playerStats';
import rules from '../consts/rules';

const initialState = {
    buttonText: 'Sound On',
    level: 1,
    ruleText: rules.level1,
    logText: 'The game has begun...',
    health: playerStats['1'].PLAYER_HEALTH,
    experience: 0,
    experienceLeftToCollect: playerStats['1'].PLAYER_EXPERIENCE,
    skills: 0,
    skillsLeftToCollect: playerStats['1'].SKILL_COUNT,
    certifications: 0,
    certificationsLeftToCollect: 0,
    ultimate: 0,
    ultimateLeftToCollect: 0,
    bossesKilled: 0,
};

function gamesReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'SKILL_COLLECTED':
            return update(state, {
                $merge: {
                    skills: state.skills + 1,
                    experience: state.experience + action.payload.exp,
                    logText: action.payload.log,
                }
            });
        case 'CERTIFICATION_COLLECTED':
            return update(state, {
                $merge: {
                    certifications: state.certifications + 1,
                    experience: state.experience + action.payload.exp,
                    logText: action.payload.log,
                }
            });
        case 'ULTIMATE_COLLECTED':
            return update(state, {
                $merge: {
                    ultimate: state.ultimate + 1,
                    experience: state.experience + action.payload.exp,
                    logText: action.payload.log,
                }
            });
        case 'MEDICINE_COLLECTED':
            return update(state, {
                $merge: {
                    health: state.health + action.payload.med,
                    logText: action.payload.log,
                }
            });
        case 'BOSS_WALL_RUINED':
            return update(state, {
                $merge: {
                    experience: state.experience + 100,
                    logText: action.payload,
                }
            });
        case 'BOSS_ATTACKED':
            return update(state, {
                $merge: {
                    bossesKilled: state.bossesKilled + 1,
                    logText: action.payload,

                }
            });
        case 'PLAYER_INJURED':
            return update(state, {
                $merge: {
                    health: state.health - action.payload.count,
                    logText: action.payload.log,
                }
            });
        case 'ITEM_NOT_EDITED':
            return update(state, {
                $merge: {
                    logText: action.log,
                }
            });
        case 'PLAYER_LEVEL_UPPED':
            let levelStats = {};
            levelStats['health'] = playerStats[state.level + 1].PLAYER_HEALTH;
            levelStats['experienceLeftToCollect'] = playerStats[state.level + 1].PLAYER_EXPERIENCE;
            levelStats['skillsLeftToCollect'] = playerStats[state.level + 1].SKILL_COUNT;
            levelStats['certificationsLeftToCollect'] = playerStats[state.level + 1].CERTIFICATION_COUNT;
            levelStats['ultimateLeftToCollect'] = playerStats[state.level + 1].ULTIMATE_COUNT;
            levelStats['level'] = state.level + 1;
            levelStats['ruleText'] = rules[`level${state.level + 1}`];
            levelStats['logText'] = action.payload;
            return update(state, {
                $merge: levelStats,
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