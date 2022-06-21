import { increment, decrement, incrementByAmount } from './counter-store';
import { Dispatch, bindActionCreators, AnyAction } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store';

const mapStateToProps = (state: RootState) => ({
  count: state.counter.value,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    { increment, decrement, incrementByAmount },
    dispatch
  );
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

const Counter = ({ count, increment, decrement }: Props) => {
  return (
    <div>
      <button onClick={increment}>Increase</button>
      <div>{count}</div>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default connector(Counter);
