import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { requestCharacters } from './characters-store';

const Characters = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestCharacters());
  }, []);

  const { loading, error, characters } = useAppSelector(
    (state) => state.characters
  );

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        characters.map(({ name }) => <li key={name}>{name}</li>)
      )}
    </div>
  );
};

export default Characters;
