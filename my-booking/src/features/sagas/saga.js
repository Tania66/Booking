import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { FETCH_DATA_DESTINATION_SAGA } from "./actionsType.js";
import {
  fetchData,
  fetchDataError,
  fetchDataPending,
} from "../redux/hotelSlice.js";

export function* fetchDataSaga() {
  try {
    yield put(fetchDataPending(true));
    const result = yield call(() =>
      axios.get("http://localhost:5000/destination")
    );
    yield put(fetchData(result.data));
    yield put(fetchDataPending(false));
  } catch (error) {
    yield put(fetchDataError(error.message));
  }
}

export default function* mySaga() {
  yield takeEvery(FETCH_DATA_DESTINATION_SAGA, fetchDataSaga);
}
