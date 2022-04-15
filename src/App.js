import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  getLatestNews,
} from "./redux/actions/actionCreator";

const App = () => {
  const { count } = useSelector((store) => store?.counter);
  const { news, hasError } = useSelector((store) => store?.news);
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseCounter());

  const handleDecrease = () => dispatch(decreaseCounter());

  const handleNews = () => dispatch(getLatestNews());

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleNews}>Get News</button>
      <h1>{count}</h1>
      {hasError ? (
        <p className="error">Server error...</p>
      ) : (
        news.map(({ objectID, title }) => <p key={objectID}>{title}</p>)
      )}
    </div>
  );
};

export default App;
