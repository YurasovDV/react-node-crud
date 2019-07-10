import * as types from '../actionTypes';

const initialState = { articles: [], isLoading: false };

export default function articlesReducer(state = initialState, action = null) {

  switch (action.type) {

    case types.RECEIVE_ARTICLES:
      return { ...state, isLoading: true };
    case types.RECEIVE_ARTICLES_SUCCESS:
      return { ...state, isLoading: false, articles: action.data };
    case types.RECEIVE_ARTICLES_FAIL:
      return { ...state, isLoading: false, error: action.error };

    case types.ADD_ARTICLE:
      return { ...state, isLoading: true };
    case types.ADD_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, articles: state.articles.concat(action.payload), article: action.payload };
    case types.ADD_ARTICLE_FAIL:
      return { ...state, isLoading: false, error: action.error };

    default: return state;
  }
}

export { initialState };
