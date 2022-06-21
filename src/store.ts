import { createStore, combineReducers, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { counterReducer } from './counter/counter-store';
import { charactersReducer } from './character/characters-store';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  counter: counterReducer,
  characters: charactersReducer,
});

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
export type { RootState, AppDispatch };
export { useAppDispatch, useAppSelector };

console.log('store', store.getState());
