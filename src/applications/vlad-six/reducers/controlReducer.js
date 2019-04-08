import update from 'immutability-helper';
import A from '../consts/Actions';

const initialState = {
    editRecipe: false,
    openForm: false,
};

const control = (state = initialState, action) => {

    switch (action.type) {

        case A.OPEN_FORM:
            return update(state, {
                $merge: {
                    openForm: !state.openForm,
                }
            });

        case A.RECIPE_EDIT:
            return update(state, {
                $merge: {
                    editRecipe: false,
                    openForm: false,
                }
            });


        case A.RECIPE_ADD:
            return update(state, {
                $merge: {
                    openForm: false,
                }
            });


        case A.RECIPE_TO_STORE:
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