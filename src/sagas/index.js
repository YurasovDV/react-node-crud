import { all } from 'redux-saga/effects';
import { articleSaga, articleWatcher } from './articleSaga';

export default function* rootSaga() {
  yield all([
    articleWatcher(),
    articleSaga()
  ]);
}