import { takeLatest, call, put } from "redux-saga/effects"
import axios from "axios"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga)
}

// function that makes the api request and returns a Promise for response
function fetchCard() {
  return axios({
    method: "get",
    url: "https://api.scryfall.com/cards/random?q=has%3Aflavor"
  })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
      const response = yield call(fetchCard)
      const card = response.data
  
      // dispatch a success action to the store with the new card
      yield put({ type: "API_CALL_SUCCESS", card })
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error })
    }
}
