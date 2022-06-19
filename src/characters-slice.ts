import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://swapi.dev/api';

interface Character {
  name: string;
  gender: string;
}

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

interface JSONResponse {
  results: Character[];
}

const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await fetch(`${BASE_URL}/people`);
    const data: JSONResponse = await response.json();
    return data.results.map(({ name, gender }) => {
      return {
        name,
        gender,
      };
    });
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export { fetchCharacters };
export const charactersReducer = charactersSlice.reducer;
