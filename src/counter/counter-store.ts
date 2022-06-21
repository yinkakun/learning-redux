enum ActionTypes {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
}

interface IncrementAction {
  type: ActionTypes.INCREMENT;
}

interface DecremementAction {
  type: ActionTypes.DECREMENT;
}

interface IncrementByAmountAction {
  type: ActionTypes.INCREMENT_BY_AMOUNT;
  payload: number;
}

type CounterActions =
  | IncrementAction
  | DecremementAction
  | IncrementByAmountAction;

const increment = (): IncrementAction => {
  return {
    type: ActionTypes.INCREMENT,
  };
};

const decrement = (): DecremementAction => {
  return {
    type: ActionTypes.DECREMENT,
  };
};

const incrementByAmount = (amount: number): IncrementByAmountAction => {
  return {
    type: ActionTypes.INCREMENT_BY_AMOUNT,
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
  if (action.type === ActionTypes.INCREMENT) {
    return {
      ...state,
      value: state.value + 1,
    };
  }

  if (action.type === ActionTypes.DECREMENT) {
    return {
      ...state,
      value: state.value - 1,
    };
  }

  if (action.type === ActionTypes.INCREMENT_BY_AMOUNT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  }

  return state;
};

export { counterReducer, increment, decrement, incrementByAmount };
