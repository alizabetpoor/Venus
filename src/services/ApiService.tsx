import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUsers} from './CrudServiceApi';
export const getUsersThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await getUsers();
    return response.data;
  },
);
