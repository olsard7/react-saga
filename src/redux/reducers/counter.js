import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actionTypes";

const counter = (state = { count: 0 }, { type }) => {
  switch (type) {
    case INCREASE_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
