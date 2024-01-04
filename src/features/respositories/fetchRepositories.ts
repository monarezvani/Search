import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import Repository from '../../models/RepositoryModel';

export const fetchRepositories = createAsyncThunk('repositories/getRepositories', async function (username: string) {
    try {
        const result = await axios.get(`https://api.github.com/users/${username}/repos`);
        return await result.data as Repository[]
    }
    catch (error) {
        throw new Error('Error fetching repositories')
    }

})