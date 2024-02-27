import User from '../../models/UserModel'
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './fetchUsers';
import { RootState } from '../store';

interface Users {
    data: User[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    selectedUser: any | null;
    error: string | null
}
const initialState: Users = {
    data: [],
    status: 'idle',
    selectedUser: null,
    error: null
}


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Error fetching users'

            })
    }
})
export default userSlice.reducer

export const { selectUser } = userSlice.actions;
export const selectUserLoadingState = (state: RootState) => state.users.status;
export const usersData = (state: RootState) => state.users.data;
