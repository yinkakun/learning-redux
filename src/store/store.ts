import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
