import { increment, decrement, incrementByAmount } from './counter-slice';
import { fetchCharacters } from './characters-slice';
import { useAppDispatch, useAppSelector } from './store';

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const { characters, loading, error } = useAppSelector(
    (state) => state.characters
  );
  const dispatch = useAppDispatch();

  return (
    <div>
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

      <div>
        <button
          onClick={() => {
            dispatch(fetchCharacters());
          }}
        >
          Fetch Charaters
        </button>

        {loading ? <div>Loading...</div> : null}
        {error ? <div>{error}</div> : null}
        {characters && (
          <ul>
            {characters.map((character) => (
              <li key={character.name}>{character.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
