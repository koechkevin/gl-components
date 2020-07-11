import { REGISTER_FAILED, REGISTER_LOADING, REGISTER_SUCCESS } from './actionTypes';

const initialState = {
  register: {
    loading: false,
    response: {},
    errors: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return { ...state, register: { ...state.register, loading: action.payload } };
    case REGISTER_FAILED:
      return { ...state, register: { ...state.register, errors: action.payload } };
    case REGISTER_SUCCESS:
      return { ...state, register: { ...state.register, response: action.payload } };
    default:
      return state;
  }
};
