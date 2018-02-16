import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import counter from './counter';

export default combineReducers({
  form: reduxFormReducer,
  counter,
});
