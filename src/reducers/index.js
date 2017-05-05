import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './posts';
import postDetailReducer from './post_detail';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postsReducer,
  postDetail: postDetailReducer
});

export default rootReducer;
