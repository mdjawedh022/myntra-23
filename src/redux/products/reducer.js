import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./action.Types";

const initialState = {
  product: [],
  womens: [],
  child: [],
  home:[],
  beauty:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: payload,
        womens: payload,
        child: payload,
        home:payload,
        beauty:payload
      };
    case GET_PRODUCTS_FAILURE:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
