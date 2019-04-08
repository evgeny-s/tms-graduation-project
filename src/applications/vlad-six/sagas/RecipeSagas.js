import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import recipeService from '../service/RecipeService';
import R from '../consts/Recipe';
import A from '../consts/Actions';

function* fetchList() {
    const list = yield call(recipeService.getList);
    yield put({type: A.FETCH_COMPLETED, payload: list});
}

function* fetchListSaga() {
    yield takeLatest(A.FETCH_LIST, fetchList)
}

function* submitRecipe() {
    const storeFrom = yield select(state => state.form);
    const storeControl = yield select(state => state.control);
    let recipe = {}, item;

    R.forEach(item => {
        if(item.includes('description') || item.includes('ingredients')){
            recipe[item] = storeFrom[item].split('\n').filter(item => item.length);
        } else {
            recipe[item] = storeFrom[item]
        }
    });

    if(!storeControl.editRecipe){
        item = yield call(recipeService.add, recipe);
        yield put({type: A.RECIPE_ADD, payload: item});
    } else {
        item = yield call(recipeService.edit, recipe);
        yield put({type: A.RECIPE_EDIT, payload: item});
    }
}

function* submitListSaga() {
    yield takeLatest(A.SUBMIT_FORM, submitRecipe)
}


function* deleteList(action) {
    yield call(recipeService.remove, action.payload);
    yield put({type: A.RECIPE_DELETE, payload: action.payload});
}

function* deleteListSaga() {
    yield takeLatest(A.DELETE_ITEM, deleteList)
}

export default function* rootSaga() {
    yield all([
        fetchListSaga(),
        submitListSaga(),
        deleteListSaga(),
    ])
}

export {
    fetchListSaga,
    submitListSaga,
    deleteListSaga,
};