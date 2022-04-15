import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  getLatestNews,
} from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
  const news = useSelector((store) => store?.news?.news);
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
      {news.map(({ objectID, title }) => (
        <p key={objectID}>{title}</p>
      ))}
    </div>
  );
};

export default App;
