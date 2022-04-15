import { takeEvery } from "@redux-saga/core/effects";
import { getLatestNews } from "../../api";
import { GET_LATEST_NEWS } from "../actionTypes";

export function* workerSaga() {
  const data = yield getLatestNews();
  console.log(data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
