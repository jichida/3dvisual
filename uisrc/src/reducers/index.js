import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { polyglotReducer } from 'redux-polyglot';
import data from './data';

export default combineReducers({
	form: formReducer,
	data: data,
	router: routerReducer,
});
