import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUsers} from './CrudServiceApi';
export const getUsersThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async (usersNumber: number) => {
    const response = await getUsers(usersNumber);
    return response.data;
  },
);
