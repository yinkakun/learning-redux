import Counter from './counter/counter';
import CounterWithHooks from './counter/counter-with-hooks';
import Characters from './character/characters';

const App = () => {
  return (
    <div>
      <Counter />
      <CounterWithHooks />
      <Characters />
    </div>
  );
};

export default App;
