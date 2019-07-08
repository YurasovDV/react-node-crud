import axios from 'axios';
import history from '../history';


export const RECEIVE_ARTICLES = 'GET_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const GET_ARTICLE = 'GET_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const REPLACE_ARTICLE = 'REPLACE_ARTICLE';

const apiUrl = 'http://localhost:3001/articles';

export const getArticles = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}`)
      .then(response => {
        dispatch({ type: RECEIVE_ARTICLES, articles: response.data })
      })
      .catch(error => { throw (error); });
  };
};

export const addArticle = ({ title, content }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, { title, content })
      .then(response => {
        let data = response.data;
        dispatch({ type: ADD_ARTICLE, payload: { id: data.id, title: data.title, content: data.content } })
      })
      .then(() => { history.push("/articles") })
      .catch(error => { throw (error); })
  }
};

export const getArticle = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({ type: GET_ARTICLE, article: response.data });
      })
      .catch(error => { throw (error) });
  };
};

export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({ type: DELETE_ARTICLE, payload: { id } });
      })
      .then(() => { history.push("/articles") })
      .catch(error => {
        throw (error)
      });
  };
};

export const updateArticle = (article) => {
  const articleId = article.id;
  return (dispatch) => {
    return axios.put(`${apiUrl}/${article.id}`, { title: article.title, content: article.content }).then(response => {
      const data = response.data;
      dispatch({ type: UPDATE_ARTICLE, payload: { id: data.id, title: data.title, content: data.content } });
      dispatch({ type: REPLACE_ARTICLE, payload: { id: data.id, title: data.title, content: data.content } });
    }).then(() => {
      history.push(`/articles/${articleId}`)
    })
      .catch(error => { throw (error) });
  };
};
