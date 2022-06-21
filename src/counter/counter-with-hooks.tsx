import { useAppDispatch, useAppSelector } from '../store';
import { increment, decrement, incrementByAmount } from './counter-store';
import { useState } from 'react';

const CounterWithHooks = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <div>
        <input
          type="text"
          onChange={(e) => {
            const value = e.target.value;
            if (Number.isNaN(Number(value))) {
              return;
            }
            setAmount(Number(e.target.value));
          }}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increase by {amount}
        </button>
      </div>
    </div>
  );
};

export default CounterWithHooks;
