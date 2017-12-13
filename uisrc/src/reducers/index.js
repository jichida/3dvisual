import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { polyglotReducer } from 'redux-polyglot';
import userlogin from './userlogin';

export default combineReducers({
	form: formReducer,
	router: routerReducer,
	userlogin
});
