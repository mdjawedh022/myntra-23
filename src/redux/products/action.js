import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./action.Types";

const getProductRe = () => {
  return { type: GET_PRODUCTS_REQUEST };
};
const getProductSucc = (data) => {
  return { type: GET_PRODUCTS_SUCCESS, payload: data };
};
const getProductErr = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

export const getData = (param = {}) => async (dispatch) => {
  dispatch(getProductRe());
  try {
    let data = await axios.get(
      `https://myntra-backend-i2ku.onrender.com/products?category=Mens`,param
    );
    // console.log(data.data);
    dispatch(getProductSucc(data.data));
  } catch (err) {
    dispatch(getProductErr());
    console.log(err);
  }
};

// -------------------womens------------------------------

export const getDataWomens = (param = {}) => async (dispatch) => {
  dispatch(getProductRe());
  try {
    let data = await axios.get(
      `https://myntra-backend-i2ku.onrender.com/products?category=Womens`,param
    );
    // console.log(data.data);
    dispatch(getProductSucc(data.data));
  } catch (err) {
    dispatch(getProductErr());
    console.log(err);
  }
};

// ----------------------children-----------------------

export const getDataChild = (param = {}) => async (dispatch) => {
  dispatch(getProductRe());
  try {
    let data = await axios.get(
      `https://myntra-backend-i2ku.onrender.com/products?category=Child`,param
    );
    // console.log(data.data);
    dispatch(getProductSucc(data.data));
  } catch (err) {
    dispatch(getProductErr());
    console.log(err);
  }
};
// ------------------------Home--------------------------------------

export const getDataHome = (param = {}) => async (dispatch) => {
  dispatch(getProductRe());
  try {
    let data = await axios.get(
      `https://myntra-backend-i2ku.onrender.com/products?category=Home`,param
    );
    // console.log(data.data);
    dispatch(getProductSucc(data.data));
  } catch (err) {
    dispatch(getProductErr());
    console.log(err);
  }
};
// ----------------------------beauty----------------------------------

export const getDataBeauty = (param = {}) => async (dispatch) => {
  dispatch(getProductRe());
  try {
    let data = await axios.get(
      `https://myntra-backend-i2ku.onrender.com/products?category=Beauty`,param
    );
    // console.log(data.data);
    dispatch(getProductSucc(data.data));
  } catch (err) {
    dispatch(getProductErr());
    console.log(err);
  }
};