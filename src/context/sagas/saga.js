import { CANCEL } from "redux-saga";
import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import axios from "axios";
import AXIOS_CONFIGS from "../../utilities/requests/axiosConfig";
import { setData, setError } from "../actions/action";

const sagas = [watchGetFact];

function fetchFact(payload) {
  const cancelSource = axios.CancelToken.source();
  const config = { ...AXIOS_CONFIGS[payload], cancelToken: cancelSource.token };
  const data = axios(config);
  data[CANCEL] = () => cancelSource.cancel();
  return data;
}

export function* getFact({ payload }) {
  try {
    const { data: fact } = yield call(fetchFact, payload);
    yield put(setData(fact));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* watchGetFact() {
  yield takeLatest("GET_FACT", getFact);
}

export default function* rootSaga() {
  try {
    yield all(sagas.map(fork));
  } catch (e) {
    console.log(4);
    throw e;
  }
}
