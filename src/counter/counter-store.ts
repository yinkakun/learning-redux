const enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT',
}

interface IncrementAction {
  type: CounterActionTypes.INCREMENT;
}

interface DecremementAction {
  type: CounterActionTypes.DECREMENT;
}

interface IncrementByAmountAction {
  type: CounterActionTypes.INCREMENT_BY_AMOUNT;
  payload: number;
}

type CounterActions =
  | IncrementAction
  | DecremementAction
  | IncrementByAmountAction;

const increment = (): IncrementAction => {
  return {
    type: CounterActionTypes.INCREMENT,
  };
};

const decrement = (): DecremementAction => {
  return {
    type: CounterActionTypes.DECREMENT,
  };
};

const incrementByAmount = (amount: number): IncrementByAmountAction => {
  return {
    type: CounterActionTypes.INCREMENT_BY_AMOUNT,
    payload: amount,
  };
};

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (state = initialState, action: CounterActions) => {
  if (action.type === CounterActionTypes.INCREMENT) {
    return {
      ...state,
      value: state.value + 1,
    };
  }

  if (action.type === CounterActionTypes.DECREMENT) {
    return {
      ...state,
      value: state.value - 1,
    };
  }

  if (action.type === CounterActionTypes.INCREMENT_BY_AMOUNT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  }

  return state;
};

export { counterReducer, increment, decrement, incrementByAmount };
