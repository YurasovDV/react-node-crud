import { all, put, takeLatest, call, take, actionChannel } from 'redux-saga/effects';
import axios from 'axios';
import { GET_ARTICLE, GET_ARTICLE_FAIL, GET_ARTICLE_SUCCESS, ADD_ARTICLE, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAIL, RECEIVE_ARTICLES, RECEIVE_ARTICLES_SUCCESS, RECEIVE_ARTICLES_FAIL } from '../actions';

const apiUrl = 'http://localhost:3001/articles';

export function* articleWatcher() {
  const chan = yield actionChannel(GET_ARTICLE);
  while (true) {
    const action = yield take(chan);
    yield call(fetchArticle, action);
  }
}

function* fetchArticle(action) {
  try {
    const { id } = action;
    const article = yield axios.get(`${apiUrl}/${id}`).then(response => response.data);
    yield put({ type: GET_ARTICLE_SUCCESS, article: article });
  }
  catch (error) {
    yield put({ type: GET_ARTICLE_FAIL, error });
  }
}

function* createArticle(action) {
  try {
    const { title, content } = action;
    const data = axios.post(`${apiUrl}/add`, { title, content })
      .then(response =>
        response.data);
    yield put({ type: ADD_ARTICLE_SUCCESS, payload: { id: data.id, title: data.title, content: data.content } });
  }
  catch (error) {
    yield put({ type: ADD_ARTICLE_FAIL, error });
  }
}

function* getArticles() {
  try {
    const data = yield call( () => axios.get(`${apiUrl}`)
      .then(response => response.data));

  debugger;

    yield put({ type: RECEIVE_ARTICLES_SUCCESS, data });
  }
  catch (error) {
    yield put({ type: RECEIVE_ARTICLES_FAIL, error });
  }
}

export function* articleSaga() {
  yield all(
    [
      takeLatest(ADD_ARTICLE, createArticle),
      takeLatest(RECEIVE_ARTICLES, getArticles),
    ]
  );
}

