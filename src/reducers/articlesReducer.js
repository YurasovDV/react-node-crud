import { RECEIVE_ARTICLES, ADD_ARTICLE } from '../actions';
const initialState = { articles: [] };

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    case ADD_ARTICLE:
      return [action.payload, ...state];
    default: return state;
  }
}
