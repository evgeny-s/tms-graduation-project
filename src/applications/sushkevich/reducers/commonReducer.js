import update from 'immutability-helper';
import viewsConsts from '../consts/views';
import headerConsts from '../consts/headerMessages';

const initialState = {
    view: viewsConsts.GAME,
    headerMessage: headerConsts.default,
};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case 'PLAY_GAME':
            return update(state, {
                $merge: {
                    view: viewsConsts.GAME,
                }
            });
        default:
            return state;
    }
}

export default commonReducer;