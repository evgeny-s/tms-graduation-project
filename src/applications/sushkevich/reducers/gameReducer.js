import update from 'immutability-helper';
import map from '../map';
import mapItemTypes from '../consts/mapItemTypes';

const initialState = {
    viewportRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    viewportThreshhold: 3, // ВОПРОС! Нужно ли подобное хранить именно в стейте?
    map,
    mapUnits: {
        [mapItemTypes.PLAYER]: ['6:10'],
        [mapItemTypes.SKILL]: ['7:0', '3:11', '0:19'],
        [mapItemTypes.CERTIFICATE]: ['0:0'],
    },
    playerStats: {
        level: 1,
        highscore: 0,
        experience: 0,
        certifications: 0,
        skills: 0,
    },
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVE_PLAYER':
            let playerId = state.mapUnits.player[0];
            let playerX = +playerId.split(':')[1];
            let playerY = +playerId.split(':')[0];
            let newViewportRows = state.viewportRows;

            if (action.payload === 37) {
                playerX -= 1;
            }

            if (action.payload === 39) {
                playerX += 1;
            }

            if (action.payload === 38) { // вверх

                if ((playerY - state.viewportThreshhold) === state.viewportRows[0] && state.viewportRows[0] !== 0) {
                    newViewportRows = state.viewportRows.map((number) => {
                        return number -= 1;
                    })
                }

                playerY -= 1;
            }

            if (action.payload === 40) { // вниз

                if ((state.viewportRows[state.viewportRows.length - 1] - playerY) === state.viewportThreshhold) {
                    newViewportRows = state.viewportRows.map((number) => {
                        return number += 1;
                    })
                }

                playerY += 1;
            }

            return update(state, {
                $merge: {
                    mapUnits: {
                        ...state.mapUnits, // ВОПРОС! Как убрать этот spread ?
                        player: [`${playerY}:${playerX}`],
                    },
                    viewportRows: newViewportRows,
                }
            });
        default:
            return state;
    }
}

export default gameReducer;

// ВОПРОС! Как сделать фокус на карту ???