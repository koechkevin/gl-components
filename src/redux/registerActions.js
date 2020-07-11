import api from '../api';
import {REGISTER_FAILED, REGISTER_LOADING, REGISTER_SUCCESS} from './actionTypes';

const loading = (payload) => ({ type: REGISTER_LOADING, payload });
export const successAction = (payload) => ({ type: REGISTER_SUCCESS, payload });
export const errorsAction= (payload) => ({ type: REGISTER_FAILED, payload });

export const register = async (values, dispatch, onSuccess = () => {}, onFailed = () => {}) => {
  dispatch(loading(true));
  try {
    const response = await api.post('/api/register', values);
    dispatch(successAction(response.data));
    dispatch(loading(false));
    onSuccess();
  } catch (err) {
    onFailed(err);
    dispatch(loading(false));
    if (err.response?.status === 422) {
      dispatch(errorsAction(err.response?.data));
    }
  }
};
