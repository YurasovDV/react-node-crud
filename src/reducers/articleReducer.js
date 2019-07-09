import * as types from '../actions';

export default function articleReducer(state = {}, action) {
  switch (action.type) {

    case types.GET_ARTICLE:
      return { ...state, isLoading: true };
    case types.GET_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, article: action.data };
    case types.GET_ARTICLE_FAIL:
      return { ...state, isLoading: false, error: action.error };


      case types.UPDATE_ARTICLE:
          return { ...state, isLoading: true };
        case types.UPDATE_ARTICLE_SUCCESS:
          return { ...state, isLoading: false, subscriberDetails: action.data };
        case types.UPDATE_ARTICLE_FAIL:
          return { ...state, isLoading: false, error: action.error };


    // case GET_ARTICLE:
    //   return action.article;
      // case UPDATE_ARTICLE:
      //     return {
      //       id: action.id,
      //       title: action.payload.title,
      //       content: action.payload.content,
      //     };
    default: return state;
  }
};