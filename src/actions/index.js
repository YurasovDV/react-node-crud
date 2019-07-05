import axios from 'axios';

export const RECEIVE_ARTICLES = 'GET_ARTICLES';

const apiUrl = 'http://localhost:3001/api/articles';

export const getArticles = () => {
  return (dispatch) => {
    return Promise.resolve({ data: [{ id: 1, title: 'hardcoded article' }, { id: 2, title: 'hardcoded article 22' }] })
    .then(response => {
      dispatch({ type: RECEIVE_ARTICLES, articles: response.data })
    });
    // axios.get(`${apiUrl}.json`)
    // .then(response => {
    //   dispatch({type: RECEIVE_ARTICLES, articles: response.data})
    // })
    // .catch(error => { throw(error) });
  };
};