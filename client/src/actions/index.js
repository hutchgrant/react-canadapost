import axios from 'axios';
import { FETCH_RATE } from './types';

export const fetchRate = (values) => async dispatch => {
    const res = await axios.post('/api/rate', values);
    dispatch({ type: FETCH_RATE, payload: res.data });
};