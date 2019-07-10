import * as types from '../actionTypes';

export function getArticles() {
  return { type:  types.RECEIVE_ARTICLES};
}

export function getArticle(id) {
  return { type: types.GET_ARTICLE, id };
}

export function addArticle(article) {
  return { type: types.ADD_ARTICLE, article };
}

export function updateArticle(article, id) {
  return { type: types.UPDATE_ARTICLE, article, id };
}

export function deleteArticle(id){
  return { type: types.DELETE_ARTICLE, id };
}
