// Action creators

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

export type CounterActions =
  | IncrementAction
  | DecremementAction
  | IncrementByAmountAction;

export const increment = (): IncrementAction => {
  return {
    type: ActionTypes.INCREMENT,
  };
};

export const decrement = (): DecremementAction => {
  return {
    type: ActionTypes.DECREMENT,
  };
};

export const incrementByAmount = (amount: number): IncrementByAmountAction => {
  return {
    type: ActionTypes.INCREMENT_BY_AMOUNT,
    payload: amount,
  };
};

// Reducer

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = (
  state = initialState,
  action: CounterActions
) => {
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
