import update from 'immutability-helper';
import db from '../../db/db';

const initialState = {
    koords: {
        x: 10,
        y: 5
    },
    poleType: 'player',
    buttonText: 'Sound On'
};

function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ACTIVE':
            db.map[action.payload.y][action.payload.x] = action.payload.poleType;
            return update(state, {
                $merge: {
                    poleType: action.payload.poleType
                }
            });
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
            if (state.koords.y <= 0 ||
                db.map[state.koords.y + action.payload.y][state.koords.x + action.payload.x] === 'wall')
                   return state;

            let newKoords_up = {};
            newKoords_up.x = state.koords.x + action.payload.x;
            newKoords_up.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge: {
                    koords: newKoords_up
                },
            });
        case 'KEY_DOWN':
            if (state.koords.y >= 9 ||
                db.map[state.koords.y + action.payload.y][state.koords.x + action.payload.x] === 'wall')
                return state;

            let newKoords_down = {};
            newKoords_down.x = state.koords.x + action.payload.x;
            newKoords_down.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge: {
                    koords: newKoords_down
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