import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Film } from "../models/film";
import {fetchFilms} from "../api/api";
import {FilmOverview} from "../models/filmOverview";

export interface FilmsState {
  films: Film[];
  currentPage: number;
  currentSearchTerm: string;
  currentFilm: FilmOverview;
}

const initialState: FilmsState = {
  films: [],
  currentPage: 1,
  currentSearchTerm: "",
  currentFilm: {} as FilmOverview
};

export type AppDispatch = typeof store.dispatch;
export type RootScannerState = ReturnType<typeof store.getState>;

const fetchFilmsPage = createAsyncThunk<
  { Search: Film[] },
  { currentSearchTerm: string; pageNumber: number },
  {
    dispatch: AppDispatch;
    state: RootScannerState;
  }
>(
  "films/page",
  async (
    { currentSearchTerm, pageNumber },
    { getState }
  ): Promise<{ Search: Film[] }> => {
    return fetchFilms(currentSearchTerm, pageNumber);
  }
);

const slice = createSlice({
  name: "films",
  initialState,
  reducers: {
    clearFilms(state) {
      state.films = [];
      state.currentPage = 1;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.currentSearchTerm = action.payload;
    },
    incrementPageNumber(state) {
      state.currentPage = state.currentPage + 1;
    },
    resetPageNumber(state) {
      state.currentPage = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsPage.fulfilled, (state, { payload }) => {
      state.films = state.films.concat(payload.Search);
    });
    builder.addCase(fetchFilmsPage.rejected, (state, { error }) => {
      console.error(error);
    });
  },
});

export const store = configureStore({
  reducer: slice.reducer,
});

export const {
  clearFilms,
  setSearchTerm,
  incrementPageNumber,
  resetPageNumber,
} = slice.actions;

export { fetchFilmsPage };
