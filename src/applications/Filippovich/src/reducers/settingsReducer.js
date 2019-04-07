import update from 'immutability-helper';

const initialState = {
    inputNameValue: '',
    inputDifficultyValue: 1,
    isShowModal: false,
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
        case 'ON_DIFFICULTY_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    inputDifficultyValue: action.payload,
                }
            });
        case 'SHOW_MODAL':
            return update(state, {
                $merge: {
                    isShowModal: action.payload,
                }
            });
        default:
            return state;
    }
}

export default settingsReducer;