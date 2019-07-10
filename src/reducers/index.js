import reduceReducers from 'reduce-reducers';
import articles from './articlesReducer';
import article from './articleReducer';

// every reducer has full access to state
export default reduceReducers(articles, article);