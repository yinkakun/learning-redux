import { increment, decrement, incrementByAmount } from './counter-slice';
import { useAppDispatch, useAppSelector } from './store';

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default App;
