import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import recipeService from '../service/RecipeService';
import RECIPE from '../consts/Recipe';
import ACTION from '../consts/Actions';

function* fetchList() {
    const list = yield call(recipeService.getList);
    yield put({type: ACTION.FETCH_COMPLETED, payload: list});
}

function* fetchListSaga() {
    yield takeLatest(ACTION.FETCH_LIST, fetchList)
}

function* submitRecipe() {
    const storeFrom = yield select(state => state.form);
    const storeControl = yield select(state => state.control);
    let recipe = {}, item;

    RECIPE.forEach(item => {
        if(item.includes('description') || item.includes('ingredients')){
            recipe[item] = storeFrom[item].split('\n').filter(item => item.length);
        } else {
            recipe[item] = storeFrom[item]
        }
    });

    if(!storeControl.editRecipe){
        item = yield call(recipeService.add, recipe);
        yield put({type: ACTION.RECIPE_ADD, payload: item});
    } else {
        item = yield call(recipeService.edit, recipe);
        yield put({type: ACTION.RECIPE_EDIT, payload: item});
    }
}

function* submitListSaga() {
    yield takeLatest(ACTION.SUBMIT_FORM, submitRecipe)
}


function* deleteList(action) {
    yield call(recipeService.remove, action.payload);
    yield put({type: ACTION.RECIPE_DELETE, payload: action.payload});
}

function* deleteListSaga() {
    yield takeLatest(ACTION.DELETE_ITEM, deleteList)
}

export default function* rootSaga() {
    yield all([
        fetchListSaga(),
        submitListSaga(),
        deleteListSaga(),
    ])
}