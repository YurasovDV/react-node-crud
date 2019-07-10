import { all, put, takeLatest, call, take, actionChannel } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actionTypes';

const apiUrl = 'http://localhost:3001/articles';

export function* articleWatcher() {
  const chan = yield actionChannel(actionTypes.GET_ARTICLE);
  while (true) {
    const action = yield take(chan);
    yield call(fetchArticle, action);
  }
}

function* fetchArticle(action) {
  try {
    const { id } = action;
    const article = yield axios.get(`${apiUrl}/${id}`).then(response => response.data);
    yield put({ type: actionTypes.GET_ARTICLE_SUCCESS, article: article });
  }
  catch (error) {
    yield put({ type: actionTypes.GET_ARTICLE_FAIL, error });
  }
}

function* createArticle(action) {
  try {
    const { title, content } = action.article;
    const data = yield call(() => axios.post(`${apiUrl}/add`, { title, content })
      .then(response =>
        response.data));
    yield put({ type: actionTypes.ADD_ARTICLE_SUCCESS, payload: { id: data.id, title: data.title, content: data.content } });
  }
  catch (error) {
    yield put({ type: actionTypes.ADD_ARTICLE_FAIL, error });
  }
}

function* getArticles() {
  try {
    const data = yield call(() => axios.get(`${apiUrl}`)
      .then(response => response.data));
    yield put({ type: actionTypes.RECEIVE_ARTICLES_SUCCESS, data });
  }
  catch (error) {
    yield put({ type: actionTypes.RECEIVE_ARTICLES_FAIL, error });
  }
}

function* deleteArticle(action) {
  try {
    const id = action.id;
    yield call(
      () => axios.delete(`${apiUrl}/${id}`));
    yield put({ type: actionTypes.DELETE_ARTICLE_SUCCESS, payload: { id } });
  }
  catch (error) {
    yield put({ type: actionTypes.DELETE_ARTICLE_FAIL, error });
  }
}

export function* articleSaga() {
  yield all(
    [
      takeLatest(actionTypes.ADD_ARTICLE, createArticle),
      takeLatest(actionTypes.RECEIVE_ARTICLES, getArticles),
      takeLatest(actionTypes.DELETE_ARTICLE, deleteArticle),
    ]
  );
}

