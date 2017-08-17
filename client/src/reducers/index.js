import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import rateReducer from './rateReducer';

export default combineReducers({
    form: reduxForm,
    rate: rateReducer
});