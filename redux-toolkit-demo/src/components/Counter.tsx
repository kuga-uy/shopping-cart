import { useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  REQUEST_STATUS,
} from "../redux/counter/counterSlice";
import { selectCount, selectCountStatus } from "../redux/counter/selectors";
import endava from "../assets/endava.png";
import { useAppDispatch } from "../redux/store";
import "./Counter.css";

const Counter = () => {
  const count = useSelector(selectCount);
  const countStatus = useSelector(selectCountStatus);
  const dispatch = useAppDispatch();

  return (
    <div className="counter-container">
      <img className="img" src={endava} />
      <h1>Redux Toolkit Counter</h1>
      <span className="counter-value">
        {countStatus === REQUEST_STATUS.PENDING ? "LOADING..." : count}
      </span>
      <div className="buttons-container">
        <button className="button" onClick={() => dispatch(increment())}>
          +1
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          -1
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementByAmount(count))}
        >
          Increment by count value
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementAsync(count))}
        >
          Async + count value
        </button>
      </div>
    </div>
  );
};

export default Counter;
