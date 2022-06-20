import { increment, decrement, incrementByAmount } from '../store/counter';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { CounterActions } from '../store/counter';
import { RootState } from '../store/store';

const mapStateToProps = (state: RootState) => {
  const { value } = state.counter;
  return {
    count: value,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterActions>) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CounterProps = ConnectedProps<typeof connector>;

const Counter = ({ count, increment, decrement }: CounterProps) => {
  return (
    <div>
      <button onClick={increment}>Increase</button>
      <div>{count}</div>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default connector(Counter);
