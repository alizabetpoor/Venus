import {createSlice} from '@reduxjs/toolkit';
import {SearchInputStateType} from '../../utils/Types';

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: {
    searchInput: '',
    isSearchActive: false,
    searchResults: [],
  } as SearchInputStateType,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setSearchActive: (state, action) => {
      state.isSearchActive = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});
export const {setSearchInput, setSearchActive, setSearchResults} =
  searchInputSlice.actions;
export default searchInputSlice.reducer;
