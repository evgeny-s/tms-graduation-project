import update from 'immutability-helper';

const initialState = {
    playerList: [],
};

function HighestScoreReducer(state = initialState, action)
{
    switch (action.type) {
        case 'FETCH_COMPLETED':
            return update(state, {
                $merge: {
                    playerList: action.payload,
                }
            });
        default:
            return state;

    }
}

export default HighestScoreReducer;

