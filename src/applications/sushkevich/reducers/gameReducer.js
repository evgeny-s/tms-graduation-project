import update from 'immutability-helper';
import mapRows from '../mapRows';
import mapItemTypes from '../consts/mapItemTypes';

const initialState = {
    viewportRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    mapRows,
    playerStats: {
        level: 1,
        hp: 5000,
        experience: 0,
        certifications: 0,
        skills: 0,
    },
    playerId: '6:10',
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVE_PLAYER':
            let playerId = document.querySelector(`.${mapItemTypes.PLAYER}`).id;
            let playerX = playerId.split(':')[1];
            let playerY = playerId.split(':')[0];

            if (action.payload === 37) {
                console.log(playerX);
                console.log(playerY);
            }

            return state;
        default:
            return state;
    }
}

export default gameReducer;