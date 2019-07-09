import * as types from '../actions';
const initialState = { articles: [], isLoading: false };
/*
export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    case ADD_ARTICLE:
      return [action.payload, ...state];
    case DELETE_ARTICLE:
      return state.filter(it => it.id !== action.payload.id);
      case REPLACE_ARTICLE:
          return state.map((article) => {
            if (article.id === action.payload.id) {
              // copy the rest of values and replace title + content
              return {
                ...article,
                title: action.payload.title,
                content: action.payload.content,
              }
            } else return article;
          });
    default: return state;
  }
}*/


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
      return { ...state, isLoading: false, subscriberDetails: action.data };
    case types.ADD_ARTICLE_FAIL:
      return { ...state, isLoading: false, error: action.error };

    default: return state;
  }
}
