import update from 'immutability-helper';

const initialState = {
    start: null
};

function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return update(state, {
                $merge: {
                    start: '',
                }
            });
        default:
            return state;
    }
}

export default gamesReducer;