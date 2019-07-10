import { all, put, takeLatest, call, take, actionChannel } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actionTypes';
import history from '../history';

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
    history.push('/articles');
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
    history.push('/articles');
  }
  catch (error) {
    yield put({ type: actionTypes.DELETE_ARTICLE_FAIL, error });
  }
}

function* updateArticle(action) {
  try {
    const article = action.article;
    const updated = yield call(() =>
      axios.put(`${apiUrl}/${article.id}`, { title: article.title, content: article.content })
        .then(response => response.data));
    yield put({ type: actionTypes.UPDATE_ARTICLE_SUCCESS, payload: updated });
    // yield put({ type: actionTypes.REPLACE_ARTICLE_SUCCESS, payload: { id: updated.id, title: updated.title, content: updated.content } });
    history.push('/articles');
  }
  catch (error) {
    yield put({ type: actionTypes.UPDATE_ARTICLE_FAIL, error });
  }
}

export function* articleSaga() {
  yield all(
    [
      takeLatest(actionTypes.ADD_ARTICLE, createArticle),
      takeLatest(actionTypes.RECEIVE_ARTICLES, getArticles),
      takeLatest(actionTypes.DELETE_ARTICLE, deleteArticle),
      takeLatest(actionTypes.UPDATE_ARTICLE, updateArticle)
    ]
  );
}

