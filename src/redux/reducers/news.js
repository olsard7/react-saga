import { SET_LATEST_NEWS } from "../actionTypes";

const news = (state = { news: [] }, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS:
      return { ...state, news: [...state.news, ...payload] };
    default:
      return state;
  }
};

export default news;
