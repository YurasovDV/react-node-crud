import { GET_ARTICLE, UPDATE_ARTICLE } from '../actions';

export default function articleReducer(state = {}, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return action.article;
      case UPDATE_ARTICLE:
          return {
            id: action.id,
            title: action.payload.title,
            content: action.payload.content,
          };
    default: return state;
  }
};