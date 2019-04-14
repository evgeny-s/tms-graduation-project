import update from 'immutability-helper';
import ACTION from '../consts/Actions';

const initialState = {
    editRecipe: false,
    openForm: false,
};

const control = (state = initialState, action) => {

    switch (action.type) {

        case ACTION.OPEN_FORM:
            return update(state, {
                $merge: {
                    openForm: !state.openForm,
                }
            });

        case ACTION.RECIPE_EDIT:
            return update(state, {
                $merge: {
                    editRecipe: false,
                    openForm: false,
                }
            });


        case ACTION.RECIPE_ADD:
            return update(state, {
                $merge: {
                    openForm: false,
                }
            });


        case ACTION.RECIPE_TO_STORE:
            return update(state, {
                $merge: {
                    editRecipe: true,
                    openForm: true,
                }
            });

        default:
            return state;
    }
};

export default control;