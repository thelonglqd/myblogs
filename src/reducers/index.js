import { combineReducers } from 'redux';
import postsReducer from './posts';
import postDetailReducer from './post_detail';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postsReducer,
  postDetail: postDetailReducer
});

export default rootReducer;
