import update from 'immutability-helper';
import playerStats from '../consts/playerStats';

const initialState = {
    gameOver: false,
    buttonText: 'Sound On',
    level: 1,
    health: playerStats['1'].PLAYER_HEALTH,
    experience: 0,
    experienceLeftToCollect: playerStats['1'].PLAYER_EXPERIENCE,
    skills: 0,
    skillsLeftToCollect: playerStats['1'].SKILL_COUNT,
    certifications: 0,
    certificationsLeftToCollect: 0,
    ultimate: 0,
    ultimateLeftToCollect: 0,
};

function gamesReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SKILL_COLLECTED':
            return update(state, {
                $merge: {
                    skills: state.skills + 1,
                    experience: state.experience + action.payload,
                }
            });
        case 'CERTIFICATION_COLLECTED':
            return update(state, {
                $merge: {
                    certifications: state.certifications + 1,
                    experience: state.experience + action.payload,
                }
            });
        case 'ULTIMATE_COLLECTED':
            return update(state, {
                $merge: {
                    ultimate: state.ultimate + 1,
                    experience: state.experience + action.payload,
                }
            });
        case 'MEDICINE_COLLECTED':
            return update(state, {
                $merge: {
                    health: state.health + action.payload,
                }
            });
        case 'BOSS_WALL_RUINED':
            return update(state, {
                $merge: {
                    experience: state.experience + 100,
                }
            });
        case 'PLAYER_INJURED':
            return update(state, {
                $merge: {
                    health: state.health - action.payload,
                }
            });
        case 'PLAYER_KILLED':
            return update(state, {
                $merge: {
                    gameOver: true,
                }
            });
        case 'PLAYER_LEVEL_UPPED':
            let levelStats = {};

            levelStats['health'] = playerStats[state.level + 1].PLAYER_HEALTH;
            levelStats['experienceLeftToCollect'] = playerStats[state.level + 1].PLAYER_EXPERIENCE;
            levelStats['skillsLeftToCollect'] = playerStats[state.level + 1].SKILL_COUNT;
            levelStats['certificationsLeftToCollect'] = playerStats[state.level + 1].CERTIFICATION_COUNT;
            levelStats['level'] = state.level + 1;

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