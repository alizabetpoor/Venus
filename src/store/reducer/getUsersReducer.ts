import {createSlice} from '@reduxjs/toolkit';
import {getUsersThunk} from '../../services/ApiService';

export type UsersState = {
  users: any[];
  loading: boolean;
  error: boolean;
  needToReFetch: boolean;
};
const initialState: UsersState = {
  users: [],
  loading: false,
  error: false,
  needToReFetch: false,
};
export const getUsersSlice = createSlice({
  name: 'getUsers',
  initialState,
  reducers: {
    refetchUsers: state => {
      state.needToReFetch = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsersThunk.pending, (state, action) => {
      state.loading = true;
      state.needToReFetch = false;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsersThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {refetchUsers} = getUsersSlice.actions;
export default getUsersSlice.reducer;
