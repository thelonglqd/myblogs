import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

console.log(' ##### formReducer: ', formReducer);

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
