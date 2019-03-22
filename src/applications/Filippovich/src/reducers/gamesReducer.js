import update from 'immutability-helper';
import db from '../../db/db';

const initialState = {
    koords: {
        x: 10,
        y: 12
    },
    viewPort: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
    poleType: 'player',
    buttonText: 'Sound On'
};

function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_ITEM_COLOR':
            return update(state, {
                $merge: {
                    koords: {
                        x: action.payload.x,
                        y: action.payload.y,
                    },
                    poleType: action.payload.poleType
                }
            });
        case 'KEY_UP':
            if (state.koords.y <= state.viewPort[0] ||
                db.map[state.koords.y + action.payload.y][state.koords.x + action.payload.x] === 'wall')
                   return state;

            let newKoords_up = {};
            newKoords_up.x = state.koords.x + action.payload.x;
            newKoords_up.y = state.koords.y + action.payload.y;

            let newViewPort_up = state.viewPort;
            if (state.koords.y <= state.viewPort[2] && state.koords.y >= 3)
                newViewPort_up = [state.viewPort.slice(0, 1) - 1].concat(  state.viewPort.slice(0, state.viewPort.length - 1) );

            return update(state, {
                $merge: {
                    koords: newKoords_up,
                    viewPort: newViewPort_up,
                },
            });
        case 'KEY_DOWN':
            if (state.koords.y >= state.viewPort[9] ||
                db.map[state.koords.y + action.payload.y][state.koords.x + action.payload.x] === 'wall')
                return state;

            let newKoords_down = {};
            newKoords_down.x = state.koords.x + action.payload.x;
            newKoords_down.y = state.koords.y + action.payload.y;

            let newViewPort_down = state.viewPort;
            if (state.koords.y >= state.viewPort[7] && state.koords.y <= db.map.length - 4)
                newViewPort_down = [].concat( state.viewPort.slice(1, state.viewPort.length), +state.viewPort.slice(state.viewPort.length - 1) + 1 );

            return update(state, {
                $merge: {
                    koords: newKoords_down,
                    viewPort: newViewPort_down,
                },
            });
        case 'KEY_LEFT':
            if (state.koords.x <= 0 ||
                db.map[state.koords.y + action.payload.y][state.koords.x + action.payload.x] === 'wall')
                return state;

            let newKoords_left = {};
            newKoords_left.x = state.koords.x + action.payload.x;
            newKoords_left.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge: {
                    koords: newKoords_left
                },
            });
        case 'KEY_RIGHT':
            if (state.koords.x >= 19 ||
                db.map[state.koords.y + action.payload.y][state.koords.x + action.payload.x] === 'wall')
                return state;

            let newKoords_right = {};
            newKoords_right.x = state.koords.x + action.payload.x;
            newKoords_right.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge: {
                    koords: newKoords_right
                },
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