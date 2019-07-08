import { RECEIVE_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, REPLACE_ARTICLE } from '../actions';
const initialState = { articles: [] };

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
}
