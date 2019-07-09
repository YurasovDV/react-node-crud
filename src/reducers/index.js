import reduceReducers from 'reduce-reducers';
import articles from './articlesReducer';
import article from './articleReducer';

export default reduceReducers(articles, article);