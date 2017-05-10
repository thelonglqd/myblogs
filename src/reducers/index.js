import { combineReducers } from 'redux';
import postsReducer from './posts';
import postDetailReducer from './post_detail';
import { reducer as formReducer } from 'redux-form';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postsReducer,
  postDetail: postDetailReducer,
  authentication: authenticationReducer,
});

export default rootReducer;
