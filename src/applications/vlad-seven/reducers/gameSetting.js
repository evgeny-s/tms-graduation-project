import update from 'immutability-helper';
import C from '../constans/Reducers'

const initialState = {
    rows: 100,
    cells: 20,
    difficulty: 15,
    start: false
};

const setting = (state = initialState, action) => {

    switch (action.type) {

        case C.CHANGED_MAP:
            return update(state, {
                $merge:{
                    ...action.payload
                }
            });

        case C.START_GAME:
            return update(state, {
                $merge:{
                    start: !state.start,
                }
            });

        default:
            return state
    }
};

export default setting;