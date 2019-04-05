import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import highestScoreService from '../services/highestScoreService';

function* fetchList() {
    const playerList = yield call(highestScoreService.getPlayerList);
    yield put({type: "FETCH_COMPLETED", payload: playerList});
}

function* fetchListSaga() {
    yield takeLatest("FETCH_PLAYER_LIST", fetchList)
}

export default function* rootSaga() {
    yield all([
        fetchListSaga(),
    ])
}