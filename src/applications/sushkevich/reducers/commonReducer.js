import update from 'immutability-helper';
import viewsConsts from '../consts/views';

const initialState = {
    view: viewsConsts.DESCRIPTION,
};

function commonReducer(state = initialState, action) {
    switch (action.type) {

        case 'PLAY_GAME':
            return update(state, {
                $merge: {
                    view: viewsConsts.GAME,
                }
            });

        case 'GAME_FINISHED':
            return update(state, {
                $merge: {
                    view: viewsConsts.RESULT,
                }
            });

        default:
            return state;
    }
}

export default commonReducer;