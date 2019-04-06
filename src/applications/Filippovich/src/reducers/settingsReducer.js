import update from 'immutability-helper';

const initialState = {
    inputNameValue: '',
    inputDifficultyValue: 1
};

function settingsReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'ON_INPUT_NAME_CHANGED':
            return update(state, {
                $merge: {
                    inputNameValue: action.payload,
                }
            });
        case 'ON_INPUT_LEVEL_CHANGED':
            return update(state, {
                $merge: {
                    inputDifficultyValue: action.payload,
                }
            });
        default:
            return state;
    }
}

export default settingsReducer;