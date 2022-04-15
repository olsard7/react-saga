import { takeEvery, put, call } from "@redux-saga/core/effects";
import { getLatestNews } from "../../api";
import { setLatestNews, setLatestNewsError } from "../actions/actionCreator";
import { GET_LATEST_NEWS } from "../actionTypes";

export function* handleLatestNews() {
  //   const { hits } = yield call(getLatestNews, "react");
  //   yield put(setLatestNews(hits));

  try {
    const { hits } = yield call(getLatestNews, "react");
    yield put(setLatestNews(hits));
  } catch (error) {
    yield put(setLatestNewsError());
  }
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
