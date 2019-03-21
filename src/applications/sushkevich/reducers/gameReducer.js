import update from 'immutability-helper';
import mapRows from '../mapRows';

const initialState = {
    viewportRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    mapRows,
    playerStats: {
        level: 1,
        hp: 5000,
        experience: 0,
        certifications: 0,
        skills: 0,
    }
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default gameReducer;