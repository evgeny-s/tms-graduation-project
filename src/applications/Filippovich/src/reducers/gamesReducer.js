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
            return update(state, {
                $merge: {
                    koords: action.payload,
                }
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