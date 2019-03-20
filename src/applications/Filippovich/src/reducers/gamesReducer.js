import update from 'immutability-helper';

const initialState = {
    koords: {
        x: 0,
        y: 0
    },
    buttonText: 'Sound On'
};

function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'KEY_UP':
            let newKoords_up = {};
            newKoords_up.x =  state.koords.x + action.payload.x;
            newKoords_up.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge: {
                    koords: newKoords_up
                },
            });
        case 'KEY_DOWN':
            let newKoords_down = {};
            newKoords_down.x = state.koords.x + action.payload.x;
            newKoords_down.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge:  {
                    koords: newKoords_down
                },
            });
        case 'KEY_LEFT':
            let newKoords_left = {};
            newKoords_left.x = state.koords.x + action.payload.x;
            newKoords_left.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge: {
                    koords: newKoords_left
                },
            });
        case 'KEY_RIGHT':
            let newKoords_right = {};
            newKoords_right.x = state.koords.x + action.payload.x;
            newKoords_right.y = state.koords.y + action.payload.y;
            return update(state, {
                $merge:  {
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