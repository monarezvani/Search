import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import Repository from '../../models/RepositoryModel';
import { fetchRepositories } from './fetchRepositories';
import { RootState } from '../store';

interface RepoState {
    repositories: Repository[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: RepoState = {
    repositories: [],
    status: 'idle',
    error: null,
};

export const repoSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRepositories.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(fetchRepositories.fulfilled, (state, action: PayloadAction<Repository[]>) => {
                state.status = 'succeeded',
                    state.repositories = action.payload
            }),
            builder.addCase(fetchRepositories.rejected, (state, action) => {
                state.error = action.error.message ?? 'Error fetching repositories';
            })
    }

})
export default repoSlice.reducer
export const repositoriesData = (state: RootState) => state.repositories.repositories;
export const selectRepoLoadingState = (state: RootState) => state.repositories.status;
