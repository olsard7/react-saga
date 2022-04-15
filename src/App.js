import { useSelector } from "react-redux";

const App = () => {
  const store = useSelector((store) => store);
  console.log(store);
  return <p>Start</p>;
};

export default App;
