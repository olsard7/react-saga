import { SET_LATEST_NEWS, SET_LATEST_NEWS_ERROR } from "../actionTypes";

const news = (state = { news: [], hasError: false }, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS:
      return { ...state, news: [...state.news, ...payload], hasError: false };
    case SET_LATEST_NEWS_ERROR:
      return { ...state, hasError: true };
    default:
      return state;
  }
};

export default news;
