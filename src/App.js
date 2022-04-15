import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseCounter());

  const handleDecrease = () => dispatch(decreaseCounter());

  return (
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
