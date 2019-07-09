// it's not mandatory to have separate success/fail types

export const GET_ARTICLE = 'GET_ARTICLE';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAIL = 'GET_ARTICLE_FAIL';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
export const ADD_ARTICLE_FAIL = 'ADD_ARTICLE_FAIL';


export const RECEIVE_ARTICLES = 'GET_ARTICLES';
export const RECEIVE_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const RECEIVE_ARTICLES_FAIL = 'GET_ARTICLES_FAIL';


export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_FAIL = 'DELETE_ARTICLE_FAIL';

export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_SUCCESS = 'UPDATE_ARTICLE_SUCCESS';
export const UPDATE_ARTICLE_FAIL = 'UPDATE_ARTICLE_FAIL';


export const REPLACE_ARTICLE = 'REPLACE_ARTICLE';
export const REPLACE_ARTICLE_SUCCESS = 'REPLACE_ARTICLE_SUCCESS';
export const REPLACE_ARTICLE_FAIL = 'REPLACE_ARTICLE_FAIL';

/*
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
*/

export function getArticles() {
  return { type: RECEIVE_ARTICLES};
}

export function getArticle(id) {
  return { type: GET_ARTICLE, id };
}

export function addArticle(article) {
  return { type: ADD_ARTICLE, article };
}

export function updateArticle(article, id) {
  return { type: UPDATE_ARTICLE, article, id };
}

export function deleteArticle(id){
  return { type: DELETE_ARTICLE, id };
}
