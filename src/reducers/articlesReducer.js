import { RECEIVE_ARTICLES } from '../actions';
const initialState = { articles: [] };

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    default: return state;
  }
}
