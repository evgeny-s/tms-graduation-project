import update from 'immutability-helper';
import ACTION from '../consts/Actions';
import S from '../consts/Select';

const initialState = {
    list: [],
    sortList: [],
    title: '',
    name: '',
    type: '',
    description: '',
    ingredients: '',
    index: 0
};

const form = (state = initialState, action) => {

    switch (action.type) {
        case ACTION.FETCH_COMPLETED:
            return update(state, {
                $merge: {
                    list: action.payload
                }
            });

        case ACTION.OPEN_FORM:
            return update(state, {
                $merge: {
                    title: initialState.title,
                    type: initialState.type
                }
            });

        case ACTION.ON_CHANGE:
            return update(state, {
                $merge: {
                    ...action.payload
                }
            });

        case ACTION.SORT_LIST:
            if (action.payload.includes(S.ALL_RECIPES)) {
                return update(state, {
                    $merge: {
                        sortList: state.list.slice(),
                        index: initialState.index,
                        title: initialState.title,
                        type: action.payload
                    }
                });
            } else {
                return update(state, {
                    $merge: {
                        sortList: state.list.filter(item => item.type.includes(action.payload)),
                        index: initialState.index,
                        title: initialState.title,
                        type: action.payload
                    }
                });
            }

        case ACTION.SORT_BY_TITLE:
            if (action.payload.trim().length) {
                let sortByTitle = state.list.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));

                return update(state, {
                    $merge: {
                        sortList: sortByTitle,
                        title: action.payload.trim(),
                        type: initialState.type,
                        index: initialState.index
                    }
                });
            } else {
                return update(state, {
                    $merge: {
                        sortList: [],
                        title: action.payload.trim(),
                        type: initialState.type,
                    }
                });
            }

        case ACTION.RECIPE_TO_STORE:
            let editRecipe = state.sortList.filter(item => item.id === action.payload)[0];

            return update(state, {
                $merge: {
                    id: editRecipe.id,
                    title: editRecipe.title,
                    type: editRecipe.type,
                    description: editRecipe.description.join('\n'),
                    ingredients: editRecipe.ingredients.join('\n'),
                }
            });

        case ACTION.RECIPE_EDIT:
            let index, list_edit = state.list.slice();

            state.list.forEach((item, i) => {
                if (item.id === action.payload.id) {
                    index = i
                }
            });

            list_edit.splice(index, 1, action.payload);

            return update(state, {
                $merge: {
                    list: list_edit,
                    sortList: list_edit.filter(item => item.type.includes(action.payload.type)),
                    id: initialState.id,
                    title: initialState.title,
                    type: initialState.type,
                    description: initialState.description,
                    ingredients: initialState.ingredients,
                }
            });


        case ACTION.RECIPE_ADD:
            let list_add = state.list.slice().concat([action.payload]);

            return update(state, {
                $merge: {
                    list: list_add,
                    sortList: list_add.filter(item => item.type.includes(action.payload.type)),
                    index: initialState.index,
                    id: initialState.id,
                    title: initialState.title,
                    type: initialState.type,
                    description: initialState.description,
                    ingredients: initialState.ingredients,
                }
            });

        case ACTION.SHOW_RECIPE:
            let item;
            state.sortList.forEach((recipe, i) => {
                if (recipe.id === action.payload) {
                    item = i
                }
            });

            return update(state, {
                $merge: {
                    index: item
                }
            });

        case ACTION.RECIPE_DELETE:
            return update(state, {
                $merge: {
                    index: initialState.index,
                    list: state.list.filter(item => item.id !== action.payload),
                    sortList: state.sortList.filter(item => item.id !== action.payload)
                }
            });

        default:
            return state;
    }
};

export default form;