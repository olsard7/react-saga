import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
} from "@redux-saga/core/effects";
import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actionTypes";

const delay = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });

export function* workerSaga(param) {
  const count = yield select(({ counter }) => counter.count);
  yield delay(2);
  console.log(`request ${count} ${param}`);
}

export function* watchClickSaga() {
  yield takeLatest(INCREASE_COUNTER, () => workerSaga("latest"));
  yield takeLeading(INCREASE_COUNTER, () => workerSaga("leading"));
}

export default function* rootSaga() {
  yield watchClickSaga();
}
