import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  GET_LATEST_NEWS,
  SET_LATEST_NEWS,
  SET_LATEST_NEWS_ERROR,
} from "../actionTypes";

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});

export const setLatestNews = (hits) => ({
  type: SET_LATEST_NEWS,
  payload: hits,
});

export const setLatestNewsError = () => ({
  type: SET_LATEST_NEWS_ERROR,
});
