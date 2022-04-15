import { take } from "@redux-saga/core/effects";
import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actionTypes";

export function* workerSaga() {}

export function* watchClickSaga() {
  yield take(INCREASE_COUNTER);
  console.log("increase");
  yield take(DECREASE_COUNTER);
  console.log("decrease");
}

export default function* rootSaga() {
  yield watchClickSaga();
}
