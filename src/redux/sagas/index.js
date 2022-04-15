import { takeEvery, put } from "@redux-saga/core/effects";
import { getLatestNews } from "../../api";
import { setLatestNews } from "../actions/actionCreator";
import { GET_LATEST_NEWS } from "../actionTypes";

export function* handleLatestNews() {
  const { hits } = yield getLatestNews();
  yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
