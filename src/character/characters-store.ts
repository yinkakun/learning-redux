import { Dispatch } from 'redux';
import { ActionCreator } from 'redux';

interface Character {
  name: string;
  gender: string;
}

enum ActionTypes {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
}

interface RequestCharactersPending {
  type: ActionTypes.REQUEST_PENDING;
}

interface RequestCharactersSuccess {
  type: ActionTypes.REQUEST_SUCCESS;
  payload: Character[];
}

interface RequestCharactersFailure {
  type: ActionTypes.REQUEST_FAILURE;
  payload: string | null;
}

type CharactersActions =
  | RequestCharactersPending
  | RequestCharactersSuccess
  | RequestCharactersFailure;

const requestCharactersPending: ActionCreator<
  RequestCharactersPending
> = () => ({
  type: ActionTypes.REQUEST_PENDING,
});

const requestCharactersSuccess: ActionCreator<RequestCharactersSuccess> = (
  characters: Character[]
) => ({
  type: ActionTypes.REQUEST_SUCCESS,
  payload: characters,
});

const requestCharactersFailure: ActionCreator<RequestCharactersFailure> = (
  error: string
) => ({
  type: ActionTypes.REQUEST_FAILURE,
  payload: error,
});

const URL = 'https://swapi.dev/api/people';

interface JSONResponse {
  results: Character[];
}

const requestCharacters = () => {
  return async (dispatch: Dispatch<CharactersActions>) => {
    dispatch(requestCharactersPending());
    try {
      const response = await fetch(URL);
      const data: JSONResponse = await response.json();
      dispatch(requestCharactersSuccess(data.results));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(requestCharactersFailure(error.message));
        return;
      }
    }
  };
};

interface CharactersState {
  loading: boolean;
  characters: Character[];
  error: string | null | undefined;
}

const initialState: CharactersState = {
  loading: false,
  error: null,
  characters: [],
};

const charactersReducer = (state = initialState, action: CharactersActions) => {
  if (action.type === ActionTypes.REQUEST_PENDING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ActionTypes.REQUEST_SUCCESS) {
    return {
      ...state,
      loading: false,
      characters: action.payload,
    };
  }

  if (action.type === ActionTypes.REQUEST_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export { charactersReducer, requestCharacters };
